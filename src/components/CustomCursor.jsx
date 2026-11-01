import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 350 });

  const ringX = useSpring(0, { damping: 18, stiffness: 180 });
  const ringY = useSpring(0, { damping: 18, stiffness: 180 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor-hover]') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Halo Ring - Sky Blue */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#0EA5E9' : 'rgba(14, 165, 233, 0.45)',
          backgroundColor: isHovered ? 'rgba(14, 165, 233, 0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-sky-500/50"
      />

      {/* Inner Dot - Sky Blue */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 1.4 : isHovered ? 0.5 : 1,
          backgroundColor: '#0EA5E9',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 450 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full shadow-sm"
      />
    </div>
  );
};
