
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-[#e5e9f0]/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sm font-bold tracking-widest text-[#1d1d1f]/40 uppercase mb-4 block">PRICING</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
            At What Cost Is To Learn Here With <br className="hidden md:block" /> Learning Lab
          </h2>
          <p className="text-lg text-[#1d1d1f]/50">
            Learning Lab gives you affordable prices and best education support for your child
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Recommended Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-white/40 transition-transform hover:-translate-y-2 duration-500">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-semibold text-[#1d1d1f]">Recommended</h3>
                <div className="bg-[#3b1e70] text-white px-4 py-2 rounded-lg text-sm font-bold">
                  P/Hour
                </div>
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="text-xs font-bold text-[#1d1d1f]/30 uppercase tracking-widest text-right mb-2">PRICES</div>
                <div className="flex justify-between items-center border-b border-black/5 pb-4">
                  <span className="text-[#1d1d1f]/70 font-medium">Tutoring Services</span>
                  <span className="text-xl font-bold text-[#1d1d1f]">R 300</span>
                </div>
                <div className="flex justify-between items-center border-b border-black/5 pb-4">
                  <span className="text-[#1d1d1f]/70 font-medium">Test & Exam Preparation</span>
                  <span className="text-xl font-bold text-[#1d1d1f]">R 150</span>
                </div>
                <div className="flex justify-between items-center border-b border-black/5 pb-4">
                  <span className="text-[#1d1d1f]/70 font-medium leading-tight max-w-[200px]">Homework Class & Learning Support</span>
                  <span className="text-xl font-bold text-[#1d1d1f]">R 200</span>
                </div>
              </div>

              <button className="w-full py-4 bg-[#3b1e70] text-white rounded-lg font-bold text-lg shadow-lg shadow-purple-500/20 hover:bg-[#4c2d8c] transition-all">
                Get started
              </button>
            </div>
          </div>

          {/* Other Services Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-white/40 transition-transform hover:-translate-y-2 duration-500">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-semibold text-[#1d1d1f]">Other Services</h3>
                <div className="bg-[#2d344b] text-white px-4 py-2 rounded-lg text-sm font-bold">
                  Yearly
                </div>
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="text-xs font-bold text-[#1d1d1f]/30 uppercase tracking-widest text-right mb-2">PRICES</div>
                <div className="flex justify-between items-center border-b border-black/5 pb-4">
                  <span className="text-[#1d1d1f]/70 font-medium">Educational Booklets</span>
                  <span className="text-xl font-bold text-[#1d1d1f]">R 80</span>
                </div>
                <div className="flex justify-between items-center border-b border-black/5 pb-4">
                  <span className="text-[#1d1d1f]/70 font-medium">Personalized Stationery Package</span>
                  <span className="text-xl font-bold text-[#1d1d1f]">R 550</span>
                </div>
                <div className="flex justify-between items-center border-b border-black/5 pb-4">
                  <span className="text-[#1d1d1f]/70 font-medium">Book Covering Services</span>
                  <span className="text-xl font-bold text-[#1d1d1f]">R 20</span>
                </div>
              </div>

              <button className="w-full py-4 bg-[#2d344b] text-white rounded-lg font-bold text-lg shadow-lg shadow-slate-500/20 hover:bg-[#3d4563] transition-all">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
