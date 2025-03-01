import React from 'react'
import './index.css'

 const BookingPage = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        adults: 1,
        children: 0,
        date: '',
       
    });
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

  return (

  <div className='booking-container'>
     <form className='  form-contaier row g-3' style={{width:"18rem"}} onSubmit={handleSubmit}>
        <div className ="mb-3">
  <label for="exampleFormControlphone" className ="form-label">Name</label>
  <input type='text'
  className ="form-control"
  id="exampleFormControlInput1"
  name='name'
  value={formData.name}
  onChange={handleChange}
  placeholder='Name'
  />
</div>
     <div className ="mb-3">
  <label for="exampleFormControlInput1" className ="form-label">Email address</label>
  <input type="email" className ="form-control" id="exampleFormControlInput1"
  name='email'
  value={formData.email}
  onChange={handleChange}
  placeholder='email@example.com'/>
   
</div>
<div className ="mb-3">
  <label for="exampleFormControlphone" className ="form-label">Phone</label>
  <input type='text' 
  className ="form-control"
  id="exampleFormControlInput1"
  name='phone'
  value={formData.phone}
  onChange={handleChange}

  
  placeholder='Phone Number' /> 
</div>
<div className ="mb-3">
<select className ="form-select" 
  id="exampleFormControlSelect1"
  name='gender'
  value={formData.gender}
  onChange={handleChange}

aria-label="Default select example">
  <option selected>Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  
</select>
</div>

        <div className ="mb-3">
        <label className="form-label">Adults</label>
          <select 
            className="form-control" 
            name="adults" 
            value={formData.adults} 
            onChange={handleChange}
          >
            {[...Array(10).keys()].map(i => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>

         <div className='mb-3'>
         <label className="form-label">Children</label>
          <select 
            className="form-control" 
            name="children" 
            value={formData.children} 
            onChange={handleChange}
          >
            {[...Array(10).keys()].map(i => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>

         </div>
         <div className='mb-3'>
            
         <label className="form-label">Booking Date</label>
          <input 
            type="date" 
            className="form-control" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required
          />

         </div>
         <div className='button-container'>
         <button type='submit' className=' button-book btn btn-warning'>Book Now</button>
         </div>
        </div>
       






    </form>
  </div>
      
   
       
   
  )

}
export default BookingPage;