import { useState } from "react";
import { STORES } from "../utils/constants";
import { MapPin, Clock, Phone, Calendar, User, Sparkles, CheckCircle2 } from "lucide-react";
import Stores from "../components/Stores";

export default function StoresPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "", boutique: "mashtots" });
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;
    setBooked(true);
    setFormData({ name: "", phone: "", date: "", boutique: "mashtots" });
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase text-forest block mb-3">
            Armenia boutiques
          </span>
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-brandDark">
            Our Yerevan Boutiques
          </h1>
          <p className="text-xs md:text-sm font-inter text-brandDark/50 mt-2">
            Find addresses, contact numbers, opening hours, and register for a face-to-face skincare diagnostic consultation.
          </p>
        </div>

        {/* Mount interactive map block */}
        <div className="mb-24">
          <Stores />
        </div>

        {/* Consultation booking block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-[#1B5E20]/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-forest/5">
          
          {/* Booking Info column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 text-forest">
              <Sparkles size={16} />
              <span className="text-[10px] font-inter font-bold tracking-widest uppercase">
                Complimentary Service
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-[#0B260E]">
              Book a Skincare Consultation
            </h2>
            
            <p className="text-xs font-inter text-brandDark/70 leading-relaxed">
              Register for a free 15-minute diagnostic skin scan. Our in-store advisers will analyze your hydration levels, identify blemish triggers, and curate a bespoke daily routine.
            </p>

            <div className="space-y-3 pt-4 text-xs font-inter text-brandDark/60">
              <p>✓ Skin hydration levels scan</p>
              <p>✓ Product testing & texture samples</p>
              <p>✓ 10% Discount on products purchased during the session</p>
            </div>
          </div>

          {/* Booking Form column (7 cols) */}
          <div className="lg:col-span-7">
            {booked ? (
              <div className="text-center py-12 bg-[#DDEED8]/30 rounded-2xl border border-[#1B5E20]/20 text-forest p-6 flex flex-col items-center justify-center space-y-4">
                <CheckCircle2 size={32} />
                <h3 className="text-xl font-cormorant font-bold text-brandDark">Booking Confirmed!</h3>
                <p className="text-xs font-inter text-brandDark/70 max-w-sm">
                  We have registered your session. Our boutique adviser will contact you shortly to confirm the exact time slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] font-inter font-bold tracking-wider text-brandDark/50 uppercase">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-brandDark/40" size={13} />
                      <input
                        type="text"
                        placeholder="Anna Sargsyan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#1B5E20]/15 rounded-xl py-3 pl-9 pr-4 text-xs font-inter text-brandDark focus:outline-none focus:border-forest"
                        required
                        data-cursor="explore"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] font-inter font-bold tracking-wider text-brandDark/50 uppercase">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-brandDark/40" size={13} />
                      <input
                        type="tel"
                        placeholder="+374 99 123456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#1B5E20]/15 rounded-xl py-3 pl-9 pr-4 text-xs font-inter text-brandDark focus:outline-none focus:border-forest"
                        required
                        data-cursor="explore"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Date field */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] font-inter font-bold tracking-wider text-brandDark/50 uppercase">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-brandDark/40" size={13} />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#1B5E20]/15 rounded-xl py-3 pl-9 pr-4 text-xs font-inter text-brandDark focus:outline-none focus:border-forest"
                        required
                        data-cursor="explore"
                      />
                    </div>
                  </div>

                  {/* Boutique selection */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] font-inter font-bold tracking-wider text-brandDark/50 uppercase">
                      Select Boutique
                    </label>
                    <select
                      value={formData.boutique}
                      onChange={(e) => setFormData({ ...formData, boutique: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#1B5E20]/15 rounded-xl py-3 px-4 text-xs font-inter text-brandDark focus:outline-none focus:border-forest"
                      required
                      data-cursor="explore"
                    >
                      {STORES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0B260E] hover:bg-forest text-white text-[10px] font-inter font-bold tracking-[0.2em] uppercase rounded-xl transition-all shadow-lg hover:shadow-xl shadow-brandDark/10 focus:outline-none"
                    data-cursor="explore"
                    data-cursor-text="Submit"
                  >
                    Request Diagnostic Booking
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
