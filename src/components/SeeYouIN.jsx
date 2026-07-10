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

export default function SeeYouIN() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#3a4360] via-[#4a5578] to-[#5a6690] flex flex-col items-center justify-center px-6 py-24 text-white">

      {/* Stars */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Quote card */}
      <div className="relative z-10 w-full max-w-md bg-[#f4efe2] text-[#3a2e1f] rounded-sm px-8 py-8 shadow-2xl">
        <svg className="absolute top-2 left-3 w-6 h-6 text-[#3a2e1f]/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M4 20 Q2 10 8 6" />
        </svg>
        <p className="font-serif italic text-center text-sm sm:text-base leading-relaxed">
          "We are overjoyed to share this magical moment with the people we love most.
          Your presence is the greatest gift of all — we cannot wait to celebrate with you."
        </p>
        <svg className="absolute bottom-2 right-3 w-6 h-6 text-[#3a2e1f]/20 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M4 20 Q2 10 8 6" />
        </svg>
      </div>

      {/* Decorative wand hand icon */}
      <svg
        className="relative z-10 mt-12 w-12 h-12 text-white/80"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M14 44 C14 34 16 26 18 20 C19 17 22 17 22 20 L22 30" />
        <path d="M22 30 L22 22 C22 19 25 19 25 22 L25 31" />
        <path d="M25 31 L25 23 C25 20 28 20 28 23 L28 32" />
        <path d="M28 32 L28 25 C28 22 31 22 31 25 L31 34 C31 40 28 44 24 44" />
      </svg>

      {/* Heading */}
      <p className="relative z-10 mt-4 text-xs tracking-[0.4em] text-white/60 uppercase">
        See you in
      </p>

      {/* Countdown */}
      <div className="relative z-10 mt-4 flex items-start gap-4 sm:gap-6">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' },
        ].map((item, idx) => (
          <React.Fragment key={item.label}>
            <div className="flex flex-col items-center w-14">
              <span className="font-serif text-4xl sm:text-5xl text-amber-300 tabular-nums">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="mt-2 text-[9px] tracking-[0.2em] uppercase text-white/50">
                {item.label}
              </span>
            </div>
            {idx < 3 && (
              <span className="text-amber-300/50 text-3xl font-serif -mt-1">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
