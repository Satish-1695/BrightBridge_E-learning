import React from 'react'
import "../Signup/Signup.css"
import user2 from "../PageAssets/User2.png";
import left from "../PageAssets/left_btn.png";
import right from "../PageAssets/right_btn.png";
import orcontent from "../PageAssets/Container.png";
import google from "../PageAssets/google.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const Signup = () => {
  return (
    <>
    <Navbar/>
     <section className="signup-section">
        <div className="signup-left">
          <div className="student-testimonial">
            <h2>Students Testimonials</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="signup-card-container">
            <div className="user-review">
              <p>
              The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!
              </p>
            </div>
            <hr />
            <div className="student-div">
              <div className="student-details">
                <img src={user2} alt="" />
                <h5>Jason M</h5>
              </div>
              <div className="student-story">
                <button>Read Full Story</button>
              </div>
            </div>
          </div>
          <div className="btns-div">
            <img src={left} alt="" />
            <img src={right} alt="" />
          </div>
        </div>

        <div className="signup-right">
          <div className="signup-content">
            <h2>Sign Up</h2>
            <p>Create an account to unlock exclusive features.</p>
          </div>
          <form>
          <div className="form-group">
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Enter your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter your Password" />
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <p>I agree with Terms of Use and Privacy Policy</p>
            </div>
            <button>Sign Up</button>
            <img src={orcontent} alt="" />
            <div className="google">
              <img src={google} id="or" alt="" />
              <h6>Login with google</h6>
            </div>
            <div className="account-info">
            <h6p>Already have an account? Login</h6p>
            </div>
            
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Signup