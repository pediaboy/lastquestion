'use client'
export default function Stars() {
  return (
    <div className="stars-bg" aria-hidden="true">
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  )
}
