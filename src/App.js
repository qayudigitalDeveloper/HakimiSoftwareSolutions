import './App.css';
import Navbar from './components/Navbar'
import TopCont from './components/TopCont';
import Honest from './components/Honest';
import CRM from './components/CRM';
import Vocco from './components/Vocco';
import WhyHakimi from './components/WhyHakimi';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <TopCont />
      <Honest />
      <CRM />
      <Vocco />
      <WhyHakimi />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
