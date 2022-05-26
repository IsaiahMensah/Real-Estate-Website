import React from 'react'
import'./Best.css'
import APT1 from '../../assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg'
import APT2 from "../../assets/douglas-sheppard-9rYfG8sWRVo-unsplash copy.jpg";
import APT3 from "../../assets/r-architecture-wot0Q5sg91E-unsplash.jpg";

const Best = () => {
  return (
    <div className="best">
      <h1>
        <span>Find Best Rated Properties</span>
      </h1>
      <div>
        <p>
          <span className="bold">All</span>
        </p>
        <p>Comercial</p>
        <p>Residential</p>
        <p>Agricultral</p>
      </div>
      <div className='container'>
          <img src={APT1}  alt=''/>
          <img src={APT2}  alt=''/> 
          <img src={APT3}  alt=''/> 
      </div>
      <button className='btn'>View All</button>
    </div>
  );
}

export default Best