import { useState, useEffect } from 'react';

/**
 * Custom hook to track mouse position for interactive UI elements
 * @returns Current mouse X and Y coordinates, normalized values, and whether mouse is in viewport
 */
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [normalizedPosition, setNormalizedPosition] = useState({ x: 0, y: 0 });
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Get viewport dimensions
      const { innerWidth, innerHeight } = window;
      
      // Update actual position
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate normalized position (-1 to 1 range)
      const normalizedX = (e.clientX / innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / innerHeight) * 2 - 1;
      setNormalizedPosition({ x: normalizedX, y: normalizedY });
      
      // Check if mouse is in viewport
      setIsInViewport(true);
    };

    const handleMouseLeave = () => {
      setIsInViewport(false);
    };

    // Add event listeners with passive option for better performance
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { mousePosition, normalizedPosition, isInViewport };
};

export default useMousePosition; 