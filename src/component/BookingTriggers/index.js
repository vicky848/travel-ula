import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import './index.css'

const BookingTrigger = () => {
    const [timeLeft, setTimeLeft] = useState(30);
  
    useEffect(() => {
        const timer = setInterval(() => {
          if (timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
          } else {
            clearInterval(timer);
          }
        }, 1000);
        return () => clearInterval(timer);
        // eslint-disable-next-line
      }, []);
    
    
  return (
    <div class="card" style={{width: "28rem", height:"20rem"}}>
   <motion.div
      className="pricing-container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
 
  <section className="booking-offer">
      <h2>Limited-Time Offer</h2>
      <p>Book before August 14th to avail the best price!</p>
      <p><strong>Time Left: {timeLeft} days</strong></p>
      <button className = "btn btn-primary" onClick={() => alert("Booking feature coming soon!")}>
        Secure Your Spot Now!
      </button>
    </section>
    </motion.div>
</div>
    
  )
}







export default BookingTrigger
