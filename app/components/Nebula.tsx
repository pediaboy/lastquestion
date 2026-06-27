export default function Nebula() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Main purple nebula */}
      <div style={{
        position: 'absolute', top: '-20%', left: '30%',
        width: '80vw', height: '80vh', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(109,40,217,0.18) 0%, rgba(76,29,149,0.08) 50%, transparent 75%)',
        animation: 'nebula-pulse 12s ease-in-out infinite',
        filter: 'blur(40px)',
      }} />
      {/* Blue nebula accent */}
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '60vw', height: '60vh', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
        animation: 'nebula-pulse 18s 4s ease-in-out infinite',
        filter: 'blur(60px)',
      }} />
      {/* Deep purple bottom */}
      <div style={{
        position: 'absolute', bottom: '-10%', left: '10%',
        width: '50vw', height: '40vh', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)',
        animation: 'nebula-pulse 15s 8s ease-in-out infinite',
        filter: 'blur(50px)',
      }} />
    </div>
  )
}
