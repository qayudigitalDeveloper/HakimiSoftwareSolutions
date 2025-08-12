import './App.css';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
