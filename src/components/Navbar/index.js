import './index.css';
import logo from './../../assets/logo1.png';
import { useEffect, useRef, useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const navContent = [
  { id: 1, text: 'Home', index: '#home' },
  { id: 2, text: 'About Us', index: '#aboutus' },
  { id: 3, text: 'Services', index: '#services' },
  { id: 4, text: 'Blog', index: '#blog' },
  { id: 5, text: 'Testimonials', index: '#testimolials' },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(window.scrollY === 0);

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
    <div >
      {atTop && (
        <div className='nav-up-cont'>
          <div style={{display:"flex", alignItems: 'center', width: "20%", justifyContent:"space-between"}}>
            <p><FaPhoneAlt /> +971-566-601-500 </p>
            <p><GoMail /> info@qayudigital.com</p>
          </div>
          <div style={{display:"flex", alignItems: 'center', width: "5%", justifyContent:"space-between"}}>
            <GoMail style={{fontSize: "23px"}}/>
            <FaLinkedinIn style={{fontSize: "23px"}} />
            <IoLogoInstagram  style={{fontSize: "23px"}}/>
          </div>
        </div>
      )}
      <div className={`outer-cont ${showNavbar ? 'visible' : 'hidden'} ${atTop === true && "applymargintop"}`} >
        <div className='in-cont-nav'>
          <div className='img-cont-nav'>
            <img className='logo' onClick={scrollToTop} src={logo} alt='logo' />
            <p className='text-img'>
              ZOHO Experts
            </p>
          </div>
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

      </div>

    </div>
  );
};

export default Navbar;
