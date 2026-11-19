import React, { useRef, useState } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(6, 182, 212, 0.15)',
  enableTilt = true,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (enableTilt) {
      // Calculate normalized -1 to 1 coordinates
      const normX = (x / rect.width) * 2 - 1;
      const normY = (y / rect.height) * 2 - 1;
      // Subtle tilt max 5 degrees
      setTilt({
        x: -normY * 5,
        y: normX * 5,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enableTilt
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : undefined,
        transition: isHovered
          ? 'transform 0.1s ease-out'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`group relative bezel-outer overflow-hidden ${className}`}
      {...props}
    >
      {/* 21st.dev Radial Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      {/* Inner Machined Core */}
      <div className="relative bezel-inner h-full w-full p-6 z-10 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
