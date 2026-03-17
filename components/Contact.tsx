
import React, { useState } from 'react';
import { GlassCard } from './GlassCard';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Academic Coaching',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a professional "Processing" delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const phoneNumber = '27677032377'; 
    const text = `*New Consultation Request from My Learning Lab*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Service:* ${formData.service}%0A` +
                 `*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    
    // Open WhatsApp in a new tab so the user stays on the current page
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-32 bg-[#fbfbfd]">
        <div className="max-w-3xl mx-auto px-6">
          <GlassCard className="text-center p-16 md:p-24 animate-fade-in-up border-[#ff0055]/20">
            <div className="w-24 h-24 bg-[#ff0055] rounded-lg flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#ff0055]/30">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-[#1e1e2b] mb-4">Message Prepared!</h2>
            <p className="text-xl text-[#1e1e2b]/60 mb-10">
              Your request has been processed. A WhatsApp window has opened to finalize the send. We'll get back to you shortly!
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="px-10 py-4 bg-[#1e1e2b] text-white rounded-lg font-bold hover:bg-black transition-all"
            >
              Send Another Request
            </button>
          </GlassCard>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-[#fbfbfd]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-[#1e1e2b] mb-6 tracking-tight uppercase">READY TO EXCEL?</h2>
          <p className="text-2xl text-[#1e1e2b]/50 max-w-2xl mx-auto">Book your free 30-minute consultation with one of our lead academic coaches today.</p>
        </div>
        
        <div className="glass rounded-lg p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-white/50 relative overflow-hidden">
          {isSubmitting && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-20 flex flex-col items-center justify-center">
               <div className="w-16 h-16 border-4 border-[#ff0055] border-t-transparent rounded-lg animate-spin mb-4"></div>
               <p className="text-[#ff0055] font-bold text-lg">Preparing your message...</p>
            </div>
          )}
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#1e1e2b] uppercase tracking-widest ml-1">Student / Parent Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-8 py-5 bg-white border border-black/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0055] transition-all text-lg shadow-sm"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#1e1e2b] uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  required
                  className="w-full px-8 py-5 bg-white border border-black/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0055] transition-all text-lg shadow-sm"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-bold text-[#1e1e2b] uppercase tracking-widest ml-1">Service of Interest</label>
              <div className="relative">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-8 py-5 bg-white border border-black/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0055] transition-all appearance-none text-lg shadow-sm"
                >
                  <option>Academic Coaching</option>
                  <option>Subject Tutoring</option>
                  <option>Educational Assessment</option>
                  <option>University Preparation</option>
                </select>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-[#1e1e2b] uppercase tracking-widest ml-1">Additional Information</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about the student's current academic challenges..."
                className="w-full px-8 py-5 bg-white border border-black/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0055] transition-all text-lg shadow-sm"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-6 text-white rounded-lg text-xl font-bold shadow-2xl transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-3 ${isSubmitting ? 'bg-gray-400' : 'bg-[#ff0055] shadow-[#ff0055]/30 hover:bg-[#e6004c]'}`}
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT VIA WHATSAPP'}
              {!isSubmitting && (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              )}
            </button>
            <p className="text-center text-[#1e1e2b]/40 text-sm font-medium">
              We respect your privacy. This action will open a secure WhatsApp chat.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
