"use client";

import React from 'react';
import Link from 'next/link';
import './globals.css';
const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>
      <p>
        This is the homepage of our multi-page website. Navigate to learn more about us or get in touch.
      </p>
      <div>
        <Link href="/about">
          <button>About Us</button>
        </Link>
        <Link href="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
