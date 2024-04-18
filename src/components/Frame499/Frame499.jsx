import React from 'react';
import './Frame499.css';
import FrameImg from '../../assets/image 1.png';

const Frame499 = () => {
  return (
    <section className="Frame499 section" id="Frame499">
      <div className="Frame499_container">
        <div className="Frame499_data">
          <h2 className="section_title">Web & Mobile App Development</h2>
          <p className="Frame499_description">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <button className='button'>LEARN MORE</button>
        </div>
        <img src={FrameImg} alt="" className="Frame499_img" />
      </div>
    </section>
  );
}

export default Frame499;
