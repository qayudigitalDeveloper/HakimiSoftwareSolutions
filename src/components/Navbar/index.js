import './index.css';
import logo from './../../assets/logo1.png';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const navContent = [
  { id: 1, text: 'Home', index: '#home' },
  { id: 2, text: 'About Us', index: '#aboutus' },
  { id: 3, text: 'Services', index: '#services' },
  /*{ id: 4, text: 'Blog', index: '#blog' },*/
  { id: 5, text: 'Testimonials', index: '#testimolials' },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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

  const handlemail = () => {
    const subject = encodeURIComponent("Query from Website");
    const body = encodeURIComponent("Hi Hakimi Software solutions,\n\nI am interested in your services.");
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=murtaza@hakimisoftwaresolutions.com&su=${subject}&body=${body}`,
      '_blank'// Opens in a new tab
    );
  }


  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        {atTop && (
          <div className='nav-up-cont'>
            <div style={{ display: "flex", alignItems: 'center', width: "auto", justifyContent: "space-between" }}>
              <p className="mailbutton"><FaPhoneAlt className='contacticons' /> +971-566-601-500 </p>
              <button onClick={handlemail}
                className="mailbutton">
                <GoMail className='contacticon' />
                murtaza@hakimisoftwaresolutions.com
              </button>

            </div>
            <div style={{ display: "flex", alignItems: 'center', width: "auto", justifyContent: "space-between" }}>
              <a><GoMail className='contacticons' onClick={handlemail} /></a>
              <a style={{ textDecoration: "none", margin: "0px" }} href="https://www.linkedin.com/company/hakimisoftwaresolutions/posts/?feedView=all" target='_blank' rel="noopener noreferrer">
                <FaLinkedinIn className='contacticons' />
              </a>
              <a href="https://www.instagram.com/hakimisoftwaresolutions" target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram className='contacticons' />
              </a>
            </div>
          </div>
        )}
        <div className={`outer-cont visible ${atTop === true && "applymargintop"}`} >
          <div className='in-cont-nav'>
            <div className='ham-berger-cont'>
              <div className='img-cont-nav'>
                <img className='logo' onClick={scrollToTop} src={logo} alt='logo' />
                <p className='text-img'>
                  ZOHO Experts
                </p>
              </div>
              <FaBars className="bars" onClick={toggleSidebar} />
            </div>
            <ul className='ul-nav nav-sub-cont'>
              {navContent.map(each => (
                <li className='li-nav' key={each.id}>
                  <a href={each.index}>
                    <p className='nav-text underline-animate'>{each.text}</p>
                  </a>
                </li>
              ))}
            </ul>
            <a href="https://murtazakanchwala-hakimisoftwaresolutions.zohobookings.com/#/meeting" target="_blank"><h1 className='big-text'>Contact Us</h1></a>
          </div>

        </div>


      </div>
      <div className={`side-tab ${isOpen ? 'open' : ''}`}>
        <ul>
          {navContent.map((each) => (
            <li key={each.id} onClick={toggleSidebar}>
              <a href={each.index}>{each.text}</a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
