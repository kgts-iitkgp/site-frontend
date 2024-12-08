import { useEffect, useState, RefObject } from 'react';

function useOnScreen<T extends HTMLElement>(ref: RefObject<T>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default useOnScreen;
