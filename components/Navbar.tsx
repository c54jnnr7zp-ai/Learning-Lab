
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass h-16' : 'bg-white h-24'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Learning Lab Logo"
            className="w-12 h-12 rounded-lg "
          />
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-[#1e1e2b] leading-none">Learning</span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#ff0055] leading-none uppercase">Lab</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          {['Home', 'Subjects', 'Features', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-[#1e1e2b]/80 hover:text-[#ff0055] transition-colors"
            >
              {item}
            </a>
          ))}

          <div className="flex items-center gap-3 ml-4">
            <button className="px-6 py-3 bg-[#ff0055] text-white rounded-lg text-sm font-bold hover:bg-[#e6004c] transition-all shadow-lg shadow-[#ff0055]/20 active:scale-95">
              Get In Touch
            </button>
            <button className="px-6 py-3 bg-white text-[#ff0055] border-2 border-[#ff0055] rounded-lg text-sm font-bold hover:bg-[#ff0055]/5 transition-all active:scale-95">
              About Us
            </button>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <button className="lg:hidden p-2 text-[#1e1e2b]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
