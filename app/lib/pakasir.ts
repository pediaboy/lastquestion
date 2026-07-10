/**
 * lastquestion.co — Payment utility functions
 * Using manual bank transfer (SeaBank & DANA)
 */

export const PAYMENT_ACCOUNTS = {
  seabank: {
    label: 'SeaBank',
    number: '901555691160',
    holder: 'THIRAFI THARIQ AL IDRIS',
  },
  dana: {
    label: 'DANA',
    number: '082218723401',
    holder: 'THIRAFI THARIQ AL IDRIS',
  },
}

export function generateOrderNumber(): string {
  const date = new Date()
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const rand = Math.floor(Math.random() * 9000) + 1000
  return `LQ-${y}${m}${d}-${rand}`
}

export function generateInvoiceNumber(): string {
  const date = new Date()
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const rand = Math.floor(Math.random() * 9000) + 1000
  return `INV-LQ-${y}${m}${d}-${rand}`
}

export function formatRupiah(amount: number): string {
  return `Rp${amount.toLocaleString('id-ID')}`
}
