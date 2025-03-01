import React from 'react'
import './index.css'

 const HeroSection= () => {
  return (
    <div className="card" style={{width: "40rem"}}>
  <div className="card-body ">
  <h1 className='card-heading'>Big Cats Week at Maasai Mara</h1>
 
  
    <p className="card-text">Overview - November is one of the Best times to visit Kenya, especially to visit its prime park, Maasai Mara. This is because the large migratory herds would have returned to Tanzania and now the Big cats have to venture long distances to hunt their prey. 

November is also the season of short rains. This makes the plains of Maasai Mara lush green. The skies are truly dramatic and colourful. The Sun rise and Sun sets during November at Mara is simply breath taking. 

November is also a time for holidaying and getting together with our families. And the icing on the cake is we have curated this itinerary for such an affordable costs without compromising on any of the services. This is commemorate our first year anniversary of opening up operations at Nairobi. 

Join us on this unforgettable journey of your life time. 
</p>
<button  className = "btn btn-primary"onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Discover More</button>
  </div>
</div>
  )
}

export default HeroSection