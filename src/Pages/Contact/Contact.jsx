import React from "react";
import "../Contact/Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import email from "../PageAssets/Message.png"
import call from "../PageAssets/Calling.png"
import location from "../PageAssets/Location.png"
import social from "../PageAssets/Social Profiles.png"

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-info">
        <div className="contact-info-left">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-info-right">
          <p>
            Welcome to SkillBridge's Pricing Plan page, where we offer two
            comprehensive options to cater to your needs: Free and Pro. We
            believe in providing flexible and affordable pricing options for our
            services. Whether you're an individual looking to enhance your
            skills or a business seeking professional development solutions, we
            have a plan that suits you. Explore our pricing options below and
            choose the one that best fits your requirements.
          </p>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-left">
          <form>
            <div className="form1">
              <div className="form-div">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Enter Your First Name" />
              </div>
              <div className="form-div">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Enter Your Last Name" />
              </div>
            </div>
            <div className="form1">
              <div className="form-div">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <div className="form-div">
                <label htmlFor="">Phone Number</label>
                <input type="number" placeholder="Enter Phone Number" />
              </div>
            </div>
            <div className="form-div">
                <label htmlFor="">Subject</label>
                <input type="text" placeholder="Enter Your Subject" />
              </div>
          </form>
          <div className="msg-div">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message here...."></textarea>
          </div>
          <div className="send-msg-div">
            <button>Send Your Message</button>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-right-child">
            <img src={email} alt="" />
            <p>support@skillbridge.com</p>
          </div>
          <div className="contact-right-child">
            <img src={call} alt="" />
            <p>+91 00000 00000</p>
          </div>
          <div className="contact-right-child">
            <img src={location} alt="" />
            <p>Some Where in the World</p>
          </div>
          <div className="contact-right-child">
            <img src={social} alt="" />
            <p>Social Profiles</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
