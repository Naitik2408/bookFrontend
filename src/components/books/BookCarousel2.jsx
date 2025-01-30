import { useRef, useEffect, useState } from 'react';

const BookCarousel = () => {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const books = [
    {
      id: 1,
      title: "Research on Incarnation",
      image: "/books/KAB1048.jpg",  // Removed 'public' from path
    },
    {
      id: 2,
      title: "Vedic Astrology Remedies",
      image: "/books/KAB1897.jpg",
    },
    {
      id: 3,
      title: "Kundali Vidya",
      image: "/books/KAB3411.jpg",
    },
    {
      id: 4,
      title: "Maha Vastu",
      image: "/books/KAB3412.jpg",
    },
    {
      id: 5,
      title: "Timing Events Without Dasha",
      image: "/books/KAB3416.jpeg",
    },
    {
      id: 6,
      title: "Blind Chart Analysis",
      image: "/books/KAB3418.jpg",
    },
    {
      id: 7,
      title: "Astrology Chakras & Remedies",
      image: "/books/KAB5246.jpg",
    }
  ];

  // Duplicate books for infinite scroll effect
  const extendedBooks = [...books, ...books, ...books];

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If near the end, scroll back to first set of books
        if (scrollLeft + clientWidth >= (scrollWidth - clientWidth)) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: 'auto'
          });
        } else {
          // Normal scroll
          scrollRef.current.scrollTo({
            left: scrollLeft + 580,
            behavior: 'smooth'
          });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Latest Books</h2>
        
        <div className="relative"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Books Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              '-ms-overflow-style': 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {extendedBooks.map((book, index) => (
              <div 
                key={`${book.id}-${index}`}
                className="flex-none w-48"
              >
                <div className="bg-white   shadow-md overflow-hidden transition-transform hover:scale-105">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-64 object-cover"
                  />
                   
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;
