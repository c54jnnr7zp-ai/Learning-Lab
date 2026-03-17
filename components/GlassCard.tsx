
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`glass rounded-lg p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-white/40 ${className}`}>
      {children}
    </div>
  );
};
