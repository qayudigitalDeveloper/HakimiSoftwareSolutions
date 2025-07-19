import './index.css';
import logo from './../../assets/logo.png';
import { useEffect, useRef, useState } from 'react';

const navContent = [
  { id: 1, text: 'Home', index: '#home' },
  { id: 2, text: 'About Us', index: '#aboutus' },
  { id: 3, text: 'Services', index: '#services' },
  { id: 4, text: 'Blog', index: '#blog' },
  { id: 5, text: 'Testimonials', index: '#testimolials' },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true); // scrolling up
      } else {
        setShowNavbar(false); // scrolling down
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`outer-cont ${showNavbar ? 'visible' : 'hidden'}`}>
      <img className='logo' onClick={scrollToTop} src={logo} alt='logo' />
      <div className='nav-sub-cont'>
        <ul className='ul-nav'>
          {navContent.map(each => (
            <li className='li-nav' key={each.id}>
              <a href={each.index}>
                <p className='nav-text underline-animate'>{each.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a href="#footer"><h1 className='big-text'>Contact Us</h1></a>
    </div>
  );
};

export default Navbar;
