import { Link } from "react-router-dom";
import { MessageSquare, ShieldCheck, Leaf, Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B260E] text-[#F7F4EC] pt-20 pb-10 border-t border-[#1B5E20]/20 relative overflow-hidden">
      {/* Decorative leaf watermarks */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] text-[300px] pointer-events-none select-none font-cormorant font-bold">
        TBS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#FAF9F6]/10">
          
          {/* Brand Col */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-2xl font-cormorant font-bold tracking-[0.25em] text-[#FAF9F6]">
                THE BODY SHOP
              </span>
              <p className="text-[9px] font-inter tracking-[0.4em] text-[#7B5E3B] uppercase">
                Armenia Exclusive
              </p>
            </div>
            <p className="text-xs text-[#FAF9F6]/60 font-inter leading-relaxed max-w-sm">
              We strive for a fairer, more beautiful world. Rooted in nature, cruelty-free, and dedicated to community fair trade since 1976.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-forest transition-colors text-[#FAF9F6]/75" aria-label="Instagram">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="hover:text-forest transition-colors text-[#FAF9F6]/75" aria-label="Facebook">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-forest transition-colors text-[#FAF9F6]/75" aria-label="Viber/Telegram">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-[#7B5E3B]">
              Discover
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-inter font-medium text-[#FAF9F6]/75">
              <Link to="/products" className="hover:text-white transition-colors">All Products</Link>
              <Link to="/collections" className="hover:text-white transition-colors">Collections</Link>
              <Link to="/gift-sets" className="hover:text-white transition-colors">Gift Sets</Link>
              <Link to="/stores" className="hover:text-white transition-colors">Our Boutiques</Link>
            </div>
          </div>

          {/* Boutique Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-[#7B5E3B]">
              Our Boutiques
            </h4>
            <div className="flex flex-col space-y-3 text-xs font-inter text-[#FAF9F6]/75">
              <div>
                <p className="font-semibold text-white">Mashtots Avenue Boutique</p>
                <p className="text-[#FAF9F6]/60">24 Mashtots Ave, Yerevan</p>
                <p className="text-[10px] text-[#FAF9F6]/45">10:00 - 22:00 | +374 10 523344</p>
              </div>
              <div>
                <p className="font-semibold text-white">Dalma Garden Mall Store</p>
                <p className="text-[#FAF9F6]/60">3 Tsitsernakaberd Hwy, Yerevan</p>
                <p className="text-[10px] text-[#FAF9F6]/45">10:00 - 22:00 | +374 60 461155</p>
              </div>
            </div>
          </div>

          {/* Value Badges */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-inter font-bold tracking-[0.2em] uppercase text-[#7B5E3B]">
              Our Promise
            </h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-xs font-inter text-[#FAF9F6]/85">
                <Leaf size={16} className="text-forest" />
                <span>100% Vegan & Bio-certified</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-inter text-[#FAF9F6]/85">
                <ShieldCheck size={16} className="text-forest" />
                <span>Cruelty-Free International approved</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-inter text-[#FAF9F6]/85">
                <Compass size={16} className="text-forest" />
                <span>Ethical Community Fair Trade</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[11px] font-inter text-[#FAF9F6]/45">
          <p>© {new Date().getFullYear()} The Body Shop Armenia. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
