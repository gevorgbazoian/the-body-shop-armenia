import { Link } from "react-router-dom";
import { COLLECTIONS } from "../utils/constants";
import { ArrowRight } from "lucide-react";

export default function CollectionsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase text-forest block mb-3">
            Botanical Ranges
          </span>
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-brandDark">
            Our Curated Collections
          </h1>
          <p className="text-xs md:text-sm font-inter text-brandDark/50 mt-2">
            Each range is formulated with an organic star ingredient to deliver target results for specific skin, hair, and body concerns.
          </p>
        </div>

        {/* Collections showcase */}
        <div className="space-y-16">
          {COLLECTIONS.map((col, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={col.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 h-[300px] md:h-[420px] rounded-3xl overflow-hidden border border-forest/5 shadow-lg relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover brightness-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brandDark/40 to-transparent" />
                </div>

                {/* Info Column */}
                <div
                  className={`lg:col-span-5 flex flex-col space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="text-[10px] font-inter font-bold tracking-widest text-[#7B5E3B] uppercase">
                    Collection {idx + 1}
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-brandDark">
                    The {col.name} Range
                  </h2>
                  
                  <p className="text-xs md:text-sm font-inter text-brandDark/70 leading-relaxed">
                    {col.desc}. Rich in antioxidants, minerals, and vitamins, our formulas are whipped and curated to restore natural skin radiance. Derived sustainably and 100% cruelty-free.
                  </p>

                  <div className="pt-4">
                    <Link
                      to={`/products?collection=${col.name}`}
                      className="inline-flex items-center space-x-2 bg-forest hover:bg-brandDark text-white text-[10px] font-inter font-bold tracking-[0.2em] uppercase px-6 py-3.5 rounded-full transition-all shadow-md focus:outline-none"
                      data-cursor="explore"
                      data-cursor-text="Shop"
                    >
                      <span>Shop {col.name}</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
