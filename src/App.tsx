import './App.scss';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import About from './components/About';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      
      <Navbar />

      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<DetailsPage />} />
      
      </Routes>


    </div>
  );
}

export default App;
