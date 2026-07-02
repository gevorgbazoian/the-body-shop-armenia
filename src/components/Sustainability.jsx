import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Leaf, Award, Recycle, ShieldAlert } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Sustainability() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Letters assemble / fade-in color scrub on scroll
    const chars = textRef.current.querySelectorAll(".scroll-word");
    if (!chars.length) return;

    const anim = gsap.fromTo(
      chars,
      { opacity: 0.15, y: 15 },
      {
        opacity: 1,
        y: 0,
        color: "#F7F4EC",
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );

    // Cards reveal
    const cards = containerRef.current.querySelectorAll(".value-card");
    const cardsAnim = gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current.querySelector(".cards-trigger"),
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      if (cardsAnim.scrollTrigger) cardsAnim.scrollTrigger.kill();
    };
  }, { scope: containerRef });

  const bodyText = "We exist to fight for a fairer, more beautiful world. This is our purpose, and it drives everything we do. Our packaging is designed to be recycled. Our ingredients are organically harvested. Our products are 100% cruelty-free. We believe in beauty with a conscience.";

  const values = [
    {
      title: "Cruelty Free",
      desc: "Leaping Bunny approved. We have actively campaigned against animal testing since 1989.",
      icon: <ShieldAlert className="text-forest mb-4" size={24} />
    },
    {
      title: "100% Vegan",
      desc: "Certified by The Vegan Society. Pure botanical goodness for your skin's health.",
      icon: <Leaf className="text-forest mb-4" size={24} />
    },
    {
      title: "Community Fair Trade",
      desc: "Sourcing premium ingredients and handmade packaging from local cooperatives around the world.",
      icon: <Award className="text-forest mb-4" size={24} />
    },
    {
      title: "Recycled Packaging",
      desc: "Pioneering the use of PCR (post-consumer recycled) plastic to keep waste out of our oceans.",
      icon: <Recycle className="text-forest mb-4" size={24} />
    }
  ];

  return (
    <section
      ref={containerRef}
      className="py-28 bg-[#0B260E] text-[#F7F4EC] border-b border-[#FAF9F6]/10 relative overflow-hidden"
    >
      {/* Decorative blurry nodes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-forest/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-earth/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Typography Assembly Section */}
        <div className="max-w-4xl mb-24">
          <span className="text-[10px] font-inter font-bold tracking-[0.4em] uppercase text-forest block mb-6">
            Sustainability & Ethics
          </span>
          
          <h2
            ref={textRef}
            className="text-3xl md:text-5xl lg:text-6xl font-cormorant font-bold leading-[1.3] text-[#FAF9F6]/20 flex flex-wrap"
          >
            {bodyText.split(" ").map((word, index) => (
              <span key={index} className="scroll-word inline-block mr-3 mb-2">
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Core Pillars Grid (cards-trigger) */}
        <div className="cards-trigger">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="value-card bg-white/[0.03] backdrop-blur-md border border-white/[0.08] hover:border-[#1B5E20]/50 hover:bg-white/[0.05] p-8 rounded-3xl transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  {v.icon}
                  <h3 className="text-xl md:text-2xl font-cormorant font-bold text-white mb-3">
                    {v.title}
                  </h3>
                  <p className="text-xs font-inter text-[#FAF9F6]/60 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
                
                {/* Micro animation bottom indicator */}
                <div className="mt-8 w-8 h-[2px] bg-[#7B5E3B] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
