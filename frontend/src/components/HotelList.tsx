import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Hotel {
  _id: string;
  name: string;
  description: string;
  price: number;
  rooms: number;
  amenities: string[];
}

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hotels');
        setHotels(response.data);
      } catch (err) {
        setError('Error fetching hotels. Please try again later.');
        console.error('Error fetching hotels:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <p>Loading hotels...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (hotels.length === 0) {
    return <p>No hotels available at the moment.</p>;
  }

  return (
    <div>
      <h1>Available Hotels</h1>
      {hotels.map((hotel) => (
        <div key={hotel._id}>
          <h2>{hotel.name}</h2>
          <p>{hotel.description}</p>
          <p>Price: ${hotel.price}/night</p>
          <p>Available Rooms: {hotel.rooms}</p>
          <p>Amenities: {hotel.amenities.join(', ')}</p>
          <Link to={`/book/${hotel._id}`}>Book Now</Link>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
