import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let mouseX = 0;
    let mouseY = 0;
    let outerX = 0;
    let outerY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      // Move inner cursor instantly
      inner.style.left = `${mouseX}px`;
      inner.style.top = `${mouseY}px`;
    };

    const animateOuter = () => {
      // Smooth interpolation (lerp) for trailing effect
      const lerpFactor = 0.15;
      outerX += (mouseX - outerX) * lerpFactor;
      outerY += (mouseY - outerY) * lerpFactor;

      outer.style.left = `${outerX}px`;
      outer.style.top = `${outerY}px`;

      requestAnimationFrame(animateOuter);
    };

    const handleMouseOver = (e) => {
      // Check if target or parent has interactive attributes
      const interactiveEl = e.target.closest("button, a, [data-cursor]");
      if (interactiveEl) {
        setHovered(true);
        const text = interactiveEl.getAttribute("data-cursor-text") || "";
        setCursorText(text);
      } else {
        setHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    const animationId = requestAnimationFrame(animateOuter);

    // Add global class to disable default cursor in premium experience
    document.documentElement.style.cursor = "none";
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      a, button, input, select, textarea, [role="button"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      document.head.removeChild(styleEl);
      document.documentElement.style.cursor = "auto";
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer cursor circle */}
      <div
        ref={outerRef}
        className={`custom-cursor flex items-center justify-center text-center select-none ${
          hovered ? "hovering" : ""
        }`}
        style={{
          boxShadow: hovered ? "0 0 20px rgba(27, 94, 32, 0.4)" : "none",
        }}
      >
        {hovered && cursorText && (
          <span className="text-[9px] font-semibold font-inter tracking-[0.2em] text-[#1B5E20] uppercase animate-pulse">
            {cursorText}
          </span>
        )}
      </div>

      {/* Inner cursor dot */}
      <div ref={innerRef} className="custom-cursor-inner" />
    </>
  );
}
