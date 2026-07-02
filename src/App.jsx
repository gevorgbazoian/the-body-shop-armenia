import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

// Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";

// Page Views
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import CollectionsPage from "./pages/CollectionsPage";
import GiftSetsPage from "./pages/GiftSetsPage";
import StoresPage from "./pages/StoresPage";
import Contact from "./pages/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  // 1. Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (loading) return; // Wait until loaded

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Connect Lenis to requestAnimationFrame
    let reqId;
    function raf(time) {
      lenis.raf(time);
      reqId = requestAnimationFrame(raf);
    }
    reqId = requestAnimationFrame(raf);

    // Sync Lenis scroll triggers on page layout change
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(reqId);
      resizeObserver.disconnect();
      lenis.destroy();
    };
  }, [loading]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <Router>
      {/* Premium Cursor & Preloader */}
      <CustomCursor />
      
      {loading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <div className="flex flex-col min-h-screen text-brandDark">
          
          {/* Header/Navbar */}
          <Navbar cartCount={cartItems.length} />

          {/* Main Routing Container */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
              <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
              <Route path="/products/:id" element={<Product onAddToCart={handleAddToCart} />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/gift-sets" element={<GiftSetsPage onAddToCart={handleAddToCart} />} />
              <Route path="/stores" element={<StoresPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

        </div>
      )}
    </Router>
  );
}
