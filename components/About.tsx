import React, { useEffect, useRef, useState } from 'react';
import about from '../public/about.png';


export const About: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolledPastTop = window.innerHeight - rect.top;

      // Only update if the section is visible
      if (scrolledPastTop > 0 && rect.bottom > 0) {
        // Subtle move: 10% of the scroll distance within the section
        setOffset(scrolledPastTop * 0.1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto md:px-6">
        <div className="bg-[#1d1d1f] md:rounded-lg px-6 py-16 md:p-24 text-white flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative">
          {/* Animated decorative background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff0055]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="lg:w-1/2 z-10">
            <span className="text-[#ff0055] font-bold tracking-[0.2em] uppercase text-xs mb-6 block">ABOUT MY LEARNING LAB</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-[1.1] tracking-tight">Our Mission is to build confident, independent learners.</h2>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 font-light">
              Founded on the belief that every student has the potential to excel, My Learning Lab bridges the gap between traditional classroom learning and individual mastery. Our lab is a space where strategy meets empathy, and where students are equipped with the tools for lifelong success.
            </p>
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div className="group cursor-default">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter group-hover:text-[#ff0055] transition-colors duration-300">100%</div>
                <div className="text-white/40 text-[10px] md:text-sm font-semibold tracking-wider uppercase group-hover:text-white/60 transition-colors">Personalized Attention</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter group-hover:text-[#ff0055] transition-colors duration-300">Elite</div>
                <div className="text-white/40 text-[10px] md:text-sm font-semibold tracking-wider uppercase group-hover:text-white/60 transition-colors">Academic Coaches</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 z-10 w-full">
            <div className="relative group perspective-1000">
              {/* Background glow that follows the image */}
              <div className="absolute -inset-4 bg-blue-600/20 blur-2xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Parallax Image Container */}
              <div
                className="overflow-hidden rounded-lg shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{
                  transform: `translateY(${offset * -0.5}px)` // Moves slightly against scroll direction
                }}
              >
                <img
                  src={about}
                  alt="The Learning Lab Mission"
                  className="group-hover:grayscale-0 transition-all duration-1000 object-cover w-full aspect-[4/5] scale-110"
                  style={{
                    transform: `translateY(${offset * 0.2}px)` // Internal parallax for deeper effect
                  }}
                />
              </div>

              {/* Floating Overlay Badge */}
              <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ff0055] rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base">
                    LL
                  </div>
                  <div className="text-[#1d1d1f]">
                    <div className="font-bold text-base md:text-lg leading-none">Global Impact</div>
                    <div className="text-xs md:text-sm text-black/40">Since 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
