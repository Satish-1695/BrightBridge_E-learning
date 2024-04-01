import React from 'react'
import "../Testimonials/Testimonial.css"
import user1 from "../Assets2/User1.png"
import user2 from "../Assets2/User2.png"
import user3 from "../Assets2/User3.png"
import user4 from "../Assets2/User4.png"
const Testimonial = () => {

  const myTest=[
    {
      review:"The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      user_img:user1,
      user_name:"Sarah L",
      read:"Read Full Story"
    },
    {
      review:"The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      user_img:user2,
      user_name:"Jason M",
      read:"Read Full Story"
    },
    {
      review:"The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      user_img:user3,
      user_name:"Emily R",
      read:"Read Full Story"
    },
    {
      review:"I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      user_img:user4,
      user_name:"Michael K",
      read:"Read Full Story"
    },
    {
      review:"The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      user_img:user1,
      user_name:"Sarah L",
      read:"Read Full Story"
    },
    {
      review:"The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      user_img:user2,
      user_name:"Jason M",
      read:"Read Full Story"
    }
  ]
  return (
  
    <section className='testimonials'>
        <div className="test-top">
          <div className="test-sub-top">
            <h2>Our Testimonials</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="test-view-btn">
            <button>View All</button>
          </div>
          </div>

        <div className="test-bottom">
          {
            myTest.map((value)=>{
              return(
                <div className="test-card-container">
                    <div className="review">
                      <p>{value.review}</p>
                    </div>
                    <hr/>
                    <div className="user-div">
                        <div className="user-details">
                          <img src={value.user_img} alt="" />
                          <h5>{value.user_name}</h5>
                        </div>
                        <div className="user-story">
                          <button>{value.read}</button>
                        </div>

                    </div>
                </div>
              )
            })
          }
        </div>
    </section>
  )
}

export default Testimonial