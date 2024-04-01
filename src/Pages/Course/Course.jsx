import React from 'react'
import "../Course/Course.css"
import web1 from "../PageAssets/Web_design1.png"
import web2 from "../PageAssets/Web_design2.png"
import web3 from "../PageAssets/Web_design3.png"

import UI_UX1 from "../PageAssets/UI_UX1.png"
import UI_UX2 from "../PageAssets/UI_UX2.png"
import UI_UX3 from "../PageAssets/UI_UX3.png"

import mobile1 from "../PageAssets/Mobile_App1.png"
import mobile2 from "../PageAssets/Mobile_App2.png"
import mobile3 from "../PageAssets/Mobile_App3.png"

import graphic1 from "../PageAssets/Graphic_design1.png"
import graphic2 from "../PageAssets/Graphic_design2.png"
import graphic3 from "../PageAssets/Graphic_design3.png"

import front1 from "../PageAssets/Front_End1.png"
import front2 from "../PageAssets/Front_End2.png"
import front3 from "../PageAssets/Front_End3.png"

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Course = () => {

  const web_design=[web1,web2,web3]
  const curriculum_box=[
    {
      number: "01",
      topic: "Introduction to HTML"
    },
    {
      number: "02",
      topic: "Styling with CSS"
    },
    {
      number: "03",
      topic: "Introduction to Responsive Design"
    },
    {
      number: "04",
      topic: "Design Principles for Web"
    },
    {
      number: "05",
      topic: "Building a Basic Website"
    },
  ]

  const UI_Array= [UI_UX1,UI_UX2,UI_UX3]
  const curriculum_box2=[
    {
      number: "01",
      topic: "Introduction to UI/UX Design"
    },
    {
      number: "02",
      topic: "User Research and Personas"
    },
    {
      number: "03",
      topic: "Wireframing and Prototyping"
    },
    {
      number: "04",
      topic: "Visual Design and Branding"
    },
    {
      number: "05",
      topic: "Usability Testing and Iteration"
    },
  ]

  const mobile_app=[mobile1,mobile2,mobile3]
  const curriculum_box3=[
    {
      number: "01",
      topic: "Introduction to Mobile App Development"
    },
    {
      number: "02",
      topic: "Fundamentals of Swift Programming (iOS)"
    },
    {
      number: "03",
      topic: "Fundamentals of Kotlin Programming (Android)"
    },
    {
      number: "04",
      topic: "Building User Interfaces"
    },
    {
      number: "05",
      topic: "App Deployment and Testing"
    },
  ]

  const graphic_design=[graphic1,graphic2,graphic3]
  const curriculum_box4=[
    {
      number: "01",
      topic: "Introduction to Graphic Design"
    },
    {
      number: "02",
      topic: "Typography and Color Theory"
    },
    {
      number: "03",
      topic: "Layout Design and Composition"
    },
    {
      number: "04",
      topic: "Image Editing and Manipulation"
    },
    {
      number: "05",
      topic: "Designing for Print and Digital Media"
    },
  ]

  const front_end=[front1,front2,front3]
  const curriculum_box5=[
    {
      number: "01",
      topic: "HTML Fundamentals"
    },
    {
      number: "02",
      topic: "CSS Styling and Layouts"
    },
    {
      number: "03",
      topic: "JavaScript Basics"
    },
    {
      number: "04",
      topic: "Building Responsive Websites"
    },
    {
      number: "05",
      topic: "Introduction to Bootstrap and React"
    },
  ]


  return (
    <>
    <Navbar/>
      <div className="online-course-info">
        <div className="course-info-left">
          <h2>Online Courses on Design and Development</h2>
        </div>
        <div className="course-info-right">
          <p>Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
        </div>

      </div>

      <section className='online-course-section'>
          <div className="course-design">
          <div className="online-top">
          <div className="online-top-left">
            <h3>Web Design Fundamentals</h3>
            <p>
            Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
            </p>
          </div>
          <div className="online-top-right">
            <button>View Course</button>
          </div>
        </div>

        <div className="course-images">
            {
              web_design.map((item)=>{
                return(
                  <>
                  <img src={item} alt="" />
                  </>
                )
              })
            }
        </div>

        <div className="time-level-author">
          <div className="time-level">
            <button>4 Weeks</button>
            <button>Beginner</button>
          </div>
          <h5>By John Smith</h5>
        </div>

        <div className="curriculum">
          <h3>Curriculum</h3>
          <div className="curriculum-bottom">
          {
            curriculum_box.map((data)=>{
              return(
                <>
                  <div className="box">
                    <h1>{data.number}</h1>
                    <p>{data.topic}</p>
                  </div>
                </>
              )
            })
          }
          </div>
        </div>
          </div>

          <div className="course-design">
          <div className="online-top">
          <div className="online-top-left">
            <h3>UI/UX Design</h3>
            <p>
            Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.
            </p>
          </div>
          <div className="online-top-right">
            <button>View Course</button>
          </div>
        </div>

        <div className="course-images">
            {
              UI_Array.map((item)=>{
                return(
                  <>
                  <img src={item} alt="" />
                  </>
                )
              })
            }
        </div>

        <div className="time-level-author">
          <div className="time-level">
            <button>6 Weeks</button>
            <button>Intermediate</button>
          </div>
          <h5>By Emily Johnson</h5>
        </div>

        <div className="curriculum">
          <h3>Curriculum</h3>
          <div className="curriculum-bottom">
          {
            curriculum_box2.map((data)=>{
              return(
                <>
                  <div className="box">
                    <h1>{data.number}</h1>
                    <p>{data.topic}</p>
                  </div>
                </>
              )
            })
          }
          </div>
        </div>
          </div>

          <div className="course-design">
          <div className="online-top">
          <div className="online-top-left">
            <h3>Mobile App Development</h3>
            <p>
            Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.
            </p>
          </div>
          <div className="online-top-right">
            <button>View Course</button>
          </div>
        </div>

        <div className="course-images">
            {
              mobile_app.map((item)=>{
                return(
                  <>
                  <img src={item} alt="" />
                  </>
                )
              })
            }
        </div>

        <div className="time-level-author">
          <div className="time-level">
            <button>8 Weeks</button>
            <button>Intermediate</button>
          </div>
          <h5>By David Brown</h5>
        </div>

        <div className="curriculum">
          <h3>Curriculum</h3>
          <div className="curriculum-bottom">
          {
            curriculum_box3.map((data)=>{
              return(
                <>
                  <div className="box">
                    <h1>{data.number}</h1>
                    <p>{data.topic}</p>
                  </div>
                </>
              )
            })
          }
          </div>
        </div>
          </div>

          <div className="course-design">
          <div className="online-top">
          <div className="online-top-left">
            <h3>Graphic Design for Beginners</h3>
            <p>
            Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.
            </p>
          </div>
          <div className="online-top-right">
            <button>View Course</button>
          </div>
        </div>

        <div className="course-images">
            {
              graphic_design.map((item)=>{
                return(
                  <>
                  <img src={item} alt="" />
                  </>
                )
              })
            }
        </div>

        <div className="time-level-author">
          <div className="time-level">
            <button>10 Weeks</button>
            <button>Beginner</button>
          </div>
          <h5>By Sarah Thompson</h5>
        </div>

        <div className="curriculum">
          <h3>Curriculum</h3>
          <div className="curriculum-bottom">
          {
            curriculum_box4.map((data)=>{
              return(
                <>
                  <div className="box">
                    <h1>{data.number}</h1>
                    <p>{data.topic}</p>
                  </div>
                </>
              )
            })
          }
          </div>
        </div>
          </div>

          <div className="course-design">
          <div className="online-top">
          <div className="online-top-left">
            <h3>Front-End Web Development</h3>
            <p>
            Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.
            </p>
          </div>
          <div className="online-top-right">
            <button>View Course</button>
          </div>
        </div>

        <div className="course-images">
            {
              front_end.map((item)=>{
                return(
                  <>
                  <img src={item} alt="" />
                  </>
                )
              })
            }
        </div>

        <div className="time-level-author">
          <div className="time-level">
            <button>10 Weeks</button>
            <button>Intermediate</button>
          </div>
          <h5>By Michael Adams</h5>
        </div>

        <div className="curriculum">
          <h3>Curriculum</h3>
          <div className="curriculum-bottom">
          {
            curriculum_box5.map((data)=>{
              return(
                <>
                  <div className="box">
                    <h1>{data.number}</h1>
                    <p>{data.topic}</p>
                  </div>
                </>
              )
            })
          }
          </div>
        </div>
          </div>
      </section>
      <Footer/>
    </>
  )
}

export default Course