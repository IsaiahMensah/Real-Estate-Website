import React from 'react'
import magnifying from '../../assets/svgs/solid/magnifying-glass.svg'
import './Hero.css'
const Hero = () => {
  return (

    <div className='hero'>
      <div className='content'>
        <h1>Find the perfect place</h1>
        <p className='search-text'>
          Search the largest selection of luxury high-rise
          apartements,multi-family homes,and luxury homes
        </p>
        <form className='search'>
          <div>
            <input type='text' placeholder='Enter keyword...' />
          </div>
          <div className='radio'>
            <input type='radio' checked />
            <label>Buy</label>
            <input type='radio'  />
            <label>Rent</label>
            <button type='submit'><img src={magnifying} width='30px'/> </button>
          </div>
        </form>

        
        
      </div>
    </div>
  );
}

export default Hero