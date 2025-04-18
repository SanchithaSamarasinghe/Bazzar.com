import React, {useState,useEffect} from 'react';
import '../home/assets/HomePage.css'; 
import about_image from '../Images/background1.jpg'; 
import farmer from '../Images/farmer.jpg';
import seller from '../Images/seller.jpg';
import officer from '../Images/officer.jpg';
import image2 from '../Images/Slider2.jpeg';
import image3 from '../Images/Slider3.jpg';
import image4 from '../Images/Slider4.jpeg';
import image5 from '../Images/Slider5.jpeg';
import { useNavigate } from 'react-router-dom'; 
import { IoLocationSharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png';

export default function HomePage() {
  const [loading, setLoading] = useState(false); 
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [ image2, image3, image4, image5];

  const navigate = useNavigate(); 
  const handleLoginClick = () => {
    navigate('/login');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const navigateToSection = (event, sectionId) => {
    event.preventDefault();
    setLoading(true); 
    setTimeout(() => {
      window.location.href = `#${sectionId}`; 
      setLoading(false); 
    }, 800); 
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="homepage-container">
      <div className={`background-slide background-slide-${currentSlide}`}>
        <header className="header">
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo-image" />
            <h1 className="logo-text">BUZZAR.COM</h1>
          </div>
          <nav className="nav-links">
            <a href="#about-us" className="nav-link" onClick={(e) => navigateToSection(e, 'about-us')}>Who we are</a>
            <a href="#farmer" className="nav-link" onClick={(e) => navigateToSection(e, 'farmer')}>What we do for you</a>
            <a href="#executive-officer" className="nav-link" onClick={(e) => navigateToSection(e, 'executive-officer')}>Are you an Executive officer</a>
            <a href="#contact-us" className="nav-link" onClick={(e) => navigateToSection(e, 'contact-us')}>Contact Us</a>
          </nav>
        </header>

        <main className="main-content">
          <div className="main-text-container">
            <h2 className="main-title">Empowering Agriculture</h2>
            <p className="main-description">A Hub for Buyers , Sellers, </p>
            <div className="button-group">
              <button className="btn" onClick={handleRegisterClick}>Register</button>
              <button className="btn" onClick={handleLoginClick}>Login</button>
            </div>
          </div>
        </main>
      </div>

      <div className="slide-controls">
        <button className="slide-btn" onClick={handlePrevSlide}>❮</button>
        <button className="slide-btn" onClick={handleNextSlide}>❯</button>
      </div>

      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}

      <footer className="footer-text">
        <p>&copy; 2025 Buzzar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
