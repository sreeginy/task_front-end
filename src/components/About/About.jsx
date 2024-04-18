import React from 'react'
import './About.css';
import AboutImg from '../../assets/image 2.png'


const About = () => {
    return (
      <section className="about section" id="about">
        <div className="about_container">
          <img src={AboutImg} alt="" className="about_img" />
          <div className="about_data">
            <h2 className="section_title">Web & Mobile App Development</h2>
            <p className="about_description">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
            <button className='button'>LEARN MORE</button>
          </div>
        </div>
      </section>
    );
  };
  

export default About
