import React from 'react'
import "../Faq/Faq.css"
import addition from "../Assets2/addition.png"
import right_arrow from "../Assets2/right_arrow.png"
import { useState } from 'react'
const Faq = () => {
  const faqArray2=[
    {
      question:"What kind of support can I expect from instructors?",
    },
    {
      question:"Are the courses self-paced or do they have specific start and end dates?"
    },
    {
      question:"Are there any prerequisites for the courses?",
    },
    {
      question:"Can I download the course materials for offline access?",
    }
  ]
  const faqArray=[
    {
      question:"Can I enroll in multiple courses at once?",
      first_ans:"Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      enroll_ans: "Enrollment Process for Different Courses"
    }
  ]

  const [select, setSelect]=useState(null)
  const handleSelect=(i)=>{
    if (select===i){
        return setSelect(null)
    }
    setSelect(i);
}

  return (
    <section className='faq-section'>
      <div className="faq-left">
        <div className="faq-content">
          <h3>Frequently Asked Questions</h3>
          <p>Still you have any questions? Contact our Team via support@skillbridge.com</p>
        </div>
        <button>See All FAQ's</button>
      </div>

      <div className="faq-right">
        {
          faqArray.map((item,i)=>{
            return(
              <div className='wrapper' key={i} onClick={()=>handleSelect(i)}>
                <div className="question">
                  <h5>{item.question}</h5>
                  <img src={addition} className={select===i && "reverse-arrow"}alt="" />
                </div>
                <div className="answers"
                    // className='visible'>{select===i ? <div className="first-ans">
                    // <p>{item.first_ans}</p>
                    // </div> && 
                    // <div className="enroll-part">
                    // <h5>{item.enroll_ans}</h5>
                    // <img src={right_arrow} alt="" />
                    // </div>: null} 
                  >
                  
                   <div className="first-ans">
                        <p>{item.first_ans}</p>
                   </div>
                  <div className="enroll-part">
                    <h6>{item.enroll_ans}</h6>
                    <img src={right_arrow} alt="" />
                  </div>
                </div>
              </div>
            )
          })
        }

{
          faqArray2.map((item,i)=>{
            return(
              <div className='wrapper' key={i} onClick={()=>handleSelect(i)}>
                <div className="question">
                  <h5>{item.question}</h5>
                  <img src={addition} className={select===i && "reverse-arrow"}alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Faq