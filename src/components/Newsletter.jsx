import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-28 bg-[#F7F4EC] relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 border border-forest/10 rounded-full opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 border border-forest/10 rounded-full opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase text-forest block mb-4">
          Join the Circle
        </span>

        <h2 className="text-5xl md:text-7xl font-cormorant font-bold text-brandDark mb-6 tracking-tight">
          Stay Beautiful.
        </h2>

        <p className="max-w-md mx-auto text-xs md:text-sm font-inter text-brandDark/70 leading-relaxed mb-10">
          Subscribe to receive Armenia-exclusive offers, first look at organic collection launches, and expert beauty advice.
        </p>

        {subscribed ? (
          <div className="max-w-md mx-auto bg-white/70 backdrop-blur-md border border-forest/20 p-6 rounded-3xl flex items-center justify-center space-x-3 text-forest animate-fade-in">
            <CheckCircle2 size={20} />
            <span className="text-xs font-inter font-semibold tracking-wider uppercase">
              Thank you for subscribing!
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex items-center bg-white rounded-full p-2 border border-[#1B5E20]/10 shadow-lg shadow-forest/5 focus-within:border-forest transition-colors duration-300">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-transparent px-5 py-3 text-xs font-inter text-brandDark focus:outline-none placeholder-brandDark/40"
              required
              data-cursor="explore"
            />
            <button
              type="submit"
              className="p-3.5 bg-forest hover:bg-brandDark text-white rounded-full transition-colors duration-300 flex items-center justify-center"
              aria-label="Subscribe"
              data-cursor="explore"
              data-cursor-text="Join"
            >
              <Send size={14} />
            </button>
          </form>
        )}

        <div className="mt-8 text-[10px] font-inter text-brandDark/40">
          We respect your privacy. Unsubscribe at any time.
        </div>
      </div>
    </section>
  );
}
