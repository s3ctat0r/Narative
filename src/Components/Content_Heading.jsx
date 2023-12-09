import React, { useEffect } from 'react';

const ContentHeading = ({ text, styles, index }) => {
  const containerId = `slowScrollDiv-${index}`;

  const generateRow = (rowIndex) => (
    <div key={rowIndex} className="row_1">
      {Array.from({ length: 6 }).map((_, index) => (
        <span
          key={index}
          className={(index + rowIndex) % 2 === 0 ? 'bold-text' : 'bordered-text'}
        >
          {text}
        </span>
      ))}
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const slowScrollDiv = document.getElementById(containerId);

      // Adjust the speed factor based on your preference
      const slowScrollSpeed = 0.2; // Change this value to control the slow-scrolling speed

      // Apply the translation to create the parallax effect
      slowScrollDiv.style.transform = `translateY(${scrollValue * slowScrollSpeed}px)`;
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [containerId]);

  return (
    <div id={containerId} className={`${styles} content-heading`}>
      {Array.from({ length: 8 }).map((_, index) => generateRow(index))}
    </div>
  );
};

export default ContentHeading;
