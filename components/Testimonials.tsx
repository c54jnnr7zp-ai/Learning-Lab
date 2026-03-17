
import React from 'react';
import { GlassCard } from './GlassCard';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Parent",
    content: "My Learning Lab changed the way my son views Mathematics. He's no longer afraid of the subject, and his grades have improved drastically.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Mark Thompson",
    role: "University Student",
    content: "The study skills workshop was exactly what I needed to manage my heavy workload at university. Highly recommend their coaching services.",
    image: "https://picsum.photos/seed/mark/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "High School Parent",
    content: "Personalized attention is rare these days. The coaches here truly care about student wellbeing and academic confidence.",
    image: "https://picsum.photos/seed/elena/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] text-center mb-16">What Parents & Students Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <GlassCard key={i} className="flex flex-col">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic text-[#1d1d1f]/80 leading-relaxed mb-8">
                  "{t.content}"
                </p>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-lg border-2 border-white shadow-sm" />
                <div>
                  <h5 className="font-bold text-[#1d1d1f]">{t.name}</h5>
                  <p className="text-sm text-[#1d1d1f]/50">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
