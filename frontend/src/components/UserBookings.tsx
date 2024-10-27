import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Booking {
  _id: string;
  hotel: {
    _id: string;
    name: string;
  };
  checkIn: string;
  checkOut: string;
  guests: number;
}

const UserBookings: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const userId = 'user123'; // Replace with actual user authentication

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/bookings/user/${userId}`);
        setBookings(response.data);
      } catch (err) {
        setError('Error fetching your bookings. Please try again later.');
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userId]);

  if (loading) {
    return <p>Loading your bookings...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (bookings.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.map((booking) => (
        <div key={booking._id}>
          <h2>{booking.hotel.name}</h2>
          <p>Check-in: {new Date(booking.checkIn).toLocaleDateString()}</p>
          <p>Check-out: {new Date(booking.checkOut).toLocaleDateString()}</p>
          <p>Guests: {booking.guests}</p>
        </div>
      ))}
    </div>
  );
};

export default UserBookings;
