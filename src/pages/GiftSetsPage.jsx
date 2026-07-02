import { useState } from "react";
import { GIFT_SETS } from "../utils/constants";
import { Star, Gift, ShoppingBag, Check } from "lucide-react";

export default function GiftSetsPage({ onAddToCart }) {
  const [addedSetId, setAddedSetId] = useState(null);

  const handleAdd = (giftSet) => {
    // Format gift set as a standard product structure for basket injection
    const productAdapter = {
      id: giftSet.id,
      name: giftSet.name,
      price: giftSet.price,
      priceVal: parseInt(giftSet.price.replace(/[^0-9]/g, "")),
      image: giftSet.image,
      category: "Gift Sets",
      rating: 4.9,
    };
    onAddToCart && onAddToCart(productAdapter);
    setAddedSetId(giftSet.id);
    setTimeout(() => setAddedSetId(null), 2000);
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase text-forest block mb-3">
            Luxury Collections
          </span>
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-brandDark">
            Organic Gift Sets
          </h1>
          <p className="text-xs md:text-sm font-inter text-brandDark/50 mt-2">
            Beautifully wrapped, sustainable packages perfect for birthdays, holidays, or personal pampering.
          </p>
        </div>

        {/* Gift Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GIFT_SETS.map((gift) => (
            <div
              key={gift.id}
              className="bg-white border border-[#1B5E20]/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="h-[280px] overflow-hidden relative">
                <img
                  src={gift.image}
                  alt={gift.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-earth text-white text-[8px] font-inter font-bold tracking-widest px-3 py-1 rounded-full uppercase flex items-center space-x-1">
                    <Gift size={10} />
                    <span>{gift.theme}</span>
                  </span>
                </div>
              </div>

              {/* Info content */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-cormorant font-bold text-brandDark mb-3">
                    {gift.name}
                  </h3>

                  {/* Contents checkmark list */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[10px] font-inter font-bold tracking-widest text-[#7B5E3B] uppercase">
                      What's inside:
                    </p>
                    <div className="space-y-1.5">
                      {gift.contents.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs font-inter text-brandDark/75">
                          <Check size={11} className="text-forest" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-auto">
                  <span className="text-xl font-cormorant font-extrabold text-[#0B260E]">
                    {gift.price}
                  </span>

                  <button
                    onClick={() => handleAdd(gift)}
                    className={`px-5 py-3 rounded-full text-[10px] font-inter font-bold tracking-[0.15em] uppercase transition-all flex items-center space-x-1.5 focus:outline-none ${
                      addedSetId === gift.id
                        ? "bg-forest text-white"
                        : "bg-brandDark text-white hover:bg-forest"
                    }`}
                    data-cursor="explore"
                    data-cursor-text={addedSetId === gift.id ? "Done" : "Buy"}
                  >
                    <ShoppingBag size={11} />
                    <span>{addedSetId === gift.id ? "Added" : "Add Set"}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
