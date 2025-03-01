import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const Pricing = () => {
  return (
    <motion.div
      className="pricing-container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <section id="pricing">
        <h2 className="price-heading">Pricing & Offers</h2>
        <ul className="price-list">
          <li>Adult: <strong>USD 1582</strong></li>
          <li>Child (4-9 years): <strong>USD 1400</strong></li>
          <li>
            Special Offer (Before Aug 14th): Adult <strong>USD 1322</strong>,
            Child <strong>USD 1127</strong>
          </li>
        </ul>
      </section>
    </motion.div>
  );
};

export default Pricing;