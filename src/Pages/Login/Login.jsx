import React from "react";
import "../Login/Login.css";
import user1 from "../PageAssets/User1.png";
import left from "../PageAssets/left_btn.png";
import right from "../PageAssets/right_btn.png";
import orcontent from "../PageAssets/Container.png";
import google from "../PageAssets/google.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="login-section">
        <div className="login-left">
          <div className="student-testimonial">
            <h2>Students Testimonials</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="login-card-container">
            <div className="user-review">
              <p>
                The web design course provided a solid foundation for me. The
                instructors were knowledgeable and the
                interactive learning environment was engaging. I highly
                recommend it!
              </p>
            </div>
            <hr />
            <div className="student-div">
              <div className="student-details">
                <img src={user1} alt="" />
                <h5>Sarah L</h5>
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

        <div className="login-right">
          <div className="login-content">
            <h2>Login</h2>
            <p>Welcome back! Please log in to access your account.</p>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="forgot">
              <p>Forgot Password?</p>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <button>Login</button>
            <img src={orcontent} alt="" />
            <div className="google">
              <img src={google} id="or" alt="" />
              <h6>Login with google</h6>
            </div>
            <div className="account-info">
            <h6p>Don't have an account? Signup</h6p>
            </div>
            
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
