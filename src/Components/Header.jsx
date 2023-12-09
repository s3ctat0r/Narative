import React, { useState, useEffect } from 'react';
import logo from '../Assets/Images/logo.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'Portfolio', 'Services', 'Testimonials'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setActiveLink(section);
            break; // Exit the loop once we find the active section
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {window.innerWidth <= 880 ? (
        <MobileHeader activeLink={activeLink} />
      ) : (
        <DesktopHeader activeLink={activeLink} />
      )}
    </div>
  );
};

const DesktopHeader = ({ activeLink }) => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <nav className="header-margin-left">
        <NavLink active={activeLink === 'Home'} href="#">
          HOME
        </NavLink>
        <NavLink active={activeLink === 'Portfolio'} href="#Portfolio">
          PORTFOLIO
        </NavLink>
        <NavLink active={activeLink === 'Testimonials'} href="#Testimonials">
          TESTIMONIALS
        </NavLink>
        <NavLink active={activeLink === 'Services'} href="#Services">
          SERVICES
        </NavLink>
      </nav>
      <div className="header-call">
        <a className="header-call-text" href="">
          Schedule a Call
        </a>
      </div>
    </div>
  );
};

const MobileHeader = ({ activeLink }) => {
  // Implement your mobile header structure here
  // You can use a burger menu icon, for example, for the mobile menu
  // You can also use a modal or slide-in menu for better user experience
  return (
    <nav className="mobile-header">
      <NavLink active={activeLink === 'Home'} href="#">
        HOME
      </NavLink>
      <NavLink active={activeLink === 'Portfolio'} href="#Portfolio">
        PORTFOLIO
      </NavLink>
      <NavLink active={activeLink === 'Testimonials'} href="#Testimonials">
        TESTIMONIALS
      </NavLink>
      <NavLink active={activeLink === 'Services'} href="#Services">
        SERVICES
      </NavLink>
    </nav>
  );
};

const NavLink = ({ active, href, children }) => {
  return (
    <a className={`header-text ${active ? 'active' : ''}`} href={href}>
      {children}
    </a>
  );
};

export default Header;
