import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CrosshairProps {
  color?: string;
  containerRef?: React.RefObject<HTMLElement>;
}

export const Crosshair: React.FC<CrosshairProps> = ({ 
  color = 'white', 
  containerRef = null 
}) => {
  const horizontalLineRef = useRef<HTMLDivElement>(null);
  const verticalLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef?.current || document.body;
    const horizontalLine = horizontalLineRef.current;
    const verticalLine = verticalLineRef.current;

    if (!horizontalLine || !verticalLine) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(horizontalLine, {
        duration: 0.1,
        left: 0,
        top: y,
        width: '100%',
      });

      gsap.to(verticalLine, {
        duration: 0.1,
        left: x,
        top: 0,
        height: '100%',
      });
    };

    const handleMouseEnter = () => {
      gsap.to([horizontalLine, verticalLine], {
        duration: 0.2,
        opacity: 1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([horizontalLine, verticalLine], {
        duration: 0.2,
        opacity: 0,
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef, color]);

  const lineStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: color,
    pointerEvents: 'none',
    zIndex: 9999,
    opacity: 0,
  };

  const horizontalLineStyle: React.CSSProperties = {
    ...lineStyle,
    height: '1px',
  };

  const verticalLineStyle: React.CSSProperties = {
    ...lineStyle,
    width: '1px',
  };

  return (
    <>
      <div ref={horizontalLineRef} style={horizontalLineStyle} />
      <div ref={verticalLineRef} style={verticalLineStyle} />
    </>
  );
};

export default Crosshair;