import React from 'react'
import "../Hero/Hero.css"
import thunder from "../Assets2/thunder1.png";
import zapier from "../Assets2/1.Zapier.png"
import spotify from "../Assets2/2.Spotify_logo.png"
import zoom from "../Assets2/3.Zoom.png"
import amazon from "../Assets2/4.Amazon.png"
import adobe from "../Assets2/5.Adobe.png"
import notion from "../Assets2/6.Notion.png"
import netflix from "../Assets2/7.Netflix_logo.png"
import hero_image from "../Assets2/Hero_image.png"
const Hero = () => {

  const images=[zapier,spotify,zoom,amazon,adobe,notion,netflix]
  return (
    <section className='hero-section'>
      <div className="top">
        <div className="top-heading">
            <img src={thunder} alt="" />
            <h1><span>Unlock</span> Your Creative Potential</h1>
        </div>
        <div className="sub-div">
        <h3>with Online Design and Development Courses.</h3>
        <p>Learn from Industry Experts and Enhance Your Skills.</p>
        </div>
          <div className="top-buttons">
            <button>Explore Courses</button>
            <button id="view_prie">View Pricing</button>
          </div>
      </div>
      
    <div className="icons-section">
      <div className="icon">
          {
            images.map((value)=>{
              return(
                <>
                <img src={value} alt="" />
                </>
              )
            })
          }
      </div>
    </div>
          <div className="video">
            <img src={hero_image}></img>
          </div>
    </section>
  )
}

export default Hero