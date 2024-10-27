import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookingForm: React.FC = () => {
  const { hotelId } = useParams<{ hotelId: string }>();
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    user: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name === 'guests' ? parseInt(e.target.value) : e.target.value;
    setBooking({ ...booking, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hotelId) {
      alert('Hotel ID is missing.');
      return;
    }
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/bookings', {
        ...booking,
        hotel: hotelId,
      });
      alert('Booking successful!');
      navigate('/bookings');
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Error creating booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Hotel</h2>
      <input
        type="text"
        name="user"
        placeholder="Your Name"
        value={booking.user}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="checkIn"
        value={booking.checkIn}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="checkOut"
        value={booking.checkOut}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="guests"
        value={booking.guests}
        onChange={handleChange}
        min="1"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Booking...' : 'Book Now'}
      </button>
    </form>
  );
};

export default BookingForm;
