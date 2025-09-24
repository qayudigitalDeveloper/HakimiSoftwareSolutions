import './../../App.css';
import Navbar from './../Navbar';
import TopCont from './../TopCont';
import Honest from './../Honest';
import CRM from './../Services';
import WhyHakimi from './../WhyHakimi';
import Testimonials from './../Testimonials';
import Footer from './../Footer';
import ContactUs from '../ContactUs';


import { FaWhatsapp } from "react-icons/fa";

const Home = () =>{
  return (
    <div className="app">
      <Navbar />
      <TopCont />
      <Honest />
      <CRM />
      <WhyHakimi />
      <Testimonials />
      <ContactUs />
      <Footer />
      <a
        href="https://wa.me/971566601500"
        target="_blank"
        rel="noopener noreferrer"
        className='whatsicon'
        aria-label="Whatsapp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default Home;
