import React from 'react'
import'./Footer.css'
import facebook from '../../assets/svgs/brands/facebook.svg'
import twitter from '../../assets/svgs/brands/twitter.svg'
import whatsapp from '../../assets/svgs/brands/whatsapp.svg'
import instagram from '../../assets/svgs/brands/instagram.svg'


const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <img src={facebook}  className='icon' width="30px" alt="" />
        <img src={twitter}   className='icon' width="30px" alt="" />
        <img src={whatsapp}  className='icon' width="30px" alt="" />
        <img src={instagram} className='icon'  width="30px" alt="" />
      </div>
      <div className="container">
        <div className="col">
          <h3>About</h3>
          <p>Details</p>
          <p>Planing</p>
          <p>About us</p>
        </div>
        <div className="col">
          <h3>Company</h3>
          <p>Details</p>
          <p>Planing</p>
          <p>About us</p>
        </div>
        <div className="col">
          <h3>Legal</h3>
          <p>Details</p>
          <p>Planing</p>
          <p>About us</p>
        </div>
        <div className="col">
          <h3>Information</h3>
          <p>Details</p>
          <p>Planing</p>
          <p>About us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer