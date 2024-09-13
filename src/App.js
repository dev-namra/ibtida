import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Homepage from './components/home-page/Homepage';
import About from './components/About';
import Menu from './components/Menu';
import OrderOnline from './components/OrderOnline';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [userBookingInfo, setUserBookingInfo] = useState({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [availableTime] = useState(['17:00', '18:00', '19:00', '20:00', '21:00']);
 

  function submitForm(formData) {
    setUserBookingInfo(formData);
  }


  return (
    <div className='allComponents'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route
          path='/bookings'
          element={
            <BookingPage 
              formSubmit={submitForm} 
              userInfo={userBookingInfo}
              bookingConfirmed={bookingConfirmed}
              setBookingConfirmed={setBookingConfirmed}
              availableTimes={availableTime} 
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;