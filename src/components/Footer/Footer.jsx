import React from 'react'
import './Footer.css'
import FooterImg from '../../assets/Logo.png'


const Footer = () => {
  return (
    <div className='main-footer'>
    <div className="container">
        <div className="row">
     
            <div className='col'>
                       <img src={FooterImg} alt="" />
                <p className='textColumn1'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
            </div>

            </div>
            <div className="row">

            <div className="col01">
                <p className='heading'>Our Technologies</p>
                <ul className="list-unstyled">
                    <li>ReactJS</li>
                    <li>Gatsby</li>
                    <li>NextJS</li>
                    <li>NodeJs</li>
                </ul>
            </div>
            </div>
        <div className="row">

            <div className="col01">
            <p className='heading'> Our Services</p>
                <ul className="list-unstyled">
                    <li>Social media Marketing</li>
                    <li>Web & Mobile App Development</li>
                    <li>Data & Analytics</li>
                </ul>
            </div>
        </div>
    </div>
</div>

  )
}

export default Footer
