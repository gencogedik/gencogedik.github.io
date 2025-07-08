
import { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const GlassButton = ({ children, onClick, className = "" }: GlassButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`glass-button px-8 py-4 text-white font-semibold tracking-wider ${className}`}
    >
      {children}
    </button>
  );
};
