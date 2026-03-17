
import React from 'react';
import { GlassCard } from './GlassCard';

export const Learn: React.FC = () => {
  return (
    <section id="learn" className="py-24 bg-[#e5e9f0]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <span className="text-sm font-bold tracking-widest text-[#1d1d1f]/40 uppercase mb-4 block">LEARN</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-8 leading-tight tracking-tight">
              The Best Way To Learn Is With Us
            </h2>
            <p className="text-[#1d1d1f]/60 text-lg leading-relaxed mb-10 max-w-xl">
              At Learning Lab, we offer a welcoming and vibrant environment where foundation-phase kids can learn, grow, and connect with one another. Our friendly, supportive tutors provide tailored services like test preparation, homework assistance, and personalized tutoring that boost both academic skills and confidence.
            </p>
            <button className="px-8 py-3 border-2 border-[#e91e63] text-[#e91e63] rounded-lg font-bold hover:bg-[#e91e63] hover:text-white transition-all duration-300">
              Learn more
            </button>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop" 
                alt="Teacher with student" 
                className="rounded-lg shadow-2xl w-full h-[450px] object-cover"
              />
              
              {/* Overlapping Glass Card */}
              <div className="absolute -bottom-10 -left-10 md:-left-20 max-w-xs md:max-w-sm">
                <GlassCard className="!p-8 !rounded-lg shadow-xl">
                  <h4 className="text-xl font-bold text-[#1d1d1f] mb-4">Why Learning Lab ?</h4>
                  <p className="text-[#1d1d1f]/60 leading-relaxed text-sm">
                    With a focus on each child's unique potential, Learning Lab is the perfect place for young learners to thrive together!
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
