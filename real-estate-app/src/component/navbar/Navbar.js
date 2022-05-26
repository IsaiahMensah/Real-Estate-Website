import React, {useState} from 'react'
import'./Navbar.css'
// import React from 'react'
import bars from '../../assets/svgs/solid/bars.svg'
import house from '../../assets/svgs/solid/house-chimney.svg'




const Navbar = () => {

  return (
    <div className="navbar">
      <div className="container">
        
        <h1>
          <img className='image'src={house} width='40px' />
          <span>Real</span>Estate
        </h1>
        <button className="btn">Sign In</button>
        <ul className='nav-menu'>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Search</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
        <div className="hamburger"  >
          <img  src={bars} width='30px' /> 
         
      </div>
    </div>
    </div>
  );
}

export default Navbar