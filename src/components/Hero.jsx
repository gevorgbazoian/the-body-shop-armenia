import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);

  // Split text for organic letter reveal
  const title1 = "Powered by Nature.";
  const title2 = "Inspired by You.";

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  // 12 Floating Leaves with random sizes, start coordinates, and animation durations
  const leaves = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 12, // 12px to 32px
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10, // 10s to 25s
  }));

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#FAF9F6] flex items-center"
    >
      {/* Background Video/Visual Loop */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-[0.9] transition-opacity duration-1000"
          poster="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-sunlight-529-large.mp4"
            type="video/mp4"
          />
          {/* Fallback image */}
        </video>
        {/* Soft Organic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EC]/90 via-[#F7F4EC]/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EC] via-transparent to-transparent opacity-60" />
      </div>

      {/* Floating Leaf Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            className="absolute text-forest/20"
            style={{
              left: leaf.left,
              top: leaf.top,
              width: leaf.size,
              height: leaf.size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 40, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Leaf fill="currentColor" size={leaf.size} className="transform -rotate-45" />
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-20 flex flex-col items-start relative">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex items-center space-x-2 mb-6"
        >
          <span className="w-8 h-[1px] bg-forest" />
          <span className="text-xs md:text-sm font-inter tracking-[0.4em] uppercase text-forest font-semibold">
            Armenian Premium Exclusive
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-cormorant font-bold tracking-tight text-[#0B260E] leading-[1.05] mb-8"
        >
          {/* Line 1 */}
          <div className="overflow-hidden flex flex-wrap h-[55px] md:h-[80px] lg:h-[100px]">
            {title1.split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="mr-4 flex overflow-hidden">
                {word.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>

          {/* Line 2 */}
          <div className="overflow-hidden flex flex-wrap h-[55px] md:h-[80px] lg:h-[100px] text-earth">
            {title2.split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="mr-4 flex overflow-hidden">
                {word.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="max-w-md md:max-w-lg text-sm md:text-base text-brandDark font-inter leading-relaxed mb-10"
        >
          Experience skincare crafted with pure organic ingredients, sourced ethically from around the globe, and tailored to provide the ultimate beauty ritual for Armenia.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
        >
          {/* Primary Action */}
          <Link
            to="/products"
            className="group relative px-8 py-4 bg-[#1B5E20] text-white text-xs font-inter font-bold tracking-[0.2em] uppercase rounded-full overflow-hidden flex items-center justify-center space-x-2 shadow-lg shadow-forest/10 hover:shadow-xl hover:shadow-forest/20 transition-all duration-300 focus:outline-none"
            data-cursor="explore"
            data-cursor-text="Shop"
          >
            <span className="relative z-10">Shop Collection</span>
            <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-[#0B260E] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
          </Link>

          {/* Secondary Action */}
          <Link
            to="/collections"
            className="group px-8 py-4 border border-[#1B5E20]/30 hover:border-forest text-brandDark hover:text-forest text-xs font-inter font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none"
            data-cursor="explore"
            data-cursor-text="Explore"
          >
            <span>Our Ingredients</span>
          </Link>
        </motion.div>
      </div>

      {/* Hero Bottom Bar Info */}
      <div className="absolute bottom-10 left-6 md:left-12 right-6 md:right-12 z-20 flex justify-between items-end pointer-events-none select-none">
        {/* Scroll Indicator */}
        <div className="flex items-center space-x-3 text-[10px] font-inter font-semibold tracking-[0.3em] uppercase text-forest/70 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-forest" />
          <span>Scroll Down</span>
        </div>

        {/* Counter Summary */}
        <div className="hidden md:flex items-center space-x-12">
          <div>
            <p className="text-2xl font-cormorant font-bold text-forest leading-none">1976</p>
            <p className="text-[8px] font-inter tracking-widest text-[#7B5E3B] uppercase">Since</p>
          </div>
          <div>
            <p className="text-2xl font-cormorant font-bold text-forest leading-none">100%</p>
            <p className="text-[8px] font-inter tracking-widest text-[#7B5E3B] uppercase">Cruelty-Free</p>
          </div>
          <div>
            <p className="text-2xl font-cormorant font-bold text-forest leading-none">100k+</p>
            <p className="text-[8px] font-inter tracking-widest text-[#7B5E3B] uppercase">Happy Skins</p>
          </div>
        </div>
      </div>
    </div>
  );
}
