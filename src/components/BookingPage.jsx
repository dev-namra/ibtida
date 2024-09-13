import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Biryani from '../assets/mughlai-cuisine.png';

function BookingPage(props) {
  const [bookingStage, setBookingStage] = useState(false);

  if (bookingStage) {
    props.setBookingConfirmed(true);
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Your table is booked!</h1>
        <p className="text-xl">Thank you for choosing our restaurant.</p>
      </div>
    );
  }

  return (
    <section>
      <Parallax bgImage={Biryani} strength={300} className="h-96">
        <div className="flex items-center justify-center h-full pt-16 md:pt-32">
          <div className="flex flex-col items-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white font-fraunces">Reservations</h2>
          </div>
        </div>
      </Parallax>

      <div className="bg-white flex items-center justify-center py-8 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-orange-500 mb-4">Hosting a private dinner?</h2>
              <p className="text-gray-600">Experience Delhi's finest dining at Ibtida. Book your table now!</p>
            </div>
            <BookingForm 
              formSubmit={props.formSubmit} 
              setBookingStage={setBookingStage} 
              availableTimes={props.availableTimes}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingForm(props) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(props.availableTimes && props.availableTimes.length > 0 ? props.availableTimes[0] : '');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);
  

  function getDateObject(dateString) {
    const yyyymmdd = dateString.split("-");
    return new Date(parseInt(yyyymmdd[0]), parseInt(yyyymmdd[1]) - 1, parseInt(yyyymmdd[2]));
  }

  function isValidDate(dateString) {
    const dateObj = getDateObject(dateString);
    return dateObj > new Date();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!date || !occasion || !guests || !name || !phone || !email) return;
    setIsConfirming(true);
  }

  function handleConfirmation() {
    const reservationInfo = { date, time, guests, occasion, name, phone, email };
    props.formSubmit(reservationInfo);
    props.setBookingStage(true);
  }

  function renderDate(e) {
    if (!isValidDate(e.target.value)) {
      alert(`Current date and past dates are not valid. Please choose another date.`);
      return;
    }
    //const selectedDate = getDateObject(e.target.value);
    setDate(e.target.value);
  }




  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      {!isConfirming ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="res-date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input type="date" id="res-date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" value={date} onChange={renderDate} required />
          </div>
          <div>
            <label htmlFor="res-time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <select id="res-time" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" value={time} onChange={(e) => setTime(e.target.value)}>
                {props.availableTimes && props.availableTimes.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Party</label>
            <input type="number" id="guests" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">Occasion</label>
            <select id="occasion" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
              <option value="">Select an occasion</option>
              <option value="None">None</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">Reserve Table</button>
          </div>
        </form>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Confirm Your Reservation</h2>
          <p>Name: {name}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Guests: {guests}</p>
          <p>Occasion: {occasion}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <div className="mt-6">
            <button 
              onClick={handleConfirmation}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 mr-4"
            >
              Confirm Booking
            </button>
            <button 
              onClick={() => setIsConfirming(false)}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
            >
              Edit Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingPage;