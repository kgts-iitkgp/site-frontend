import React, { useRef } from 'react';
import { StaticImageData } from 'next/image';

interface CarouselProps {
  items: StaticImageData[]; // Accepts StaticImageData array
}

const Carousel: React.FC<CarouselProps> = ({ items = [] }) => { // Default to empty array if items is undefined
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 shadow-md hover:bg-gray-600"
        aria-label="Scroll Left"
      >
        ◀
      </button>

      {/* Carousel Content */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 h-48 bg-gray-200 rounded-md"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Use Next.js Image for Optimized Loading */}
            <img
              src={item.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 shadow-md hover:bg-gray-600"
        aria-label="Scroll Right"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
