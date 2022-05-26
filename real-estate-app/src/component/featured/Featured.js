import React from 'react'
import './Featured.css'
import MAN1 from '../../assets/daniel-barnes-RKdLlTyjm5g-unsplash.jpg'
import kitchen from '../../assets/naomi-hebert-MP0bgaS_d1c-unsplash.jpg'
import livingroom from '../../assets/r-architecture-wot0Q5sg91E-unsplash.jpg'
import bathrooms from '../../assets/steven-ungermann-Aac7IlKnYX8-unsplash.jpg'
import bedrooms from "../../assets/mark-champs-Id2IIl1jOB0-unsplash.jpg";


import MAN from "../../assets/vita-vilcina-KtOid0FLjqU-unsplash.jpg";
import MAN2 from '../../assets/r-architecture-TRCJ-87Yoh0-unsplash.jpg'
import MAN3 from "../../assets/spacejoy-RqO6kwm4tZY-unsplash.jpg";
import MAN4 from "../../assets/r-architecture-HQCW1gTMjek-unsplash.jpg";
import MAN5 from "../../assets/spacejoy-nEtpvJjnPVo-unsplash.jpg";

const featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings</h1>
      <p className="featured-text">
        Selected lisings by city, state, & zip based on views{" "}
      </p>
      <div className="container">
        <img
          className="span-3 image-grid-row-2"
          src={MAN1}
          width="100%"
          height="100%"
          alt=""
        />
        <img src={kitchen} width='100%' height='100%' alt="" />
        <img src={livingroom} width='100%' height='100%' alt="" />
        <img src={bedrooms} width='100%' height='100%' alt="" />
        <img src={bathrooms} width='100%' height='100%' alt="" />

        <div className="span-3 img-details">
          <div className="top">
            <h2>No. 63 Adjei Tsuru Street, East Legon </h2>
            <p>House for sale</p>
            <p className="price">$2,667,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>7</p>
              </div>
            </div>

            <div>
              <div className="info">
                <p className="bold">squarefeet:</p>
                <p>4,138</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$14.654</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            
            Search the largest selection of luxury high-rise
            apartements,multi-family homes,and luxury homes
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>

      {/* second section */}
      <div className="container">
        <img
          className="span-3 image-grid-row-2"
          src={MAN}
          width="100%"
          height="100%"
          alt=""
        />

        <img src={MAN2} width='100%' height='100%' alt="" />
        <img src={MAN3} width='100%' height='100%' alt=''/>
        <img src={MAN4} width='100%' height='100%' alt="" />
        <img src={MAN5} width='100%' height='100%' alt="" />

        <div className="span-3 img-details">
          <div className="top">
            <h2>No. 63 Adjei Tsuru Street, East Legon </h2>
            <p>House for sale</p>
            <p className="price">$2,667,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>7</p>
              </div>
            </div>

            <div>
              <div className="info">
                <p className="bold">squarefeet:</p>
                <p>4,138</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$14.654</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            Search the largest selection of luxury high-rise
            apartements,multi-family homes,and luxury homes
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>
    </div>
  );
}

export default featured