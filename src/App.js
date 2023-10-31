import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated imports
// import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ShowInterest from './components/ShowInterest';

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter */}
      <div>
        <Header />
        <Routes> {/* Use Routes */}
          <Route path="/" element={<Home />} /> {/* Use element prop */}
          <Route path="/about" element={<About />} />
          <Route path="/show-interest" element={<ShowInterest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
