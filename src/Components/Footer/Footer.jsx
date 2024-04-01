import React from 'react'
import "../Footer/Footer.css"
import logo from "../Assets/nav_logo.png";
import email from "../Assets/email.png"
import call from "../Assets/call.png"
import fb from "../Assets/Facebook0.png"
import linkedin from "../Assets/Linkedin0.png"
import twitter from "../Assets/Twitter0.png"
const Footer = () => {
  
  const socialApps=[fb,linkedin,twitter]

  return (
    <>
     <footer>
      <div className="container">
        <div className="left">
          <div className='left-logo'>
          <img src={logo} alt="" />
          </div>
        <div className='child1'>
            <img src={email} alt="" />
            <p>hello@skillbridge.com</p>
        </div>
        <div className='child1'>
            <img src={call} alt="" />
            <p>+91 91813 23 2309</p>
        </div>
        <div className='child1'>
            <img src={email} alt="" />
            <p>Somewhere in the World</p>
        </div>
        </div>
        <div className="right">
          <div className="child2">
            <h4>Home</h4>
            <p>Benefits</p>
            <p>Our Courses</p>
            <p>Our Testimonials</p>
            <p>Our FAQ</p>
          </div>
          <div className="child2">
          <h4>About Us</h4>
            <p>Company</p>
            <p>Achievements</p>
            <p>Our Goals</p>
          </div>

          <div className="child2">
          
            <h4>Social Profiles</h4>
           <div className="child3">
           {
              socialApps.map((data)=>{
                return(
                  <>
                  <img src={data} alt="" />
                  </>
                )
              })
            } 
           </div>
            
          </div>

        </div>
        </div>
        <div className="copyright">
        <p>© 2023 Skillbridge. All rights reserved.</p>
        </div>
      </footer>
      
    </>
   
  )
}

export default Footer