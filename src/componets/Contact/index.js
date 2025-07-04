import React from 'react'; 
import Header from '../Header'; 
import Footer from '../Footer';
import './index.css';

const Contact = () => {
  return (
    <>
     <Header /> 
     <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear about your construction project. Reach out to us with any questions or inquiries.
          </p>
          <div className="info-block">
            <h4>Address</h4>
            <p> karapaga Vinayagar Kovil Street Ekkatttuthagal chennai  <br />Building City, 19/13<br />India</p>
          </div>
          <div className="info-block">
            <h4>Phone</h4>
            <p>+91 9092642503</p>
          </div>
          <div className="info-block">
            <h4>Email</h4>
            <p>vinayagaconstruction2024@gmail.com</p>
          </div>
        </div>

        <form className="contact-form">
          <h3>Send Us a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div> 
    </section>  
    <Footer />
    </>
  );
};

export default Contact;
