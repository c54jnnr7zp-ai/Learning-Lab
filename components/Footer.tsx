
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      {/* Top Pink Banner */}
      <div className="bg-[#ff0055] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white bg-white flex items-center justify-center">
            {/* Using a placeholder character logo to match the visual */}
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=LearningLab"
              alt="Learning Lab Logo"
              className="w-10 h-10"
            />
          </div>
          <span className="text-white text-lg font-medium tracking-wide">
            Learning Lab simplified learning
          </span>
        </div>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-[#1e1e2b] pt-20 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 mb-24">
          {/* Column 1: Learning Lab */}
          <div>
            <h4 className="text-[#d4ff00] font-bold text-lg mb-8 uppercase tracking-widest">
              Learning Lab
            </h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Help and support</a></li>
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Features</a></li>
            </ul>
          </div>

          {/* Column 2: CONTENTS */}
          <div>
            <h4 className="text-[#d4ff00] font-bold text-lg mb-8 uppercase tracking-widest">
              CONTENTS
            </h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Primary content</a></li>
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Secondary content</a></li>
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Tertiary content</a></li>
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div>
            <h4 className="text-[#d4ff00] font-bold text-lg mb-8 uppercase tracking-widest">
              HELP
            </h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Home work</a></li>
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Tutoring</a></li>
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Private Lesson</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center">
          <p className="text-[#b3b3b3]/30 text-sm font-medium tracking-tight">
            Learning Lab ©copyright reserved since 2024 - 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
