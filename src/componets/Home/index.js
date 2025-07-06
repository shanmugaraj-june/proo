
import Header from '../Header';  
import About from "../About"; 
import Service from "../Service"; 
import Project from "../Project";  
import Contact from "../Contact";  

import './index.css' ;
import { Link } from 'react-scroll';
const Home = () => {
  return (
   <>
     <Header />
      <section className="home" id = "home">
      <div className="home-overlay">
        <div className="home-content">
          <h1 className="home-title">We Build Your Vision</h1>
          <p className="home-subtitle"> 
            At Vinayaga Construction, we turn your dream structures into lasting reality.
          </p>
          <div className="home-buttons">
            <Link to ="project" smooth={true} duration={500}>  <a  className="btn primary">Explore Projects</a></Link>
           <Link to = "contact" smooth={true} duration={500}> <a href="#contact" className="btn outline">Contact Us</a></Link>
          </div>
        </div>
      </div> 
    </section>   
    <About />
    <Service /> 
    <Project/> 
    <Contact /> 
    </>
  );
};

export default Home;
