import React from 'react';

import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';

import './Home.css';

// This view is a demo to create a simple personal presentation

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
