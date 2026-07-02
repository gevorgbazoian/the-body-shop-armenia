import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PRODUCTS } from "../utils/constants";
import { Star, ShoppingBag, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BestSellers({ onAddToCart }) {
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    // Calculate how much we need to scroll horizontally
    const getScrollAmount = () => {
      const scrollWidth = scrollEl.scrollWidth;
      const viewportWidth = window.innerWidth;
      return -(scrollWidth - viewportWidth + 80); // padding adjustment
    };

    const pinAnim = gsap.to(scrollEl, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      if (pinAnim.scrollTrigger) pinAnim.scrollTrigger.kill();
    };
  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="overflow-hidden bg-[#F7F4EC] relative">
      {/* Decorative background logo */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-[0.03] text-[20vw] font-bold font-cormorant pointer-events-none select-none z-0">
        ORGANIC
      </div>

      <div className="h-screen flex flex-col justify-center py-12 relative z-10">
        {/* Header (doesn't scroll, sits nicely at the top-left of the section) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12 flex justify-between items-end">
          <div>
            <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase text-forest block mb-3">
              Most Loved
            </span>
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-brandDark">
              The Best Sellers
            </h2>
          </div>
          <div className="text-xs font-inter font-semibold tracking-widest text-[#7B5E3B] uppercase hidden md:flex items-center space-x-2">
            <span>Scroll down to slide</span>
            <span className="w-12 h-[1px] bg-[#7B5E3B]" />
          </div>
        </div>

        {/* Horizontal Container */}
        <div
          ref={scrollRef}
          className="flex space-x-8 px-6 md:px-12 w-max items-stretch cursor-grab active:cursor-grabbing"
        >
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="w-[280px] md:w-[360px] bg-white rounded-3xl border border-[#1B5E20]/5 overflow-hidden flex flex-col justify-between group transition-shadow duration-500 hover:shadow-2xl hover:shadow-forest/5 flex-shrink-0"
              data-cursor="explore"
              data-cursor-text="View"
            >
              {/* Product Visual */}
              <div className="h-[240px] md:h-[300px] overflow-hidden relative bg-[#FAF9F6]">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Tags & Action Overlays */}
                <div className="absolute top-4 left-4">
                  <span className="bg-forest text-white text-[9px] font-inter font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                    {prod.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-brandDark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {/* View Details Link */}
                  <Link
                    to={`/products/${prod.id}`}
                    className="p-3 bg-white text-brandDark hover:bg-[#FAF9F6] rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                    title="View Product"
                  >
                    <Eye size={18} />
                  </Link>
                  {/* Quick Add Button */}
                  <button
                    onClick={() => onAddToCart && onAddToCart(prod)}
                    className="p-3 bg-forest text-white hover:bg-[#0B260E] rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                    title="Add to Basket"
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-inter tracking-wider text-[#7B5E3B] uppercase font-medium">
                      Collection: {prod.collection}
                    </span>
                    <div className="flex items-center space-x-1 text-amber-500">
                      <Star size={11} fill="currentColor" />
                      <span className="text-xs font-semibold">{prod.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-cormorant font-bold text-brandDark group-hover:text-forest transition-colors line-clamp-1 mb-2">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-brandDark/60 font-inter line-clamp-2 leading-relaxed mb-4">
                    {prod.benefits}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-lg font-cormorant font-extrabold text-[#0B260E]">
                    {prod.price}
                  </span>

                  <button
                    onClick={() => onAddToCart && onAddToCart(prod)}
                    className="text-[10px] font-inter font-bold tracking-[0.2em] uppercase text-forest hover:text-[#0B260E] flex items-center space-x-1 transition-colors"
                  >
                    <span>Quick Add</span>
                    <ShoppingBag size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Call to action element at the end of scroll */}
          <div className="w-[280px] md:w-[320px] bg-transparent border border-dashed border-[#1B5E20]/30 rounded-3xl flex flex-col items-center justify-center text-center p-8 flex-shrink-0">
            <h3 className="text-2xl font-cormorant font-bold text-brandDark mb-3">
              Discover All Products
            </h3>
            <p className="text-xs font-inter text-brandDark/60 mb-6">
              Browse our full catalog of high-end skincare, hair, and body formulas.
            </p>
            <Link
              to="/products"
              className="px-6 py-3 bg-forest text-white text-[10px] font-inter font-bold tracking-[0.2em] uppercase rounded-full hover:bg-brandDark transition-colors shadow-lg shadow-forest/10"
            >
              View Full Catalog
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
