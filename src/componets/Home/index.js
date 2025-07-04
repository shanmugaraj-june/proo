import React from 'react'; 
import {Link}  from "react-router-dom"
import './index.css';
import Header from '../Header'; 
const Home = () => {
  return (
   <>
     <Header />
      <section className="home">
      <div className="home-overlay">
        <div className="home-content">
          <h1 className="home-title">We Build Your Vision</h1>
          <p className="home-subtitle">
            At Vinayaga Construction, we turn your dream structures into lasting reality.
          </p>
          <div className="home-buttons">
            <Link to  = "/project" className = "Link"> <a className="btn primary">Explore Projects</a></Link>
            <Link to  = "/contact"  className = "Link">  <a href="#contact" className="btn outline">Contact Us</a></Link>
          </div>
        </div>
      </div>
    </section>  
   </>
  );
};

export default Home;
