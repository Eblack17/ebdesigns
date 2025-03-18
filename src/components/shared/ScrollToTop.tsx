import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component scrolls the window to the top whenever
 * the route path changes. This ensures users always start at
 * the top of the page when navigating.
 * 
 * The small delay ensures compatibility with Framer Motion
 * transitions - scrolling after the new page has started to render.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout to ensure the scroll happens after any routing animations begin
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    // Cleanup timeout
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // This component doesn't render anything
  return null;
};

export default ScrollToTop; 