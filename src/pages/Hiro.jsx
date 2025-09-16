import React from "react";
import { GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Hiro() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="bg-white py-5">
        <div className="container ">
          <Slider {...settings}>
            <div>
              <div className="row py-5 light-pink  ">
                <div className="col-lg-6 ps-5 ">
                  <ul>
                    <li>April 1, 2025</li>
                  </ul>
                  <Link to={'/enterprise-story/foodmandu-enterprise-story/'}>
                  <h1 className="mt-2">
                    Foodmandu <br /> Enterprise Story: <br /> Pioneering Nepal’s{" "}
                    <br /> Food Delivery <br /> Revolution
                  </h1></Link>
                  <Link to={'/enterprise-story/foodmandu-enterprise-story/'}>
                  <button className="px-5 py-3 border-0 rounded-3  bg-brown text-white fw-bold mt-3">
                    Read More <GoArrowRight className="fw-bold fs-5" />
                  </button>
                  </Link>
                </div>

                <div className="col-lg-6 d-flex justify-content-end ">
                  <img
                    src="https://realstorytime.com/wp-content/uploads/2025/03/Foodmandu-2.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="row py-5 light-pink w-100 ">
                <div className="col-lg-6 ps-5">
                  <ul>
                    <li>March 30, 2025</li>
                  </ul>
                  <Link to={'/real-stories/enterprise-story/paypals-enterprise-story/'}>
                  <h1 className="mt-2">
                    An Enterprise Story of <br /> PayPal: Revolutionizing <br />{" "}
                    Digital Payments <br /> Worldwide
                  </h1></Link>
                  <Link to={'/real-stories/enterprise-story/paypals-enterprise-story/'}>

                  <button className="px-5 py-3 border-0 rounded-3  bg-brown text-white fw-bold mt-3">
                    Read More <GoArrowRight className="fw-bold fs-5" />
                  </button>
                  </Link>
                </div>

                <div className="col-lg-6 d-flex justify-content-end">
                  <img
                    src="https://realstorytime.com/wp-content/uploads/2025/03/PayPal-drops-after-cutting-forecast-on-spending-slowdown.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>



            <div>
              <div className="row py-5 light-pink ">
                <div className="col-lg-6 ps-5">
                  <ul>
                    <li>March 30, 2025</li>
                  </ul>
                  <Link to={'/rsttv/babys-first-thousand-days-health-tips-nepal/'}>
                  <h1 className="mt-2">
                    Baby’s First <br /> Thousand Days: <br /> Health, Nutrition,
                    and <br /> Love – Dr. N.B. Basnet
                  </h1>
                  <button className="px-5 py-3 border-0 rounded-3  bg-brown text-white fw-bold mt-3">
                    Read More <GoArrowRight className="fw-bold fs-5" />
                  </button>
                  </Link>
                </div>

                <div className="col-lg-6 d-flex justify-content-end position-relative">
                  <iframe
                    width="606"
                    height="410"
                    className="w-100"
                    src="https://www.youtube.com/embed/ClxktWtLHF8"
                    title="शिशुलाई मुटुको समस्या छ कि छैन, गर्भमै थाहा पाउन सकिन्छ? डा. बस्‍नेतको मार्गदर्शन | Real Story Time"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div>


              <div className="row light-green  py-5 ">
                <div className="col-lg-6 ps-5 ">
                  <ul>
                    <li>March 26, 2025</li>
                  </ul>
                  <h1 className="mt-2">
                    Baby’s First The Rising Hype of <br /> Divorce – Is It a{" "}
                    <br /> Necessity?
                  </h1>
                  <button className="px-5 py-3 border-0 rounded-3  bg-brown text-white fw-bold mt-3">
                    Read More <GoArrowRight className="fw-bold fs-5" />
                  </button>
                </div>

                <div className="col-lg-6 d-flex justify-content-end ">
                  <iframe
                    width="606"
                    height="410"
                  
                    src="https://www.youtube.com/embed/Hnou6Ha0SjA"
                    title="Autism के हो र उपचार कसरी? | Mrs. Anita Pandit | RST"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>



            <div>
              <div className="row py-5 light-pink ">
                <div className="col-lg-6 ps-5">
                  <ul>
                    <li>March 30, 2025</li>
                  </ul>
                  <h1 className="mt-2">
                    Ethical Hacking भनेको के हो? के हामी नेपालमै बसेर Bug Bounty
                    बाट लाखौँ कमाउन सक्छौँ
                  </h1>
                  <button className="px-5 py-3 border-0 rounded-3  bg-brown text-white fw-bold mt-3">
                    Read More <GoArrowRight className="fw-bold fs-5" />
                  </button>
                </div>

                <div className="col-lg-6 d-flex justify-content-end position-relative">
                <iframe width="606" className="w-100" height="410" src="https://www.youtube.com/embed/HQN2QvaEbS0" title="Ethical Hacking भनेको के हो? के हामी नेपालमै बसेर Bug Bounty बाट लाखौँ कमाउन सक्छौँ?|Real Story Time" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Hiro;
