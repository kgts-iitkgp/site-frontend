import { useEffect, useRef } from 'react';

const DotBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawDots(window.innerWidth / 2, window.innerHeight / 2); // Initial draw
    };

    const drawDots = (x: number, y: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isMobile = window.innerWidth <= 768;
      const spacing = isMobile ? 25 : 35;
      const dotRadius = isMobile ? 1 : 1.5;
      
      for (let i = 0; i < canvas.width; i += spacing) {
        for (let j = 0; j < canvas.height; j += spacing) {
          const dx = i - x;
          const dy = j - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxRadius = dotRadius + 1;
          const radius = Math.max(dotRadius, maxRadius - dist / 100);
          ctx.beginPath();
          ctx.arc(i, j, radius, 0, Math.PI * 2);
          ctx.fillStyle = '#00BFFF';
          ctx.fill();
        }
      }
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const y = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      drawDots(x, y);
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('resize', setCanvasSize);

    setCanvasSize(); // Set initial size

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen opacity-100 -z-10 pointer-events-auto" // Changed to auto
    />
  );
};

export default DotBackground;
