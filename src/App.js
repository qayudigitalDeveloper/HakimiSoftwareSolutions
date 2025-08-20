import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function FormPage() {
  return (
    <iframe
      src="/Form.html"
      title="Zoho Form"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}

function App() {
  
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<FormPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
