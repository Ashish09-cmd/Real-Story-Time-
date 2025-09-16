import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Vedio() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <h6 className="text-brown text-uppercase ">Video</h6>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-semibold">Real Story Time TV</h4>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end gap-1">
              <h6>
                <Link to={'/rsttv/'}>
                More Video Post <FaArrowRightLong />
                </Link>
              </h6>
            </div>
          </div>

          <div className="row mt-4 vediop">
            <div className="col-12 col-sm-6 col-lg-3">
              <iframe
                width="282"
                height="210"
                src="https://www.youtube.com/embed/ClxktWtLHF8"
                title="शिशुलाई मुटुको समस्या छ कि छैन, गर्भमै थाहा पाउन सकिन्छ? डा. बस्‍नेतको मार्गदर्शन | Real Story Time"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
<Link to={'/rsttv/babys-first-thousand-days-health-tips-nepal/'}>
              <p >
                
              Baby’s First Thousand Days: Health, Nutrition, and Love – Dr. N.B. Basnet.
             
              </p> </Link>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <iframe
                width="282"
                height="210"
                src="https://www.youtube.com/embed/Hnou6Ha0SjA"
                title="Autism के हो र उपचार कसरी? | Mrs. Anita Pandit | RST"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p>The Rising Hype of Divorce – Is It a Necessity?.</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <iframe
                width="282"
                height="210"
                src="https://www.youtube.com/embed/HQN2QvaEbS0"
                title="Ethical Hacking भनेको के हो? के हामी नेपालमै बसेर Bug Bounty बाट लाखौँ कमाउन सक्छौँ?|Real Story Time"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p>Ethical Hacking भनेको के हो? के हामी नेपालमै बसेर Bug Bounty बाट लाखौँ कमाउन सक्छौँ.</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <iframe
                width="282"
                height="210"
                src="https://www.youtube.com/embed/0JoS1tsgMXw"
                title="के एउटा मान्छेको विचार ले देश परिबर्तन हुन सक्छ त ?। Real Story Time"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              
              <p>के एउटा मान्छेको विचार ले देश परिबर्तन हुन सक्छ त ?.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vedio;
