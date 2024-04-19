import React from 'react';
import './Frame499.css';
import FrameImg from '../../assets/image 1.png';

const Frame499 = () => {
  return (
    <section className="Frame499" id="Frame499">
         <div className="container">
      <div className="Frame499_container">
        <div alignSelf="flex-start">
          <h2 className="section_title">Digital Strategy Consulting</h2>
          <p className="Frame499_description">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <button className='button'>LEARN MORE</button>
        </div>
        <div className="img-align">
        <img src={FrameImg} alt="" className="Frame_img" />
        </div>
      </div>
      </div>
    </section>
  );
}

export default Frame499;
