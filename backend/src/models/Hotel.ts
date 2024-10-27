import mongoose, { Schema, Document } from 'mongoose';

interface Room {
  type: string;
  price: number;
  capacity: number;
  availableRooms: number;
  amenities: string[];
  image: string;
}

interface Hotel extends Document {
  name: string;
  description: string;
  location: {
    address: string;
    city: string;
  };
  facilities: string[];
  rating: number;
  images: string[];
  contact: {
    email: string;
    phone: string;
  };
  rooms: Room[];
}

const RoomSchema: Schema = new Schema({
  type: { type: String, required: true },
  price: { type: Number, required: true },
  capacity: { type: Number, required: true },
  availableRooms: { type: Number, required: true },
  amenities: { type: [String], required: true },
  image: { type: String, required: true }
});

const HotelSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true }
  },
  facilities: { type: [String], required: true },
  rating: { type: Number, required: true },
  images: { type: [String], required: true },
  contact: {
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  rooms: { type: [RoomSchema], required: true }
});

const HotelModel = mongoose.model<Hotel>('Hotel', HotelSchema);
export default HotelModel;