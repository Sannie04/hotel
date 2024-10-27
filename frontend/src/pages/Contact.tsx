// src/pages/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us!</p>
      <h2>Our Address</h2>
      <p>123 Hotel Lane, City, Country</p>
      
      <h2>Phone</h2>
      <p>+1 (234) 567-8900</p>

      <h2>Email</h2>
      <p>info@hotelbooking.com</p>

      <h2>Contact Form</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
