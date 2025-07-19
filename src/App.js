import './App.css';
import Navbar from './components/Navbar'
import TopCont from './components/TopCont';
import Honest from './components/Honest';
import CRM from './components/Services';
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
      <WhyHakimi />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
