
import { ReactNode } from 'react';

interface VerticalStripButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color: 'cyan' | 'purple' | 'orange' | 'pink' | 'green';
  className?: string;
}

const colorVariants = {
  cyan: 'from-cyan-500 to-blue-600 hover:shadow-cyan-400/50 border-cyan-400',
  purple: 'from-purple-500 to-indigo-600 hover:shadow-purple-400/50 border-purple-400',
  orange: 'from-orange-500 to-red-600 hover:shadow-orange-400/50 border-orange-400',
  pink: 'from-pink-500 to-rose-600 hover:shadow-pink-400/50 border-pink-400',
  green: 'from-green-500 to-teal-600 hover:shadow-green-400/50 border-green-400'
};

export const VerticalStripButton = ({ children, onClick, color, className = "" }: VerticalStripButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden
        h-24 w-32 
        bg-gradient-to-b ${colorVariants[color]}
        border-2 ${colorVariants[color].split(' ')[3]}
        rounded-lg
        text-white font-bold text-sm
        transition-all duration-300
        hover:scale-105 hover:shadow-lg ${colorVariants[color].split(' ')[2]}
        group
        ${className}
      `}
    >
      {/* Sliding strip effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="w-1 h-8 bg-white/60 mb-2 rounded-full" />
        <span className="transform rotate-0 text-center leading-tight">{children}</span>
        <div className="w-1 h-8 bg-white/60 mt-2 rounded-full" />
      </div>

      {/* Bottom sliding effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-200" />
    </button>
  );
};
