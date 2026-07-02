import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INGREDIENTS } from "../utils/constants";
import Ingredient3D from "./Ingredient3D";
import { MapPin, Sparkles, HeartHandshake } from "lucide-react";

export default function Ingredients() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-[#1B5E20]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase text-forest block mb-3">
              Pure Ingredients
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-bold text-brandDark leading-tight">
              Ethically Sourced. <br />
              <span className="text-[#7B5E3B] italic">Clinically Proven.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-brandDark/70 font-inter leading-relaxed">
            We scour the globe for the finest organic botanicals. Every ingredient is hand-harvested and fairly traded, delivering premium skincare that respects our planet.
          </p>
        </div>

        {/* Dynamic Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Interactive Expanding Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {INGREDIENTS.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`border border-[#1B5E20]/10 rounded-2xl p-6 transition-all duration-500 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-white shadow-xl shadow-forest/5 border-forest/30 translate-x-2"
                      : "bg-[#F7F4EC]/40 hover:bg-[#F7F4EC]/70"
                  }`}
                  data-cursor="explore"
                  data-cursor-text={item.name}
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl p-3 rounded-xl bg-brandLight block">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-cormorant font-bold text-brandDark">
                          {item.name}
                        </h3>
                        <p className="text-[10px] font-inter italic text-[#7B5E3B] tracking-wider uppercase">
                          {item.scientific}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-inter tracking-widest text-[#1B5E20]/50 uppercase font-semibold">
                      {item.tagline}
                    </span>
                  </div>

                  {/* Expanding Panel */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="border-t border-gray-100 pt-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Benefits */}
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-1.5 text-forest">
                              <Sparkles size={13} />
                              <span className="text-[10px] font-inter font-bold uppercase tracking-wider">Benefits</span>
                            </div>
                            <p className="text-xs text-brandDark/80 font-inter leading-relaxed">
                              {item.benefits}
                            </p>
                          </div>

                          {/* Origin */}
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-1.5 text-forest">
                              <MapPin size={13} />
                              <span className="text-[10px] font-inter font-bold uppercase tracking-wider">Origin</span>
                            </div>
                            <p className="text-xs text-brandDark/80 font-inter leading-relaxed">
                              {item.origin}
                            </p>
                          </div>

                          {/* Community */}
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-1.5 text-forest">
                              <HeartHandshake size={13} />
                              <span className="text-[10px] font-inter font-bold uppercase tracking-wider">Community</span>
                            </div>
                            <p className="text-xs text-brandDark/80 font-inter leading-relaxed">
                              {item.community}
                            </p>
                          </div>
                        </div>

                        {/* Visual background item matching the active card */}
                        <div className="mt-6 h-[100px] rounded-xl overflow-hidden relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover brightness-[0.8] saturate-[0.8]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent flex items-end p-3">
                            <span className="text-[10px] text-white font-inter tracking-widest uppercase font-semibold">
                              Pure extraction process
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side: Glowing 3D leaf canvas element (5 cols) */}
          <div className="lg:col-span-5 h-[350px] lg:h-[550px] bg-[#F7F4EC]/60 rounded-3xl border border-[#1B5E20]/5 flex items-center justify-center p-4">
            <Ingredient3D />
          </div>

        </div>

      </div>
    </section>
  );
}
