import React from 'react'
import "../AboutUs/About.css"
import crown from "../PageAssets/Icon1.png"
import medal from "../PageAssets/Icon2.png"
import mask from "../PageAssets/Icon3.png"
import thunder from "../PageAssets/Icon4.png"
import bag from "../PageAssets/Icon5.png"
import book from "../PageAssets/Icon6.png"
import puzzle from "../PageAssets/Icon7.png"
import shine from "../PageAssets/Icon8.png"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const About = () => {
    const achieveArray=[
        {
            badge:crown,
            title: "Trusted by Thousands",
            para: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."
        },
        {
            badge:medal,
            title: "Award-Winning Courses",
            para: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."
        },
        {
            badge:mask,
            title: "Positive Student Feedback",
            para: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."
        },
        {
            badge:thunder,
            title: "Industry Partnerships",
            para: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"
        },
    ]

    const goalsArray=[
        {
            badge:bag,
            title: "Provide Practical Skills",
            para: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field."
        },
        {
            badge:book,
            title: "Foster Creative Problem-Solving",
            para: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."
        },
        {
            badge:puzzle,
            title: "Promote Collaboration and Community",
            para: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together."
        },
        {
            badge:shine,
            title: "Stay Ahead of the Curve",
            para: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."
        },
    ]
  return (
    <>
    <Navbar/>
    <div className="about-info">
        <div className="about-info-left">
          <h2>About Skillbridge</h2>
        </div>
        <div className="about-info-right">
          <p>Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
        </div>

    </div>
    <section className='achievements'>
            <div className="achieve-top">
                <h2>Achievements</h2>
                <p>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
            </div>
            <div className="about-card-container">
                {
                    achieveArray.map((item)=>{
                        return(
                            <>
                            <div className="about-card">
                                <div className="about-img">
                                    <img src={item.badge} alt="" />
                                </div>
                                <div className="about-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.para}</p>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
                

            </div>
    </section>

      <section className='goals'>
            <div className="goals-top">
                <h2>Our Goals</h2>
                <p>At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
                Through our carefully crafted courses, we aim to</p>
            </div>
            <div className="goals-card-container">
                {
                    goalsArray.map((item)=>{
                        return(
                            <>
                            <div className="goals-card">
                                <div className="goals-img">
                                    <img src={item.badge} alt="" />
                                </div>
                                <div className="goals-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.para}</p>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
                

            </div>
            <div className="together-div">
                <div className="together-left">
                    <h2>
                    <span>Together</span>, let's shape the future of digital innovation
                    </h2>
                    <p>Join us on this exciting learning journey and unlock your potential in design and development.</p>
                    </div>
                <div className="together-right">
                    <button>Join Now</button>
                </div>
            </div>
      </section>
    <Footer/>
    </>
  )
}

export default About