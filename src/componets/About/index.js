import Header from "../Header" 
import { motion } from 'framer-motion';
import "./index.css"
const About = () => (
    <>
      <Header />  
      <section className="about" id="about">
      <div className="about-content">
        {/* Left side: Text */}
        <div className="about-text">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            We are a leading construction company with over a decade of experience building
            commercial, residential, and infrastructure projects. Our goal is to bring quality,
            safety, and innovation to every build.
          </motion.p>

          <div className="about-grid">
            {[
              { title: '7+ Years', text: 'Industry Experience' },
              { title: '50+ Projects', text: 'Completed Successfully' },
              { title: '100+ Experts', text: 'Skilled Professionals' },
              { title: '24/7', text: 'Support & Service' }
            ].map((item, i) => (
              <motion.div
                className="about-box"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side: Image */}
        <motion.div
          className="about-image-wrapper"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Construction team"
            className="about-image"
          />
        </motion.div>
      </div>
    </section>
   
    </>
) 

export default About 