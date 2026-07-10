import React from 'react'

const VENUE_NAME = 'Toolip'
const VENUE_ADDRESS = 'beni suef sea street,Egypt'
const VENUE_TIME = '7:00 PM'
const MAPS_QUERY = encodeURIComponent(VENUE_NAME)

export default function Venu() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#4b1d74] via-[#46114e] to-[#600d5d] flex flex-col items-center justify-center px-6 py-24 text-white">

      {/* Section header */}
          <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] uppercase text-center mt-2">
        The Venue
      </h1>
      <p className="text-[10px] tracking-[0.35em] text-white/50 uppercase">
        Where to go
      </p>
  

      {/* Card */}
      <div className="relative mt-10 w-full max-w-md rounded-3xl bg-[#f4efe8] text-[#2c1b3d] overflow-hidden shadow-2xl">

        {/* Header image */}
        <div className="relative w-full h-56  mb-1">
          <img
            src="/image/venuHeader.jpg"
            alt="Venue"
            className="w-full h-full object-cover"
          />
          {/* Time badge, overlapping the image bottom edge */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-200 text-[#2c1b3d] text-xs font-medium tracking-wide px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
            ⏰ Starts at {VENUE_TIME}
          </span>
        </div>

        {/* Venue info */}
        <div className="pt-8 pb-4 px-6 text-center">
          <h2 className="font-serif text-xl tracking-wide uppercase">
            {VENUE_NAME}
          </h2>
          <p className="mt-1 text-sm text-[#2c1b3d]/60">
            {VENUE_ADDRESS}
          </p>
        </div>

        {/* Map */}
        <div className="relative w-full h-56 border-t border-[#2c1b3d]/10">
         
          <a
             
            title="venue-map"
            href={`https://www.google.com/maps/place/Jewel+Inn+Beni+Suef/@29.062992,31.1017648,18.57z/data=!4m9!3m8!1s0x145a25e092cf7e8f:0x45c844ab63e42e9c!5m2!4m1!1i2!8m2!3d29.0629692!4d31.1009248!16s%2Fg%2F11dzdh3zwr?hl=ar-EG&entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D`}
            className="w-full h-full grayscale-[20%] overflow-hidden"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
           <img className='rounded-2xl h-[99%] w-[99%] ' src="/image/weddingmap.jpg" alt="wedding map image" />

          </a>

          {/* Open in Maps pill */}
          <a
            href={`https://www.google.com/maps/place/Jewel+Inn+Beni+Suef/@29.062992,31.1017648,18.57z/data=!4m9!3m8!1s0x145a25e092cf7e8f:0x45c844ab63e42e9c!5m2!4m1!1i2!8m2!3d29.0629692!4d31.1009248!16s%2Fg%2F11dzdh3zwr?hl=ar-EG&entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 left-3 bg-white/90 backdrop-blur-sm text-[#2c1b3d] text-xs font-medium px-3 py-1.5 rounded-full shadow flex items-center gap-1 hover:bg-white transition"
          >
            Open in Maps ↗
          </a>
        </div>

        {/* Directions button */}
        <div className="px-6 py-6">
          <a
            href={`https://www.google.com/maps/place/Jewel+Inn+Beni+Suef/@29.062992,31.1017648,18.57z/data=!4m9!3m8!1s0x145a25e092cf7e8f:0x45c844ab63e42e9c!5m2!4m1!1i2!8m2!3d29.0629692!4d31.1009248!16s%2Fg%2F11dzdh3zwr?hl=ar-EG&entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-amber-200 hover:bg-amber-300 transition text-[#2c1b3d] font-medium text-sm tracking-wide py-3 rounded-full shadow z-10"
          >
            📍 Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}