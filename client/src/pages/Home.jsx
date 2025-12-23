import React ,{ useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import ProductSection from '../components/ProductSection.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {

    const navigate = useNavigate();
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
           navigate('/login');
        }
    }, [navigate]);
 
 return (
  <>
  

    <div className="flex flex-wrap gap-2">
      <HeroSection />
      <ProductSection />
    </div>

    
  </>
);

}

export default Home