import './App.css';
import Navbar from './components/Navbar'
import TopCont from './components/TopCont';
import Honest from './components/Honest';
import CRM from './components/Services';
import WhyHakimi from './components/WhyHakimi';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <Navbar />
      <TopCont />
      <Honest />
      <CRM />
      <WhyHakimi />
      <Testimonials />
      <Footer />
      <a
      href="https://wa.me/971566601500" 
      target="_blank"
      rel="noopener noreferrer"
      className='whatsicon'
    >
      <FaWhatsapp />
    </a>
    </div>
  );
}

export default App;
