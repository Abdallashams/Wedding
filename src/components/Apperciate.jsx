
import React, { useEffect, useRef } from 'react'
import './Apperciate.css'
export default function Apperciate() {
  const carRef = useRef(null)

  useEffect(() => {
    const car = carRef.current
    if (!car) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('move')
          }
        })
      },
      { rootMargin: '100px' }
    )

    observer.observe(car)

    // Cleanup: disconnect the observer when the component unmounts
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#2f64a5] via-[#174f72] to-[#0a3065] flex flex-col items-center justify-center px-6 py-24 text-white">
      <img src="/image/weappreciate.jpg" alt="" id="weappreciate" className='rounded-3xl'/>
      <img src="/image/car-removebg-preview.png" alt="" id="car" ref={carRef} />
    </div>
  )
}