import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function EnterpriseStory() {
  return (
    <>
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-semibold">Enterprise Story</h4>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end gap-1">
              <h6> <Link to={'/real-stories/enterprise-story/'}>
                More Post
                <FaArrowRightLong />
                </Link>
              </h6>
            </div>
          </div>

          <div className="row mt-4 para">
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                className="img-fluid"
                src="https://realstorytime.com/wp-content/uploads/2025/03/Foodmandu-2.webp"
                alt=""
              />
               <Link to={'/enterprise-story/foodmandu-enterprise-story/'}>
              <h4>
                Foodmandu Enterprise Story: Pioneering Nepal’s Food Delivery
                Revolution
              </h4>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                src="https://realstorytime.com/wp-content/uploads/2025/03/PayPal-drops-after-cutting-forecast-on-spending-slowdown.webp"
                alt=""
                className="img-fluid"
              />
               <Link to={'/real-stories/enterprise-story/paypals-enterprise-story/'}>
              <h4>
              An Enterprise Story of PayPal: Revolutionizing Digital Payments Worldwide
              </h4>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                className="img-fluid"
                src="https://realstorytime.com/wp-content/uploads/2025/03/Foodmandu-2.webp"
                alt=""
              />
               <Link to={'/enterprise-story/foodmandu-enterprise-story/'}>

              <h4>
                Foodmandu Enterprise Story: Pioneering Nepal’s Food Delivery
                Revolution
              </h4>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                src="https://realstorytime.com/wp-content/uploads/2025/03/PayPal-drops-after-cutting-forecast-on-spending-slowdown.webp"
                alt=""
                className="img-fluid"
              />
               <Link to={'/real-stories/enterprise-story/paypals-enterprise-story/'}>

              <h4>
              An Enterprise Story of PayPal: Revolutionizing Digital Payments Worldwide
              </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EnterpriseStory;
