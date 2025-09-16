import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BrandStory() {
  return (
    <>
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <h4 className="fw-semibold">Brand Story</h4>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end gap-1">
              <h6><Link to={'/real-stories/brand-story/'}>
              Brand Story
                <FaArrowRightLong />
                </Link>
              </h6>
            </div>
          </div>

          <div className="row mt-4 para">
            <div className="col-12 col-sm-6 col-lg-3 ">
              <img
                className="img-fluid"
                src="https://realstorytime.com/wp-content/uploads/2025/03/Trader-Joes-Stamford.webp"
                alt=""
              />
             
              <h4>
              Trader Joe’s Brand Story : The Journey Behind the Beloved Grocery Chain
              </h4>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                src="https://realstorytime.com/wp-content/uploads/2025/03/Airbnb.webp"
                alt=""
                className="img-fluid"
              />
             
              <h4>
              Airbnb brand evolution : How It Redefined Travel and Hospitality?
              </h4>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                src="https://realstorytime.com/wp-content/uploads/2025/03/Wegmans-in-Buffalo-New-York-McKinley-Parkway-1.webp"
                alt=""
                className="img-fluid"
              />
             

              <h4>
              Wegmans Brand Story: Discover the Legacy of Quality & Innovation
              </h4>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                src="https://realstorytime.com/wp-content/uploads/2025/03/Patel-Brothers-Brand-Story-1.webp"
                alt=""
                className="img-fluid"
              />

              
              <h4>
              Patel Brothers Success Story: The Rise of America’s Largest Indian Grocery Chain
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BrandStory;
