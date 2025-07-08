
import { useEffect, useState } from 'react';

export const MouseTracker = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="mouse-glow"
      style={{
        left: mousePos.x - 10,
        top: mousePos.y - 10,
      }}
    />
  );
};
