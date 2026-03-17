
import React from 'react';
import { GlassCard } from './GlassCard';

const services = [
  {
    title: "Academic Coaching",
    description: "Our signature service. We help students master the 'how' of learning through time management, organizational skills, and cognitive study techniques.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Subject Tutoring",
    description: "Expert one-on-one support for Mathematics, Physical Science, Accounting, and more. Focused on deep subject mastery and exam readiness.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Educational Assessments",
    description: "Comprehensive assessments to identify learning barriers, cognitive strengths, and career paths, providing a data-driven foundation for success.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-6 tracking-tight">OUR SERVICES</h2>
          <p className="text-xl text-[#1d1d1f]/50 max-w-2xl mx-auto font-medium">
            Tailored solutions to unlock every student's unique potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <GlassCard key={index} className="flex flex-col items-start p-12 h-full">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm mb-8 border border-white/50">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#1d1d1f] mb-6 tracking-tight">{service.title}</h3>
              <p className="text-[#1d1d1f]/60 leading-relaxed text-lg font-normal mb-8">
                {service.description}
              </p>
              <button className="mt-auto text-[#0071e3] font-semibold flex items-center gap-2 hover:underline">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
