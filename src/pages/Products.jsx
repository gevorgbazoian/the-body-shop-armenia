import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { PRODUCTS } from "../utils/constants";
import { Star, ShoppingBag, Eye, SlidersHorizontal, ArrowUpDown } from "lucide-react";

export default function Products({ onAddToCart }) {
  const [searchParams] = useSearchParams();
  const initialCollection = searchParams.get("collection") || "All";

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCollection, setActiveCollection] = useState(initialCollection);
  const [sortOrder, setSortOrder] = useState("featured"); // featured, low-to-high, high-to-low
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  // Sync url param changes
  useEffect(() => {
    const col = searchParams.get("collection");
    if (col) {
      setActiveCollection(col);
    }
  }, [searchParams]);

  // Handle Filtering & Sorting
  useEffect(() => {
    let result = [...PRODUCTS];

    // Category Filter
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Collection Filter
    if (activeCollection !== "All") {
      result = result.filter((p) => p.collection.toLowerCase() === activeCollection.toLowerCase());
    }

    // Sort order
    if (sortOrder === "low-to-high") {
      result.sort((a, b) => a.priceVal - b.priceVal);
    } else if (sortOrder === "high-to-low") {
      result.sort((a, b) => b.priceVal - a.priceVal);
    }

    setFilteredProducts(result);
  }, [activeCategory, activeCollection, sortOrder]);

  const categories = ["All", "Skincare", "Body Care", "Hair Care"];
  const collectionsList = ["All", "Tea Tree", "Vitamin C", "British Rose", "Shea", "Ginger"];

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Area */}
        <div className="mb-16">
          <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase text-forest block mb-3">
            Organic Formulas
          </span>
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-brandDark">
            The Botanical Shop
          </h1>
          <p className="text-xs md:text-sm font-inter text-brandDark/50 mt-2">
            Browse our clinical collections crafted for radiant, healthy skin.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Sticky Sidebar Filters (3 cols) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-8 bg-[#F7F4EC]/40 p-8 rounded-3xl border border-[#1B5E20]/5">
            <div className="flex items-center space-x-2 pb-4 border-b border-brandDark/10">
              <SlidersHorizontal size={14} className="text-forest" />
              <h2 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-brandDark">
                Filters & Refine
              </h2>
            </div>

            {/* Categories filter */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-inter font-bold tracking-widest text-[#7B5E3B] uppercase">
                Categories
              </h3>
              <div className="flex flex-col space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs font-inter text-left transition-colors hover:text-forest py-1 focus:outline-none ${
                      activeCategory === cat ? "text-forest font-bold pl-2 border-l-2 border-forest" : "text-brandDark/70"
                    }`}
                    data-cursor="explore"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Collections filter */}
            <div className="space-y-3 pt-4 border-t border-brandDark/5">
              <h3 className="text-[10px] font-inter font-bold tracking-widest text-[#7B5E3B] uppercase">
                Collections
              </h3>
              <div className="flex flex-col space-y-2">
                {collectionsList.map((col) => (
                  <button
                    key={col}
                    onClick={() => setActiveCollection(col)}
                    className={`text-xs font-inter text-left transition-colors hover:text-forest py-1 focus:outline-none ${
                      activeCollection.toLowerCase() === col.toLowerCase()
                        ? "text-forest font-bold pl-2 border-l-2 border-forest"
                        : "text-brandDark/70"
                    }`}
                    data-cursor="explore"
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort order controls */}
            <div className="space-y-3 pt-4 border-t border-brandDark/5">
              <h3 className="text-[10px] font-inter font-bold tracking-widest text-[#7B5E3B] uppercase flex items-center space-x-1">
                <ArrowUpDown size={10} />
                <span>Sort By</span>
              </h3>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full bg-white border border-[#1B5E20]/10 px-3 py-2 rounded-xl text-xs font-inter text-brandDark focus:outline-none focus:border-forest"
                data-cursor="explore"
              >
                <option value="featured">Featured Favorites</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>

          </aside>

          {/* Right: Grid of Products (9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-[#F7F4EC]/10 rounded-3xl border border-dashed border-forest/20">
                <p className="text-lg font-cormorant font-bold text-brandDark">No items match your filter criteria.</p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setActiveCollection("All");
                  }}
                  className="mt-4 px-6 py-2 bg-forest text-white text-[10px] font-inter tracking-widest uppercase rounded-full hover:bg-brandDark"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-3xl border border-[#1B5E20]/5 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-2xl hover:shadow-forest/5 transition-all duration-500 hover:-translate-y-1 relative"
                    style={{
                      perspective: "1000px",
                    }}
                    data-cursor="explore"
                    data-cursor-text="View"
                  >
                    {/* Visual container (tilts on hover using standard scale rotations) */}
                    <div className="h-[260px] overflow-hidden bg-[#FAF9F6] relative">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute top-4 left-4">
                        <span className="bg-forest text-white text-[8px] font-inter font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                          {prod.category}
                        </span>
                      </div>

                      {/* Cover Hover Screen */}
                      <div className="absolute inset-0 bg-brandDark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Link
                          to={`/products/${prod.id}`}
                          className="p-3 bg-white text-brandDark hover:bg-[#FAF9F6] rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                        >
                          <Eye size={16} />
                        </Link>
                        <button
                          onClick={() => onAddToCart && onAddToCart(prod)}
                          className="p-3 bg-forest text-white hover:bg-[#0B260E] rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                        >
                          <ShoppingBag size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Info details */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[9px] font-inter tracking-wider text-[#7B5E3B] uppercase">
                            Collection: {prod.collection}
                          </span>
                          <div className="flex items-center space-x-1 text-amber-500">
                            <Star size={10} fill="currentColor" />
                            <span className="text-[11px] font-bold">{prod.rating}</span>
                          </div>
                        </div>

                        <Link to={`/products/${prod.id}`}>
                          <h3 className="text-lg font-cormorant font-bold text-brandDark hover:text-forest transition-colors line-clamp-1 mb-2">
                            {prod.name}
                          </h3>
                        </Link>
                        
                        <p className="text-[11px] text-brandDark/60 font-inter line-clamp-2 leading-relaxed mb-4">
                          {prod.benefits}
                        </p>
                      </div>

                      <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                        <span className="text-base font-cormorant font-extrabold text-[#0B260E]">
                          {prod.price}
                        </span>

                        <button
                          onClick={() => onAddToCart && onAddToCart(prod)}
                          className="text-[9px] font-inter font-bold tracking-[0.15em] uppercase text-forest hover:text-[#0B260E] flex items-center space-x-1 transition-colors focus:outline-none"
                        >
                          <span>Add to Basket</span>
                          <ShoppingBag size={11} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>

        </div>

      </div>
    </div>
  );
}
