import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const leafSvgRef = useRef(null);
  const textRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide up preloader out of view
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
            onComplete: onComplete,
          });
        },
      });

      // 1. Fade in and animate the leaf drawing
      tl.fromTo(
        leafSvgRef.current,
        { opacity: 0, scale: 0.6, rotate: -20 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "back.out(1.7)" }
      );

      // Animate SVG path draw
      const path = leafSvgRef.current.querySelector("path");
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        tl.to(
          path,
          { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" },
          "-=0.8"
        );
      }

      // 2. Letters grow/reveal like plants
      const letters = textRef.current.querySelectorAll(".letter");
      tl.fromTo(
        letters,
        { y: 80, rotate: 10, scaleY: 0.1, opacity: 0 },
        {
          y: 0,
          rotate: 0,
          scaleY: 1,
          opacity: 1,
          duration: 1.2,
          stagger: 0.06,
          ease: "elastic.out(1.2, 0.5)",
        },
        "-=1.0"
      );

      // 3. Tagline reveal
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 0.8, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

      // 4. Hold screen
      tl.to({}, { duration: 0.8 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const brandName = "THE BODY SHOP";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-white z-[99999] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center max-w-lg px-6 text-center select-none">
        {/* Organic Leaf SVG Drawing */}
        <svg
          ref={leafSvgRef}
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#1B5E20"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-8 drop-shadow-[0_4px_10px_rgba(27,94,32,0.15)]"
        >
          {/* A beautiful organic branch with growing leaves */}
          <path d="M50 95 C50 65, 50 35, 50 10 M50 75 C65 65, 75 55, 75 40 C75 25, 65 25, 50 35 M50 55 C35 45, 25 35, 25 20 C25 5, 35 5, 50 15 M50 35 C65 25, 72 15, 72 5 C62 5, 55 15, 50 25" />
        </svg>

        {/* Brand Name Text (Animated letter-by-letter) */}
        <h1
          ref={textRef}
          className="text-4xl md:text-5xl font-cormorant font-bold tracking-[0.25em] text-[#0B260E] flex justify-center whitespace-nowrap overflow-hidden h-[60px]"
        >
          {brandName.split("").map((char, index) => (
            <span
              key={index}
              className={`letter inline-block ${char === " " ? "w-4" : ""}`}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-xs md:text-sm font-inter tracking-[0.4em] uppercase text-[#7B5E3B] mt-4 font-medium"
        >
          Armenia Exclusive Experience
        </p>
      </div>

      {/* Decorative organic background patterns */}
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-[#DDEED8] rounded-full opacity-30 animate-pulse-slow" />
      <div className="absolute top-10 right-10 w-36 h-36 border border-[#DDEED8] rounded-full opacity-30 animate-pulse" />
    </div>
  );
}
