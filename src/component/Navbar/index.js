import {useState} from "react";
import { Link } from "react-router-dom";
import { BsBackspaceReverseFill } from "react-icons/bs";
import "./index.css";
import BookingPage from "../BookingPage";

const Navbar = () => {
  const [showBooking, setShowBooking] = useState(false)
  const handelClick = () => {
    setShowBooking(true)
  };
  const handleBack = () => {
    setShowBooking(false)
  };
  return (
    <div className="navbar-container">
    {!showBooking  ? (
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <h2 className="navbar-brand" >Travel Ula</h2>
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/itinerary">Itinerary</Link>
              </li>
              <li>
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link className="nav-link" to="/booking">Limited-Time Offer</Link>
              </li>
              <li>
                <Link className="nav-link" to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
            <div>
              <button className="btn btn-warning" onClick={handelClick}>Booking Now</button>
            </div>
          </div>
        </div>
      </nav>
      ):(
         <div className="booking-page-container">
         <button className="button-back  mb-3" onClick={handleBack}>
         <BsBackspaceReverseFill />
         </button>
         <BookingPage />
       </div>

      )
      

    }
    </div>
  );
};

export default Navbar;
