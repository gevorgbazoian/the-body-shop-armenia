import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Leaf, Award, Globe, HeartHandshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function IngredientJourney() {
  const containerRef = useRef(null);
  const stage1Ref = useRef(null);
  const stage2Ref = useRef(null);
  const stage3Ref = useRef(null);
  const stage4Ref = useRef(null);

  const steps = [
    {
      num: "01",
      title: "Wild Shea Trees of Ghana",
      tagline: "Grown in the Savannahs",
      desc: "The Shea tree grows wild in the dry savannahs of Northern Ghana. It takes up to 25 years to bear its first fruit, producing rich nuts packed with intensely nourishing fatty acids.",
      stat: "25 Years",
      statDesc: "To bear fruit",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      icon: <Globe size={16} />,
      ref: stage1Ref,
    },
    {
      num: "02",
      title: "Community Fair Trade Harvest",
      tagline: "Empowering 600+ Women",
      desc: "Handcrafted by the Tungteiya Shea Butter Association. The local women collect, wash, and sun-dry the fallen nuts, earning fair wages that fund schools, clean water, and healthcare.",
      stat: "600+ Women",
      statDesc: "Gaining independence",
      image: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&q=80&w=1200",
      icon: <HeartHandshake size={16} />,
      ref: stage2Ref,
    },
    {
      num: "03",
      title: "Handmade Extraction",
      tagline: "Preserving Natural Nutrients",
      desc: "The Shea nuts are crushed, roasted, and kneaded meticulously by hand to extract the raw, organic butter. A heritage craft passed down across generations.",
      stat: "100% Raw",
      statDesc: "Handmade extraction",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200",
      icon: <Award size={16} />,
      ref: stage3Ref,
    },
    {
      num: "04",
      title: "Pure Whipped Nourishment",
      tagline: "The Legend is Ready",
      desc: "The butter is whipped into our iconic Body Butter. Made with 95% ingredients of natural origin, it delivers 96 hours of intense skin repair and a velvety finish.",
      stat: "96 Hours",
      statDesc: "Deep hydration",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1200",
      icon: <Leaf size={16} />,
      ref: stage4Ref,
    },
  ];

  useGSAP(() => {
    // We will build a timeline that pins the container and cross-fades the steps.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // Scroll length
        pin: true,
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    const elements = [stage1Ref.current, stage2Ref.current, stage3Ref.current, stage4Ref.current];

    // Animate stage transitions
    elements.forEach((el, index) => {
      if (index === 0) return; // First element is already visible

      const prevEl = elements[index - 1];

      // Fade out previous element, fade in current element
      tl.to(prevEl, { opacity: 0, y: -40, duration: 1, ease: "power2.inOut" })
        .fromTo(
          el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" },
          "-=0.6" // overlapping animations
        );
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen bg-[#0B260E] text-[#F7F4EC] relative overflow-hidden">
      {/* Background soft ambient lights */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#1B5E20]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-[#7B5E3B]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Title block at the top */}
      <div className="absolute top-12 left-6 md:left-12 right-6 md:right-12 z-30 flex flex-col md:flex-row justify-between items-start md:items-end pointer-events-none select-none">
        <div>
          <span className="text-[10px] font-inter font-bold tracking-[0.4em] uppercase text-forest block mb-2">
            The Body Shop Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-white">
            Shea Butter Journey
          </h2>
        </div>
        <p className="text-[10px] font-inter text-[#F7F4EC]/50 uppercase tracking-widest mt-2 md:mt-0">
          Scroll to trace our Fair Trade impact
        </p>
      </div>

      {/* Render Steps in layered relative containers */}
      <div className="w-full h-full relative flex items-center justify-center">
        {steps.map((step, idx) => {
          return (
            <div
              key={step.num}
              ref={step.ref}
              className="absolute inset-0 px-6 md:px-12 flex items-center justify-center"
              style={{
                opacity: idx === 0 ? 1 : 0,
                zIndex: 10 + idx,
              }}
            >
              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Text Description Column (5 cols) */}
                <div className="lg:col-span-5 flex flex-col space-y-6">
                  {/* Step Num Indicator */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl md:text-3xl font-cormorant font-bold text-[#7B5E3B]">
                      {step.num}
                    </span>
                    <span className="w-6 h-[1px] bg-[#7B5E3B]" />
                    <div className="flex items-center space-x-1.5 text-forest">
                      {step.icon}
                      <span className="text-[10px] font-inter font-bold uppercase tracking-wider">
                        {step.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-bold text-white leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm font-inter text-[#FAF9F6]/70 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Stats Counter */}
                  <div className="pt-6 border-t border-[#FAF9F6]/10 flex space-x-8">
                    <div>
                      <p className="text-3xl md:text-4xl font-cormorant font-bold text-[#7B5E3B]">
                        {step.stat}
                      </p>
                      <p className="text-[9px] font-inter tracking-wider text-[#FAF9F6]/45 uppercase mt-1">
                        {step.statDesc}
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-cormorant font-bold text-[#1B5E20]">
                        100%
                      </p>
                      <p className="text-[9px] font-inter tracking-wider text-[#FAF9F6]/45 uppercase mt-1">
                        Fair Traded
                      </p>
                    </div>
                  </div>
                </div>

                {/* Media Image Column (7 cols) */}
                <div className="lg:col-span-7 h-[280px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl relative border border-[#FAF9F6]/10">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brandDark/60 via-transparent to-transparent" />
                  
                  {/* Pinned map indicator or subtle label */}
                  <div className="absolute bottom-6 right-6 bg-[#FAF9F6]/10 backdrop-blur-md border border-[#FAF9F6]/20 px-4 py-2 rounded-full">
                    <span className="text-[10px] font-inter tracking-widest text-[#FAF9F6] uppercase font-semibold">
                      Tungteiya, Ghana
                    </span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Floating dot progression timeline helper at the bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {steps.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full border border-white/30 transition-colors duration-500"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
