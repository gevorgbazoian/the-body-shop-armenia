import { useState } from "react";
import { STORES } from "../utils/constants";
import { MapPin, Clock, Phone, CalendarCheck } from "lucide-react";

export default function Stores() {
  const [activeStoreId, setActiveStoreId] = useState("mashtots");

  const activeStore = STORES.find((s) => s.id === activeStoreId);

  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-[#1B5E20]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase text-forest block mb-3">
            Boutique Locations
          </span>
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-brandDark">
            Visit Us in Yerevan
          </h2>
          <p className="text-xs md:text-sm font-inter text-brandDark/70 leading-relaxed mt-4">
            Step into our premium spaces for personalized skin diagnostics, product testing, and exclusive consultation sessions with our beauty advisers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Store Cards List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {STORES.map((store) => {
              const isSelected = activeStoreId === store.id;
              return (
                <div
                  key={store.id}
                  onClick={() => setActiveStoreId(store.id)}
                  onMouseEnter={() => setActiveStoreId(store.id)}
                  className={`p-6 rounded-3xl border transition-all duration-500 cursor-pointer ${
                    isSelected
                      ? "bg-white border-forest shadow-2xl shadow-forest/5 scale-[1.02]"
                      : "bg-[#F7F4EC]/40 hover:bg-[#F7F4EC]/75 border-transparent"
                  }`}
                  data-cursor="explore"
                  data-cursor-text="Select"
                >
                  <h3 className="text-lg md:text-xl font-cormorant font-bold text-[#0B260E] mb-4 flex items-center space-x-2">
                    <MapPin size={18} className={isSelected ? "text-forest" : "text-brandDark/40"} />
                    <span>{store.name}</span>
                  </h3>

                  <div className="space-y-3 text-xs font-inter text-brandDark/70 mb-6">
                    <p className="flex items-center space-x-2">
                      <Clock size={13} className="text-forest/60" />
                      <span>{store.hours} (Everyday)</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Phone size={13} className="text-forest/60" />
                      <span>{store.phone}</span>
                    </p>
                    <p className="text-[11px] font-medium pl-5 text-brandDark/50">
                      {store.address}
                    </p>
                  </div>

                  {/* Consultation booking link */}
                  <button className="w-full py-3 bg-[#FAF9F6] border border-forest/20 hover:border-forest text-forest hover:bg-forest hover:text-white rounded-xl text-[10px] font-inter font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center space-x-2">
                    <CalendarCheck size={12} />
                    <span>Book Beauty Consultation</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive SVG Map (7 cols) */}
          <div className="lg:col-span-7 bg-[#F7F4EC]/60 rounded-3xl border border-[#1B5E20]/5 p-6 md:p-8 flex flex-col justify-between h-[380px] md:h-[480px] relative overflow-hidden">
            {/* Soft decorative background grids simulating central Yerevan blocks */}
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1B5E20" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Custom Central Yerevan landmark diagram */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-brandDark/25 stroke-current stroke-[0.3] fill-none z-10"
            >
              {/* Central Ring / Opera / Republic Square blocks */}
              <circle cx="50" cy="50" r="16" strokeDasharray="1 1" />
              <circle cx="45" cy="55" r="28" />
              
              {/* Mashtots Avenue line */}
              <line x1="15" y1="10" x2="75" y2="90" className="stroke-forest/15 stroke-[0.8]" />
              
              {/* Dalma entrance line */}
              <line x1="5" y1="58" x2="45" y2="55" className="stroke-forest/15 stroke-[0.8]" />
              <path d="M5,58 Q20,62 38,56" className="stroke-forest/15 stroke-[0.5]" />

              {/* Yerevan Cascade landmark outline */}
              <path d="M48,15 L52,15 L52,22 L48,22 Z M47,22 L53,22 L53,28 L47,28 Z" className="stroke-brandDark/10 fill-brandDark/5" />

              {/* Pulsing Marker for selected boutique on the map */}
              {STORES.map((store) => {
                const isActive = activeStoreId === store.id;
                return (
                  <g
                    key={store.id}
                    className="cursor-pointer group"
                    onClick={() => setActiveStoreId(store.id)}
                  >
                    {/* Pulsing indicator */}
                    {isActive && (
                      <circle
                        cx={store.coordinates.x}
                        cy={store.coordinates.y}
                        r="5"
                        fill="#1B5E20"
                        className="animate-ping opacity-60"
                      />
                    )}
                    {/* Solid indicator */}
                    <circle
                      cx={store.coordinates.x}
                      cy={store.coordinates.y}
                      r="2"
                      fill={isActive ? "#1B5E20" : "#7B5E3B"}
                      className="transition-colors duration-300"
                    />
                    {/* Larger hover target area */}
                    <circle
                      cx={store.coordinates.x}
                      cy={store.coordinates.y}
                      r="8"
                      fill="transparent"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Selected Store details card on the map overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md border border-[#1B5E20]/10 p-4 rounded-2xl flex items-center justify-between z-20">
              <div>
                <p className="text-[9px] font-inter tracking-[0.2em] text-[#7B5E3B] uppercase font-bold">
                  Active Boutique
                </p>
                <p className="text-sm font-cormorant font-bold text-brandDark mt-0.5">
                  {activeStore.name}
                </p>
              </div>
              <span className="text-[10px] font-inter text-forest font-semibold">
                Yerevan, Armenia
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
