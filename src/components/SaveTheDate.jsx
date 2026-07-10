import React, { useState, useEffect } from 'react'

const WEDDING_DATE = new Date('2026-08-08T00:00:00')

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - new Date().getTime()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a1128] via-[#132352] to-[#1b3a7a] flex flex-col items-center justify-center px-6 py-24 text-white">

      {/* Stars */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/80"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Castle silhouette */}
      <svg
        viewBox="0 0 600 220"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl opacity-90 pointer-events-none"
        fill="#0a1128"
      >
        <path d="M40 220 V150 H20 V120 H60 V90 H40 V60 L60 40 L80 60 V90 H120 V60 L140 40 L160 60 V90 H200 V150 H180 V220 Z
                 M220 220 V130 L260 90 L300 60 L340 90 L380 130 V220 Z
                 M260 90 V60 L280 40 V60 H300 V40 L320 60 V90
                 M420 220 V150 H400 V120 H440 V90 H420 V60 L440 40 L460 60 V90 H500 V60 L520 40 L540 60 V90 H560 V150 H540 V220 Z" />
      </svg>

      {/* Scroll hint */}
      <p className="relative z-10 mt-32 text-[10px] tracking-[0.35em] text-white/50 uppercase">
        Scroll to discover
      </p>

      {/* Heading */}
      <h1 className="relative z-10 mt-10 font-serif text-3xl sm:text-4xl tracking-[0.25em] uppercase text-center">
        Save the Date!
      </h1>

      <span className="relative z-10 mt-3 text-2xl">🎀</span>

      {/* Countdown */}
      <div className="relative z-10 mt-8 flex items-center gap-3 sm:gap-8 border border-white/30 px-6 py-5 sm:px-10 sm:py-6">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Min' },
          { value: timeLeft.seconds, label: 'Sec' },
        ].map((item, idx) => (
          <React.Fragment key={item.label}>
            <div className="flex flex-col items-center w-12">
              <span className="font-serif text-3xl sm:text-4xl tabular-nums">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="mt-1 text-[9px] tracking-[0.2em] uppercase text-white/50">
                {item.label}
              </span>
            </div>
            {idx < 3 && <span className="text-white/30 text-xl -mt-3">|</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Target date */}
      <p className="relative z-10 mt-4 text-xs tracking-[0.3em] text-white/50 uppercase">
        8th August 2026
      </p>

      {/* Description */}
      <p className="relative z-10 mt-8 max-w-xs text-center text-sm leading-relaxed text-white/70">
        We would be delighted to share this wonderful celebration with you on our wedding day.
      </p>

      {/* Instagram handle */}
      <div className="relative z-10 mt-14 flex items-center gap-2 text-white/60 text-xs tracking-wide">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        @abdalla-shams
      </div>
    </section>
  )
}