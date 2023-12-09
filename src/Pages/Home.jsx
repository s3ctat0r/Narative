import React, { useState, useRef } from 'react';
import logo from '../Assets/Images/logo.png';
function Home() {
    const [circlePosition, setCirclePosition] = useState({ left: 0, top: 0 });
    const cursorRef = useRef(null);

    const handleMouseMove = (e) => {
        setCirclePosition({ left: e.nativeEvent.offsetX, top: e.nativeEvent.offsetY });
    };

    return (
        <div id="Home" onMouseMove={handleMouseMove}>
            <div className="cursor" ref={cursorRef} style={circlePosition}></div>
            <span id="back-moe" style={circlePosition}></span>
            {window.innerWidth <= 880 ? (
        <>
        <img src={logo} alt="Logo" />
        <div className="home-call">
        <a className="home-call-text" href="">
          Schedule a Call
        </a>
      </div>
        </>      ) : (
        ''
      )}
            <div className="heading_01">
                <div className="">Narative</div>
                <div className="">Media</div>
            </div>
            <div className="tagline">WE CREATE NARRATIVE THROUGH CONTENT</div>
            <div className="hexagon-section">
                {Array(15).fill().map((_, rowIndex) => (
                    <div key={rowIndex} className="row-o1">
                        {Array(20).fill().map((_, hexagonIndex) => (
                            <div key={hexagonIndex} className="body-hexagon"></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
