import { useState } from "react";
import './index.css'
import HeroSection from '../HeroSection'
import Itinerary from '../Itinerary'
import Pricing from '../Pricing'
import Terms from '../Terms'
import Footer from '../Footer'
import ExplorePage from "../../ExplorePage";


 const Home = () => {
const [showExplore, setShowExplore] = useState(false)

 const  handleClickExplore = () => {
   setShowExplore(true)
 }
  return (
    <>
    <div id="carouselExampleSlidesOnly" className ="carousel slide" data-bs-ride="carousel">
      <div className='herosection-container'>
        <HeroSection/>
      </div>
  <div className ="carousel-inner">
    <div className ="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2016/12/05/11/39/zebras-1883654_1280.jpg" className ="d-block w-100 h-80" alt="home-img1"/>
    </div>
    <div className ="carousel-item">
      <img src="https://images.unsplash.com/photo-1554990772-0bea55d510d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className ="d-block w-100 h-80" alt="home-img2"/>
    </div>
    <div className ="carousel-item">
      <img src="https://images.pexels.com/photos/6157191/pexels-photo-6157191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className ="d-block w-100 h-80" alt="home-img3"/>
    </div>
  </div>

 


  </div>
  <h2 className='sub-heading'>Experience the Majesty of Maasai Mara</h2>
  {
    (!showExplore) ? (
      <div className='second-background-container'>
   
 <h5 className=' breathtaking-heading fade-slide'>
      Witness the breathtaking <b>sunsets</b> over the vast golden plains, spot the <b>Big Five</b> in their natural habitat, 
      and embark on thrilling <b>safari adventures</b> in the heart of Kenya.
    </h5>
    <ul className='wild-unorder-list'>
      <li>Track majestic lions on the hunt</li>
      <li> Watch herds of elephants roam freely</li>
      <li>Spot elusive leopards resting on acacia trees</li>
      <li>Enjoy guided safari rides through the savanna</li>
      <li>Capture once-in-a-lifetime moments with wildlife photography</li>
    </ul>
    
    <button className=" explore btn btn-warning"
    onClick={handleClickExplore}
    >Explore More</button>
  
  
    <Itinerary/>
    <Pricing/>
    <Terms/>
    <Footer/>
   
    </div>): (
      <ExplorePage/>
    )

  }
   
</>
    
  )
}

export default Home