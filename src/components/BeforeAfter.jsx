import { useState, useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-[#1B5E20]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-inter font-bold tracking-[0.4em] uppercase text-forest block mb-3">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-brandDark mb-4">
            Skincare Transformation
          </h2>
          <p className="text-xs md:text-sm font-inter text-brandDark/70 leading-relaxed">
            Drag the slider to see the difference 4 weeks of our organic Tea Tree & Vitamin C routine makes on acne-prone, dull skin.
          </p>
        </div>

        {/* Slider Box */}
        <div className="flex justify-center items-center">
          <div
            ref={containerRef}
            className="w-full max-w-4xl h-[300px] md:h-[500px] rounded-3xl overflow-hidden relative select-none shadow-2xl border border-[#1B5E20]/10 cursor-col-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* Before Layer (Underneath, Full width) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=1200"
                alt="Skin Before Treatment"
                className="w-full h-full object-cover pointer-events-none filter saturate-[0.8] contrast-[0.9]"
              />
              <div className="absolute top-6 left-6 bg-black/45 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-inter font-bold tracking-widest text-white uppercase">
                Before Routine
              </div>
            </div>

            {/* After Layer (Overlaid, Clip width) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200"
                alt="Skin After Treatment"
                className="absolute inset-0 w-[896px] md:w-[896px] h-full max-w-none object-cover pointer-events-none filter brightness-[1.03] contrast-[1.02]"
                style={{
                  width: containerRef.current ? containerRef.current.getBoundingClientRect().width : "100%"
                }}
              />
              <div className="absolute top-6 right-6 bg-forest/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-inter font-bold tracking-widest text-white uppercase flex items-center space-x-1.5">
                <Sparkles size={11} />
                <span>After 4 Weeks</span>
              </div>
            </div>

            {/* Split Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white z-20 shadow-[0_0_10px_rgba(27,94,32,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white text-forest border border-[#1B5E20]/30 rounded-full flex items-center justify-center shadow-2xl z-30 transition-transform hover:scale-110">
                <span className="text-xs font-inter font-extrabold flex space-x-0.5">
                  <span>‹</span>
                  <span>›</span>
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
