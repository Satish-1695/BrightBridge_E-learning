import React from "react";
import arrow from "../Assets2/right_up_arrow.png";
import "../Benefits/Benefits.css";
const Benefits = () => {
  return (
      <section className="benefits">
        <div className="benefits-top">
          <div className="benefits-sub-top-div">
            <h2>Benefits</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="view-btn">
            <button>View All</button>
          </div>
        </div>

        <div className="benefits-bottom">
          <div className="benefits-sub-bottom-div">
            <div className="benefits-card-container">
              <div className="title">
                <h1>01</h1>
              </div>
              <div className="description">
                <h3>Flexible Learning Schedule</h3>
                <p>
                  Fit your coursework around your existing commitments and
                  obligations.
                </p>
              </div>
              <div className="arrow-icon">
                <div className="div-icon">
                   <img src={arrow} alt="" />
                </div>
               
              </div>
            </div>

            <div className="benefits-card-container">
              <div className="title">
                <h1>02</h1>
              </div>
              <div className="description">
                <h3>Expert Instruction</h3>
                <p>
                  Learn from industry experts who have hands-on experience in
                  design and development.
                </p>
              </div>
              <div className="arrow-icon">
                <div className="div-icon">
                   <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="benefits-card-container">
              <div className="title">
                <h1>03</h1>
              </div>
              <div className="description">
                <h3>Diverse Course Offerings</h3>
                <p>
                  Explore a wide range of design and development courses
                  covering various topics.
                </p>
              </div>
              <div className="arrow-icon">
                <div className="div-icon">
                   <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="benefits-sub-bottom-div">
            <div className="benefits-card-container">
              <div className="title">
                <h1>04</h1>
              </div>
              <div className="description">
                <h3>Updated Curriculum</h3>
                <p>
                Access courses with up-to-date content reflecting the latest trends and industry practices.
                </p>
              </div>
              <div className="arrow-icon">
                <div className="div-icon">
                   <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="benefits-card-container">
              <div className="title">
                <h1>05</h1>
              </div>
              <div className="description">
                <h3>Practical Projects and Assignments</h3>
                <p>
                Develop a portfolio showcasing your skills and abilities to potential employers.
                </p>
              </div>
              <div className="arrow-icon">
                <div className="div-icon">
                   <img src={arrow} alt="" />
                </div> 
              </div>
            </div>
            <div className="benefits-card-container">
              <div className="title">
                <h1>06</h1>
              </div>
              <div className="description">
                <h3>Interactive Learning Environment</h3>
                <p>
                Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.
                </p>
              </div>
              <div className="arrow-icon">
                <div className="div-icon">
                   <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Benefits;
