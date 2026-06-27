/**
 * lastquestion.co — Pakasir Payment Gateway Integration
 *
 * SDK: https://github.com/zeative/pakasir-sdk
 * Docs: https://pakasir.com
 *
 * Configuration:
 *   PAKASIR_API_KEY  — your API key from pakasir.com dashboard
 *   PAKASIR_SLUG     — your project slug from pakasir.com dashboard
 *
 * All functions are server-side only (used in API routes / server actions).
 */

import { Pakasir } from 'pakasir-sdk'
import type { PaymentPayload } from 'pakasir-sdk'

// Re-export PaymentPayload so callers don't need to import pakasir-sdk directly
export type { PaymentPayload }

// ── Payment method codes supported by Pakasir ─────────────────
export type PaymentMethod =
  | 'qris'
  | 'paypal'
  | 'bni_va'
  | 'bri_va'
  | 'cimb_niaga_va'
  | 'maybank_va'
  | 'permata_va'
  | 'bnc_va'
  | 'atm_bersama_va'
  | 'sampoerna_va'
  | 'artha_graha_va'
  | 'all'

export const PAYMENT_METHOD_LABELS: Record<string, string> = {
  qris:            'QRIS (Semua e-wallet & m-banking)',
  bni_va:          'Virtual Account BNI',
  bri_va:          'Virtual Account BRI',
  cimb_niaga_va:   'Virtual Account CIMB Niaga',
  maybank_va:      'Virtual Account Maybank',
  permata_va:      'Virtual Account Permata',
  bnc_va:          'Virtual Account BNC',
  atm_bersama_va:  'Virtual Account ATM Bersama',
  sampoerna_va:    'Virtual Account Sampoerna',
  artha_graha_va:  'Virtual Account Artha Graha',
  paypal:          'PayPal',
}

// ── Singleton client factory ───────────────────────────────────
function getPakasirClient(): Pakasir {
  const slug   = process.env.PAKASIR_SLUG   || 'lastquestion'
  const apikey = process.env.PAKASIR_API_KEY || ''

  if (!apikey) {
    throw new Error('PAKASIR_API_KEY is not set. Add it to your .env.local file.')
  }

  return new Pakasir({ slug, apikey })
}

// ── createInvoice ──────────────────────────────────────────────
/**
 * Create a new payment invoice via Pakasir.
 *
 * @param method      Payment method code (e.g. 'qris', 'bni_va')
 * @param orderId     Unique order ID — minimum 5 characters
 * @param amount      Amount in Rupiah — minimum Rp 500
 * @param redirectUrl Optional URL to redirect after payment is complete
 *
 * @returns PaymentPayload with payment_url and payment details
 *
 * Example:
 *   const invoice = await createInvoice('qris', 'ORDER-001', 350000, 'https://lastquestion.co/checkout/ORDER-001/success')
 */
export async function createInvoice(
  method: PaymentMethod,
  orderId: string,
  amount: number,
  redirectUrl?: string,
): Promise<PaymentPayload> {
  const pakasir = getPakasirClient()
  const result = await pakasir.createPayment(method, orderId, amount, redirectUrl)
  return result
}

// ── checkStatus ────────────────────────────────────────────────
/**
 * Check the current status of a payment.
 *
 * @param orderId Unique order ID
 * @param amount  Original payment amount in Rupiah
 *
 * @returns PaymentPayload with current status ('pending' | 'completed' | 'canceled')
 */
export async function checkStatus(
  orderId: string,
  amount: number,
): Promise<PaymentPayload> {
  const pakasir = getPakasirClient()
  return await pakasir.detailPayment(orderId, amount)
}

// ── cancelPayment ──────────────────────────────────────────────
/**
 * Cancel a pending payment.
 *
 * @param orderId Unique order ID
 * @param amount  Original payment amount in Rupiah
 */
export async function cancelPayment(
  orderId: string,
  amount: number,
): Promise<PaymentPayload> {
  const pakasir = getPakasirClient()
  return await pakasir.cancelPayment(orderId, amount)
}

// ── simulatePayment ────────────────────────────────────────────
/**
 * Simulate a successful payment (TESTING ONLY — do not use in production).
 *
 * @param orderId Unique order ID
 * @param amount  Original payment amount in Rupiah
 */
export async function simulatePayment(
  orderId: string,
  amount: number,
): Promise<PaymentPayload> {
  const pakasir = getPakasirClient()
  return await pakasir.simulationPayment(orderId, amount)
}

// ── getPaymentUrl ──────────────────────────────────────────────
/**
 * Generate a payment URL without an API call (client-safe).
 * Useful for building redirect links without server round-trip.
 *
 * @param method  Payment method code
 * @param orderId Unique order ID
 * @param amount  Amount in Rupiah
 */
export function getPaymentUrl(
  method: PaymentMethod,
  orderId: string,
  amount: number,
): PaymentPayload {
  const pakasir = getPakasirClient()
  return pakasir.getPaymentUrl(method, orderId, amount)
}

// ── watchPayment ───────────────────────────────────────────────
/**
 * Poll payment status in real-time. Used in webhooks or background jobs.
 *
 * @param orderId        Unique order ID
 * @param amount         Payment amount in Rupiah
 * @param onComplete     Callback when payment is completed
 * @param onError        Callback on polling error
 * @param intervalMs     Polling interval in ms (default: 3000)
 * @param timeoutMs      Max polling duration in ms (default: 600000 = 10 min)
 */
export function watchPayment(
  orderId: string,
  amount: number,
  onComplete: (payload: PaymentPayload) => void,
  onError?: (err: Error) => void,
  intervalMs = 3000,
  timeoutMs = 600000,
): void {
  const pakasir = getPakasirClient()
  pakasir.watchPayment(orderId, amount, {
    interval: intervalMs,
    timeout: timeoutMs,
    onStatusChange: (payment) => {
      if (payment.status === 'completed' || payment.status === 'canceled') {
        onComplete(payment)
        pakasir.stopWatch(orderId, amount)
      }
    },
    onError: onError ?? ((err) => console.error('[Pakasir] watch error:', err)),
  })
}

// ── stopWatching ───────────────────────────────────────────────
export function stopWatching(orderId: string, amount: number): void {
  const pakasir = getPakasirClient()
  pakasir.stopWatch(orderId, amount)
}

// ── generateOrderId ────────────────────────────────────────────
/**
 * Generate a unique order ID safe for Pakasir (min 5 chars).
 * Format: LQ-YYYYMMDD-XXXX
 */
export function generateOrderId(): string {
  const now = new Date()
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('')
  const rand = String(Math.floor(Math.random() * 9000) + 1000)
  return `LQ-${date}-${rand}`
}

// ── formatRupiah ───────────────────────────────────────────────
export function formatRupiah(amount: number): string {
  return 'Rp ' + amount.toLocaleString('id-ID')
}
