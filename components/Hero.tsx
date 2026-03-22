
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-52 md:pb-40 overflow-hidden bg-white">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-50 rounded-full blur-[120px] opacity-40 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-30 -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Right Illustration Column - Ordered first on mobile */}
        <div className="relative flex justify-center items-center lg:justify-end order-1 lg:order-2">
          {/* Stunning Blob Container with Animation */}
          <div className="relative w-full max-w-lg aspect-square animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-[#1e1e2b] rounded-lg shadow-2xl overflow-hidden group">
              {/* Illustration Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                {/* Custom Brain Illustration Placeholder */}
                <div className="relative mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  </div>
                  <img
                    src="/learning-lab-hero.png"
                    alt="Educational Hero"
                    className="w-40 h-40 md:w-72 md:h-72 rounded-lg border-8 border-[#ff0055]/10 bg-white p-4 shadow-xl"
                  />


                </div>

                {/* Lab Text at Bottom of Blob */}

              </div>
            </div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#ff0055]/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 -left-10 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl"></div>
        </div>

        {/* Left Content - Ordered second on mobile */}
        <div className="animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-[#1e1e2b] mb-8 leading-[1.1]">
            <span className="text-[#ff0055]">Learning Lab</span> Your Gateway to Education and Essential Services
          </h1>
          <p className="text-lg md:text-xl text-[#1e1e2b]/60 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium">
            Learning Lab is a company which caters to all your educational needs. We provide tutoring services, test preparation and learning support for all the Foundation Phase subjects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#ff0055] text-white rounded-lg text-lg font-bold hover:bg-[#e6004c] transition-all shadow-2xl shadow-[#ff0055]/30 active:scale-95">
              Get in Touch
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#ff0055] border-2 border-[#ff0055] rounded-lg text-lg font-bold hover:bg-[#ff0055]/5 transition-all active:scale-95">
              About Us
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
};
