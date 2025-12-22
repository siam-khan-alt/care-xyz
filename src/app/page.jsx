"use client";
import About from '@/componants/Home/About';
import Hero from '@/componants/Home/Hero';
import ServicesHome from '@/componants/Home/ServicesHome';
import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen container mx-auto px-4'>
     <Hero/>
     <About/>
     <ServicesHome/>
    </div>
  );
};

export default Home;