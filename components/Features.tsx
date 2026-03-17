
import React from 'react';

const FeatureItem = ({ title, description }: { title: string, description: string }) => (
  <div className="group mb-10 last:mb-0">
    <div className="flex items-start gap-4">
      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-[#1e1e2b] flex items-center justify-center text-white">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#1e1e2b] mb-3 group-hover:text-[#ff0055] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#1e1e2b]/60 leading-relaxed text-base font-medium">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-sm font-bold tracking-[0.3em] text-[#ff0055] uppercase mb-4 block">FEATURES</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e1e2b] tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Interactive Teaching, Professional Services Learning Lab Offers.
          </h2>
          <p className="text-[#1e1e2b]/40 text-lg font-semibold">
            Empower your foundation-phase child with our comprehensive educational support.
          </p>
        </div>

        {/* First Row: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 mb-32">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative background for image */}
              <div className="absolute -inset-10 bg-blue-50/50 blur-[80px] rounded-full -z-10 animate-pulse"></div>
              <img
                src="public/amicoTeaching-0fc24ded.png"
                alt="Interactive Teaching Illustration"
                className="w-full h-auto max-w-lg mx-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <FeatureItem
              title="Tutoring Services"
              description="Boost your child's learning journey with our tutoring services for foundation phase students. Our friendly tutors focus on foundational skills, making complex topics simple and engaging for young learners. Give your child the support they need to thrive!"
            />
            <FeatureItem
              title="Test & Exam Preparation"
              description="Help your child build confidence and succeed with our test and exam preparation for foundation-phase kids. We provide fun, age-appropriate study tools and practice materials designed to make learning enjoyable while enhancing understanding of key subjects."
            />
            <FeatureItem
              title="Homework Class & Learning Support"
              description="We also provide homework classes and learning support to build confidence and study skills, to keep learning fun and organized!"
            />
          </div>
        </div>

        {/* Second Row: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="w-full lg:w-1/2 order-1">
            <FeatureItem
              title="Educational Booklets"
              description="Make learning exciting with our educational booklets for kids in the foundation phase. Each booklet is packed with colorful activities, easy-to-understand lessons, and fun exercises to help young students build essential skills."
            />
            <FeatureItem
              title="Book Covering Services"
              description="Protect your child's books with our book covering services tailored for young students. We offer durable, child-friendly covers to keep their schoolbooks safe and clean throughout the school year."
            />
            <FeatureItem
              title="Personalized Stationary Package"
              description="Add a personal touch to your child's school supplies with our personalized stationery packages for kids. From custom notebooks to colorful pens, each item can be tailored to match your child's personality, making school more fun and engaging!"
            />
          </div>
          <div className="w-full lg:w-1/2 order-2">
            <div className="relative">
              {/* Decorative background for image */}
              <div className="absolute -inset-10 bg-pink-50/50 blur-[80px] rounded-full -z-10 animate-pulse"></div>
              <img
                src="public/panaTeaching-3db890d1.png"
                alt="Educational Support Illustration"
                className="w-full h-auto max-w-lg mx-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
