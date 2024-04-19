import React from 'react'
import './Footer.css'
import FooterImg from '../../assets/Logo.png'



const Footer = () => {
  return (
    <div className='main-footer'>
    <div className="container">
        <div className="row">
            {/* Column 01 */}
            <div className='col'>
                <img src={FooterImg} alt="" />
            </div>
            {/* Column 02 */}
            <div className='col'>
                <p className='textColumn1'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
            </div>

            </div>
            <div className="row">
            {/* Column 03 */}
            <div className="col">
                <h3>Our Technologies</h3>
                <ul className="list-unstyled">
                    <li>ReactJS</li>
                    <li>Gatsby</li>
                    <li>NextJS</li>
                    <li>NodeJs</li>
                </ul>
            </div>
            </div>
        <div className="row">
            {/* Column 04 */}
            <div className="col">
                <h3>Our Services</h3>
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
