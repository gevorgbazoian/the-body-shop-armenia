import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Globe, Heart } from "lucide-react";

export default function Navbar({ cartCount = 0, onCartClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background shadow if scrolled down
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide or show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Collections", path: "/collections" },
    { name: "Gift Sets", path: "/gift-sets" },
    { name: "Stores", path: "/stores" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "glass shadow-sm py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex flex-col focus:outline-none"
          data-cursor="explore"
          data-cursor-text="Home"
        >
          <span className="text-xl md:text-2xl font-cormorant font-bold tracking-[0.25em] text-[#0B260E] transition-colors group-hover:text-forest">
            THE BODY SHOP
          </span>
          <span className="text-[8px] font-inter tracking-[0.4em] text-[#7B5E3B] uppercase -mt-1 pl-[2px]">
            Armenia
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-inter font-medium tracking-widest uppercase transition-colors hover:text-forest relative py-1 focus:outline-none ${
                  isActive ? "text-forest font-semibold" : "text-brandDark/70"
                }`
              }
              data-cursor="explore"
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1B5E20] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center space-x-6 text-[#0B260E]">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "EN" ? "AM" : "EN")}
            className="flex items-center space-x-1 text-xs font-inter font-medium tracking-wider focus:outline-none hover:text-forest"
            data-cursor="explore"
          >
            <Globe size={13} />
            <span>{lang}</span>
          </button>

          {/* Wishlist */}
          <button className="focus:outline-none hover:text-forest transition-colors relative">
            <Heart size={18} />
          </button>

          {/* Cart Icon */}
          <button
            onClick={onCartClick}
            className="focus:outline-none hover:text-forest transition-colors relative flex items-center cursor-pointer"
            data-cursor="explore"
            data-cursor-text="Basket"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-forest text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu toggle & Cart */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={onCartClick}
            className="relative text-[#0B260E] cursor-pointer"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-forest text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0B260E] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[70px] bg-white z-40 transition-transform duration-500 lg:hidden flex flex-col justify-between py-12 px-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-cormorant font-semibold tracking-wider transition-colors py-2 ${
                  isActive ? "text-forest border-l-2 border-forest pl-3" : "text-brandDark"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col space-y-6 pt-6 border-t border-gray-100">
          <button
            onClick={() => setLang(lang === "EN" ? "AM" : "EN")}
            className="flex items-center space-x-2 text-sm font-inter text-brandDark"
          >
            <Globe size={16} />
            <span>Switch to {lang === "EN" ? "Armenian (Հայերեն)" : "English"}</span>
          </button>
          <div className="text-xs text-brandDark/50 font-inter">
            © 2026 The Body Shop Armenia.
          </div>
        </div>
      </div>
    </nav>
  );
}
