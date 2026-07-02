import { Link } from "react-router-dom";
import { COLLECTIONS } from "../utils/constants";
import { ArrowUpRight } from "lucide-react";

export default function Collections() {
  return (
    <section className="py-24 bg-[#F7F4EC]/50 border-b border-[#1B5E20]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase text-forest block mb-3">
              Curated Ranges
            </span>
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-brandDark">
              Explore Our Collections
            </h2>
          </div>
          <p className="max-w-xs text-xs font-inter text-brandDark/60 leading-relaxed">
            Shop by our signature botanical ranges, each formulated to deliver targeted benefits for distinct skin requirements.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              to={`/products?collection=${col.name}`}
              className="group relative h-[360px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 block border border-[#1B5E20]/5"
              data-cursor="explore"
              data-cursor-text="View"
            >
              {/* Visual image */}
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.85] saturate-[0.9]"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brandDark/80 via-brandDark/30 to-transparent group-hover:from-brandDark/90 transition-all duration-500" />

              {/* Content Panel */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div>
                  <h3 className="text-3xl font-cormorant font-bold tracking-wide mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {col.name}
                  </h3>
                  <p className="text-xs font-inter text-[#FAF9F6]/70 leading-relaxed max-w-xs mb-4">
                    {col.desc}
                  </p>
                </div>

                {/* Hover Action Link */}
                <div className="flex items-center space-x-2 text-[10px] font-inter font-bold tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors">
                  <span>Explore Range</span>
                  <ArrowUpRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
