import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-inter font-bold tracking-[0.3em] uppercase text-forest block mb-3">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-brandDark">
            We Would Love to Hear From You
          </h1>
          <p className="text-xs md:text-sm font-inter text-brandDark/50 mt-2">
            Send us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8 bg-[#F7F4EC]/40 p-8 rounded-3xl border border-[#1B5E20]/5">
            <div>
              <h2 className="text-xl font-cormorant font-bold text-brandDark mb-4">Contact Channels</h2>
              <p className="text-xs font-inter text-brandDark/60 leading-relaxed">
                For questions regarding product availability, store consultations, or wholesale inquiries, connect with us.
              </p>
            </div>

            <div className="space-y-6 text-xs font-inter text-brandDark/70">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white text-forest rounded-xl">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-semibold text-brandDark">Phone Support</p>
                  <p className="text-brandDark/60">+374 10 523344</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white text-forest rounded-xl">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-semibold text-brandDark">Email Support</p>
                  <p className="text-brandDark/60">support@thebodyshop.am</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white text-forest rounded-xl">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="font-semibold text-brandDark">Headquarters Office</p>
                  <p className="text-brandDark/60">24 Mashtots Avenue, Yerevan</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-brandDark/10">
              <h3 className="text-[10px] font-inter font-bold tracking-widest text-[#7B5E3B] uppercase mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-white hover:bg-forest text-brandDark hover:text-white rounded-full transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="p-3 bg-white hover:bg-forest text-brandDark hover:text-white rounded-full transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="text-center py-16 bg-[#DDEED8]/30 rounded-3xl border border-[#1B5E20]/20 text-forest p-8 flex flex-col items-center justify-center space-y-4">
                <CheckCircle2 size={36} />
                <h3 className="text-2xl font-cormorant font-bold text-brandDark">Message Sent!</h3>
                <p className="text-xs font-inter text-brandDark/70 max-w-sm">
                  We have received your message. A representative from The Body Shop Armenia will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] font-inter font-bold tracking-wider text-brandDark/50 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Anna Sargsyan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#1B5E20]/15 rounded-xl py-3.5 px-4 text-xs font-inter text-brandDark focus:outline-none focus:border-forest"
                    required
                    data-cursor="explore"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] font-inter font-bold tracking-wider text-brandDark/50 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="anna@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#1B5E20]/15 rounded-xl py-3.5 px-4 text-xs font-inter text-brandDark focus:outline-none focus:border-forest"
                    required
                    data-cursor="explore"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] font-inter font-bold tracking-wider text-brandDark/50 uppercase">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#1B5E20]/15 rounded-xl py-3.5 px-4 text-xs font-inter text-brandDark focus:outline-none focus:border-forest resize-none"
                    required
                    data-cursor="explore"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0B260E] hover:bg-forest text-white text-[10px] font-inter font-bold tracking-[0.2em] uppercase rounded-xl transition-all shadow-lg hover:shadow-xl shadow-brandDark/10 flex items-center justify-center space-x-2 focus:outline-none"
                  data-cursor="explore"
                  data-cursor-text="Send"
                >
                  <Send size={12} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
