import React from "react";
import "../Pricing/OurPricing.css";
import Navbar from "../../Components/Navbar/Navbar";
import check from "../PageAssets/check.png";
import cross from "../PageAssets/cross_img.png";
import Faq from "../Home/Components/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
const OurPricing = () => {

  const priceArray = [
    {
      plan: "Free Plan",
      validity: "$0",
      month: "/month",
      feature: "Available features",
      check_img: check,
      f1: "Access to selected free courses.",
      f2: "Limited course materials and resources.",
      f3: "Basic community support.",
      f4: "No certification upon completion.",
      f5: "Ad-supported platform.",
      f6: "Access to exclusive Pro Plan community forums.",
      f7: "Early access to new courses and updates.",
      cross_img: cross,
      btn: "Get Started",
    },
  ];

  const priceArray2 = [
    {
      plan: "Pro Plan",
      validity: "$79",
      month: "/month",
      feature: "Available features",
      check_img: check,
      f1: "Unlimited access to all courses.",
      f2: "Unlimited course materials and resources.",
      f3: "Priority support from instructors.",
      f4: "Course completion certificates.",
      f5: "Ad-free experience.",
      f6: "Access to exclusive Pro Plan community forums.",
      f7: "Early access to new courses and updates.",
      cross_img: cross,
      btn: "Get Started",
    },
  ];



  return (
    <>
      <Navbar />
      <div className="pricing-info">
        <div className="pricing-info-left">
          <h2>Our Pricings</h2>
        </div>
        <div className="pricing-info-right">
          <p>
          Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
          </p>
        </div>
      </div>

      <section className="ourPricing-section">
          <div className="ourPricing-btns">
              <button>Monthly</button>
              <button id="yearly">Yearly</button>
        </div>

        <div className="price-bottom">
        <div className="price-card-container">
          {priceArray.map((item) => {
            return (
              <>
                <div className="plan">
                  <h4>{item.plan}</h4>
                </div>
                <div className="validity">
                  <h1>
                    {item.validity}
                    <sub>{item.month}</sub>
                  </h1>
                </div>
                <div className="features-container">
                  <div className="feature">
                    <h4>{item.feature}</h4>
                  </div>
                  <div className="list-container">
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f1}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f2}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f3}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f4}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f5}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.cross_img} alt="" />
                      <p>{item.f6}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.cross_img} alt="" />
                      <p>{item.f7}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <button>Get Started</button>
        </div>

        <div className="price-card-container">
          {priceArray2.map((item) => {
            return (
              <>
                <div className="plan">
                  <h4>{item.plan}</h4>
                </div>
                <div className="validity">
                  <h1>
                    {item.validity}
                    <sub>{item.month}</sub>
                  </h1>
                </div>
                <div className="features-container">
                  <div className="feature">
                    <h4>{item.feature}</h4>
                  </div>
                  <div className="list-container">
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f1}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f2}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f3}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f4}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f5}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f6}</p>
                    </div>
                    <div className="list-item">
                      <img src={item.check_img} alt="" />
                      <p>{item.f7}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <button>Get Started</button>
        </div>
      </div>
      </section>
      <Faq/>
      <Footer/>
    </>
  );
};

export default OurPricing;
