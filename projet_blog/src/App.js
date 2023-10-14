import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import About from "./pages/About"


function App() {
  return   (
    

    <Router>
    <Logo />
    <About />

    <Navigation />
      <Routes>
        <Route path="/" element= { <Home />} />

        <Route path="/News" element= { <News />} />
        
        <Route path="*" element= { <NotFound />} />
        <Route path="/About" element= { <About />} />
      </Routes>
      

    </Router>

  );
}

export default App;
