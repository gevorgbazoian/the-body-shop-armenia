import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../utils/constants";
import { Star, ShoppingBag, Truck, ShieldCheck, Heart, Leaf, ChevronRight } from "lucide-react";

export default function Product({ onAddToCart }) {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("benefits");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    // Reset state on page change
    setActiveTab("benefits");
    setQuantity(1);
    setAdded(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center bg-[#FAF9F6] min-h-screen">
        <h2 className="text-2xl font-cormorant font-bold text-brandDark mb-4">Product Not Found</h2>
        <Link to="/products" className="px-6 py-3 bg-forest text-white text-xs font-inter uppercase tracking-widest rounded-full">
          Back to Shop
        </Link>
      </div>
    );
  }

  // Get related products (same category/collection)
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart && onAddToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tabs = [
    { id: "benefits", label: "Benefits" },
    { id: "usage", label: "How to Use" },
    { id: "ingredients", label: "Ingredients" },
    { id: "reviews", label: "Reviews" }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] font-inter font-semibold tracking-widest text-brandDark/50 uppercase mb-10">
          <Link to="/" className="hover:text-forest">Home</Link>
          <ChevronRight size={10} />
          <Link to="/products" className="hover:text-forest">Products</Link>
          <ChevronRight size={10} />
          <span className="text-brandDark">{product.name}</span>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          
          {/* Left: Product Image & Gallery (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-[#1B5E20]/5 bg-[#F7F4EC]/30">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            
            {/* Small decorative thumbnail strip simulating gallery */}
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 rounded-2xl overflow-hidden border border-forest/20 cursor-pointer">
                <img
                  src={product.image}
                  className="w-full h-full object-cover"
                  alt="Angle 1"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="h-24 rounded-2xl overflow-hidden border border-transparent hover:border-forest/20 opacity-70 hover:opacity-100 transition-all cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                  alt="Angle 2"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="h-24 rounded-2xl overflow-hidden border border-transparent hover:border-forest/20 opacity-70 hover:opacity-100 transition-all cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                  alt="Angle 3"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Info Columns & Details sheets (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div>
              <span className="bg-[#DDEED8] text-forest text-[8px] font-inter font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-brandDark mt-4 leading-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center space-x-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      stroke="currentColor"
                    />
                  ))}
                  <span className="text-xs font-bold text-brandDark pl-1.5">{product.rating}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-brandDark/20" />
                <span className="text-xs font-inter text-brandDark/50">
                  {product.reviews} Customer reviews
                </span>
              </div>
            </div>

            {/* Price tag */}
            <div className="text-3xl font-cormorant font-extrabold text-[#0B260E]">
              {product.price}
            </div>

            {/* Micro details tagline */}
            <p className="text-xs md:text-sm font-inter text-brandDark/70 leading-relaxed border-b border-gray-100 pb-6">
              This high-performance formula features pure plant-derived components ethically sourced. Fits dry, normal, and combination skin types.
            </p>

            {/* Controls (Qty & Add to Basket) */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Qty count selector */}
              <div className="flex items-center border border-[#1B5E20]/20 rounded-full py-2 px-4 justify-between w-full sm:w-[130px] bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-lg font-inter text-brandDark/50 hover:text-forest focus:outline-none"
                  data-cursor="explore"
                >
                  -
                </button>
                <span className="text-xs font-inter font-bold text-brandDark">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-lg font-inter text-brandDark/50 hover:text-forest focus:outline-none"
                  data-cursor="explore"
                >
                  +
                </button>
              </div>

              {/* Basket CTA */}
              <button
                onClick={handleAdd}
                className={`flex-grow py-4 rounded-full text-xs font-inter font-bold tracking-[0.2em] uppercase flex items-center justify-center space-x-2 shadow-lg transition-all duration-300 focus:outline-none ${
                  added
                    ? "bg-[#1B5E20] text-white shadow-forest/10"
                    : "bg-[#0B260E] text-white hover:bg-forest shadow-brandDark/10 hover:shadow-forest/20"
                }`}
                data-cursor="explore"
                data-cursor-text={added ? "Done" : "Buy"}
              >
                <ShoppingBag size={14} />
                <span>{added ? "Added to Basket" : "Add to Basket"}</span>
              </button>

              {/* Wishlist toggle */}
              <button className="p-4 border border-[#1B5E20]/20 hover:border-forest text-brandDark hover:text-forest rounded-full transition-colors focus:outline-none flex justify-center items-center">
                <Heart size={16} />
              </button>
            </div>

            {/* Promise icons */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 text-xs font-inter text-brandDark/60">
              <div className="flex items-center space-x-2">
                <Truck size={14} className="text-forest" />
                <span>Fast Delivery in Yerevan</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck size={14} className="text-forest" />
                <span>Genuine Brand Certificate</span>
              </div>
            </div>

            {/* Tabbed Sheet details panel */}
            <div className="pt-8 border-t border-gray-100">
              {/* Tab headers */}
              <div className="flex space-x-6 border-b border-gray-100 pb-2 mb-4 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-[10px] font-inter font-bold tracking-[0.2em] uppercase transition-colors pb-2 focus:outline-none flex-shrink-0 ${
                      activeTab === tab.id
                        ? "text-forest border-b-2 border-forest"
                        : "text-brandDark/40 hover:text-brandDark"
                    }`}
                    data-cursor="explore"
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab contents */}
              <div className="text-xs font-inter text-brandDark/70 leading-relaxed min-h-[100px]">
                {activeTab === "benefits" && (
                  <p className="animate-fade-in">{product.benefits}</p>
                )}
                {activeTab === "usage" && (
                  <p className="animate-fade-in">{product.usage}</p>
                )}
                {activeTab === "ingredients" && (
                  <p className="font-mono text-[10px] leading-normal break-words animate-fade-in">
                    {product.ingredients}
                  </p>
                )}
                {activeTab === "reviews" && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="pb-3 border-b border-gray-50">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-brandDark">Anna S.</span>
                        <span className="text-[9px] text-brandDark/40">2 weeks ago</span>
                      </div>
                      <div className="flex text-amber-500 mb-1"><Star size={10} fill="currentColor" /> <Star size={10} fill="currentColor" /> <Star size={10} fill="currentColor" /> <Star size={10} fill="currentColor" /> <Star size={10} fill="currentColor" /></div>
                      <p className="text-[11px]">Absolutely amazing! The texture is rich and locks hydration all day. Highly recommended for dry seasons in Yerevan.</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-brandDark">Gor M.</span>
                        <span className="text-[9px] text-brandDark/40">1 month ago</span>
                      </div>
                      <div className="flex text-amber-500 mb-1"><Star size={10} fill="currentColor" /> <Star size={10} fill="currentColor" /> <Star size={10} fill="currentColor" /> <Star size={10} fill="currentColor" /> <Star size={10} fill="currentColor" /></div>
                      <p className="text-[11px]">Purifies beautifully. Best Tea Tree formula I have used so far.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Related Products Recommendation */}
        <div>
          <h2 className="text-3xl font-cormorant font-bold text-brandDark mb-10 text-center">
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="bg-white rounded-3xl border border-[#1B5E20]/5 overflow-hidden flex flex-col group p-4 shadow-sm hover:shadow-xl transition-shadow"
                data-cursor="explore"
                data-cursor-text="View"
              >
                <div className="h-56 rounded-2xl overflow-hidden bg-[#FAF9F6] mb-4">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={p.name}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
                <h3 className="text-base font-cormorant font-bold text-brandDark group-hover:text-forest transition-colors line-clamp-1">
                  {p.name}
                </h3>
                <p className="text-xs font-inter font-bold text-forest mt-2">
                  {p.price}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
