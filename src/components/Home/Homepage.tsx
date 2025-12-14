"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Hero from '../Hero/Hero';
import Menu from '../Menu/Menu';
import Gallary from '../Gallary/Gallary';
import Review from '../Reviews/Review';
import BookMyTable from '../BookMyTable/BookMyTable';
import Footer from '../Footer/Footer';

const Homepage = () => {
    useEffect(() => {
        const initAOS = async () => {
            await import('aos');
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: 'top-bottom',
            })
        }
        initAOS();
    }, []);
  return (
    <div>
          <Hero />
          <Menu />
          <Gallary />
          <Review />
          <BookMyTable />
          <Footer />
    </div>
  )
}

export default Homepage