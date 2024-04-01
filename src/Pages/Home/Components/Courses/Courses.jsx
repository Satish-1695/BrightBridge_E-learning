import React from "react";
import "../Courses/Courses.css";
import web from "../Assets2/Web_img.jpg";
import UI from "../Assets2/UI_img.png";
import mobile_app from "../Assets2/mobile_app_img.jpg";
import graphic from "../Assets2/Graphic_img.png";
import frontend from "../Assets2/Front_end_img.png";
import javascript from "../Assets2/Java_img.png";
const Courses = () => {
  const myArray=[
    {
      image:web,
      weeks:"4 Weeks",
      stage: "Beginner",
      author: "By John Smith",
      course:"Web Design Fundamentals",
      details:"Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      get_btn:"Get it Now"
    },
    {
      image:UI,
      weeks:"6 Weeks",
      stage: "Intermediate",
      author: "By Emily Johnson",
      course:"UI/UX Design",
      details:"Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
      get_btn:"Get it Now"
    },
    {
      image:mobile_app,
      weeks:"8 Weeks",
      stage: "Intermediate",
      author: "By David Brown",
      course:"Mobile App Development",
      details:"Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
      get_btn:"Get it Now"
    },
    {
      image:graphic,
      weeks:"10 Weeks",
      stage: "Beginner",
      author: "By Sarah Thompson",
      course:"Graphic Design for Beginners",
      details:"Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
      get_btn:"Get it Now"
    },
    {
      image:frontend,
      weeks:"10 Weeks",
      stage: "Intermediate",
      author: "By Michael Adams",
      course:"Front-end Web Development",
      details:"Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
      get_btn:"Get it Now"
    },
    {
      image:javascript,
      weeks:"6 Weeks",
      stage: "Advance",
      author: "By Jennifer Wilson",
      course:"Advance JavaScript",
      details:"Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
      get_btn:"Get it Now"
    },
  ]
  return (
      <section className="course-section">
        <div className="course-top">
          <div className="course-sub-top">
            <h2>Our Courses</h2>
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

        <div className="course-bottom">
          {
          myArray.map((data)=>{
            return(
              <div className="card-container">
                  <div className="image-div">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="course-btns">
                    <div className="sub-btns">
                      <button>{data.weeks}</button>
                      <button>{data.stage}</button>
                    </div>
                    <h4>{data.author}</h4>
                  </div>
                  <div className="description">
                    <h3>{data.course}</h3>
                    <p>{data.details}</p>
                  </div>
                  <div className="bottom-btn">
                    <button>{data.get_btn}</button>
                  </div>
              </div>
            )
          })
          }
        </div>
      </section>
  );
};

export default Courses;
