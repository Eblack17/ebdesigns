import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position for navbar transformations
 * Returns the current scroll position, a binary scrolled state, and a smooth progress value
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    // Define the scroll range for smooth transition
    const scrollStart = 0;
    const scrollEnd = 100;
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Binary state for backward compatibility
      setIsScrolled(position > 20);
      
      // Calculate smooth progress between 0 and 1
      if (position <= scrollStart) {
        setScrollProgress(0);
      } else if (position >= scrollEnd) {
        setScrollProgress(1);
      } else {
        // Smooth transition between start and end points
        const progress = (position - scrollStart) / (scrollEnd - scrollStart);
        setScrollProgress(progress);
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return { scrollPosition, isScrolled, scrollProgress };
}; 