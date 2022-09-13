import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Section from './Components/Section';
// import Heading from './Components/Heading';
// import Questions from './Components/Questions';
// import Footer from './Components/Footer';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Help from './Components/Help';
import Home from './Components/Home';
import Footer from './Components/Footer';



function App() {
  return (
    <Router >
      {/* <Heading />
      <Section />
      <Questions />
      <Footer/> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Privacy' element={<Privacy />} />
        <Route exact path='/Terms' element={<Terms />} />
        <Route exact path='/Help' element={<Help />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
