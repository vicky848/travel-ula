import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const itineraryData = [
  {
    day: "Day 1 - Nov 14th",
    description: "Arrival in Nairobi, drive to Maasai Mara, first game drive.",
    details: `Our drivers would pick up from the JKIA airport at 7AM. You would board our 4*4 Landcruisers to embark on your journey to Maasai Mara. The road journey takes about 5 to 6 hours, but you would be amazed by the landscape en route. 
    You would first see the Nairobi National Park on your left side. On a lucky day, you may even spot a White Rhino grazing near the fence. 
    After reaching Maasai Mara by noon, check in, have lunch, and proceed to your first game drive across the great plains of Maasai Mara!
    Enjoy the Topi plains, watch lions from the ‘Topi Pride,’ and relax around the campfire in the evening.`
  },
  {
    day: "Day 2 - Nov 15th",
    description: "Morning and afternoon game drives, bush breakfast experience.",
    details: `Wake up early, enjoy a hot beverage, and embark on your morning game drive. Witness the breathtaking sunrise at Maasai Mara, an unforgettable experience.
    Enjoy a unique bush breakfast, observing grazing wildlife. 
    Mid-mornings are perfect for spotting cheetahs and newborn Topis. 
    Return to camp for a hot lunch and a short nap. The afternoon game drive begins at 3 PM, where we attempt to locate a leopard. 
    End your day with storytelling around the campfire.`
  },
  {
    day: "Day 3 - Nov 16th",
    description: "Full-day game drive, exploring Sand River and Maasai culture.",
    details: `Today is a full-day game drive. After an early start, drive to the Sand River, the natural border between Maasai Mara and Tanzania.
    Witness the migratory paths of wildlife that have existed for millions of years. Enjoy packed breakfast and lunch on your journey.
    On your way back, you may encounter a pride of lions or even a rhino if you're lucky! 
    Spend your final evening reminiscing about your adventure around the campfire.`
  },
  {
    day: "Day 4 - Nov 17th",
    description: "Return journey to Nairobi and departure.",
    details: `Enjoy a relaxed morning and a hearty breakfast while reflecting on your journey.
    Board the designated Landcruisers for the return trip to Nairobi, where you will be dropped off at JKIA airport. 
    End of services.`
  }
];

export const Itinerary = () => {
  return (
    <div className="itinerary-main-container">
      

      {/* Animated Container */}
      <motion.div
        className="itinerary-container"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <h2 className="itinerary-heading">Itinerary</h2>
        {itineraryData.map((item, index) => (
          <motion.div
            key={index}
            className="itinerary-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{item.day}</h3>
            <p><strong>{item.description}</strong></p>
            <p className="itinerary-text">{item.details}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Itinerary;
