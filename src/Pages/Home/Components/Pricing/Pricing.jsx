import React from "react";
import "../Pricing/Pricing.css";
import check from "../Assets2/check.png";
import cross from "../Assets2/cross_img.png";

const Pricing = () => {
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
    <section className="pricing-section">
      <div className="price-top">
        <div className="price-sub-top">
          <h2>Our Pricing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="price-view-btn">
          <button>Monthly</button>
          <button id="yearly">Yearly</button>
        </div>
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
  );
};

export default Pricing;
