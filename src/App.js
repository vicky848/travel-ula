import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Itinerary from "./component/Itinerary";
import Pricing from "./component/Pricing";
import Terms from "./component/Terms";

import NotFound from "./component/NotFound";
import BookingTrigger from "./component/BookingTriggers";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route path="/itinerary" element = {<Itinerary/>} />
     <Route path="/pricing" element = {<Pricing/>}/>
     <Route path="/terms" element = {<Terms/>}/>
     <Route path="/booking" element = {<BookingTrigger/>} />
     <Route path="*" element={<NotFound/>} />
      
      
    
    </Routes>
    </Router>
  );
}

export default App;

