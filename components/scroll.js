import { useState, useEffect } from 'react';

const ScrollEffect = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 overscroll-contain">
      <img src="avatar.jpg" alt="Emoji Avatar" className="w-12 h-12" />
      <div
        className="rope"
        style={{ transform: `translateY(${scrollPosition * 0.1}px)` }} // Adjust the multiplier for speed
      ></div>
      <style jsx>{`
        .rope {
          height: 12rem; /* Adjust height as needed */
          width: 0.5rem; /* Adjust width as needed */
          background-color: gray;
          border-radius: 0.25rem; /* Rounded edges */
          transition: transform 0.2s ease; /* Smooth transition */
        }
      `}</style>
    </div>
  );
};

export default ScrollEffect;
