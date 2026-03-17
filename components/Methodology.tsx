
import React from 'react';

const steps = [
  {
    num: "01",
    title: "ASSESS",
    text: "We begin with a thorough evaluation of the student's current academic performance, learning style, and specific challenges."
  },
  {
    num: "02",
    title: "STRATEGISE",
    text: "Based on the assessment, we develop a bespoke learning strategy that addresses the root causes of academic struggle."
  },
  {
    num: "03",
    title: "IMPLEMENT",
    text: "Students work one-on-one with our coaches to apply the strategy, developing new habits and mastering difficult content."
  },
  {
    num: "04",
    title: "MONITOR",
    text: "We provide regular progress reports and adjust the approach as the student evolves and reaches new milestones."
  }
];

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-12 leading-tight tracking-tight">
              THE <span className="text-blue-600">LAB</span> APPROACH
            </h2>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-8 group">
                  <div className="text-4xl font-black text-blue-50 group-hover:text-blue-600 transition-colors duration-500 w-16">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#1d1d1f] mb-3 tracking-tight">{step.title}</h4>
                    <p className="text-[#1d1d1f]/60 leading-relaxed text-lg">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-10 bg-blue-100/30 blur-[100px] rounded-full"></div>
             <img 
               src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
               alt="Collaboration at The Lab" 
               className="rounded-lg shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] relative z-10 border-8 border-white object-cover aspect-square"
             />
          </div>
        </div>
      </div>
    </section>
  );
};
