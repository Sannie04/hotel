import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BookingForm from './components/BookingForm'; // Assuming you want to include this
import HotelList from './components/HotelList'; // Your hotel listing component

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/book/:hotelId" element={<BookingForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
