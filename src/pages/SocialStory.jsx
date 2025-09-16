import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function SocialStory() {
  return (
    <>
      <section className="py-5 bg-light">
                 <div className="container">
                   <div className="row">
                     <div className="col-lg-6">
                       <h4 className='fw-semibold'> Social Story</h4>
                     </div>
                     <div className="col-lg-6 d-flex align-items-center justify-content-end gap-1">
                       <h6>
                        <Link to={'/real-stories/startup-story/'}>
                       More Post<FaArrowRightLong />
                       </Link>
                       </h6>
                     </div>
                   </div>
         
                   <div className="row mt-4 para">
                     <div className="col-12 col-sm-6 col-lg-3">
                      <img className='img-fluid' src="https://realstorytime.com/wp-content/uploads/2025/03/Bhavish-Aggaarwal-_Krutrim-AI_.webp" alt="" />
                        <p>March 9, 2025</p>
                       <h4 >Krutrim: India’s First $1B AI Startup & Bhavish Aggarwal’s $50M Breakthrough</h4>
                     </div>
                     <div className="col-12 col-sm-6 col-lg-3">
                     <img src="https://realstorytime.com/wp-content/uploads/2025/03/Ramp-Startup-Success-Fintech-Leader-Soars-to-_13B-Valuation-in-Share-Sale.webp" alt="" className="img-fluid" />
                     <p>March 9, 2025</p>
                     <h4>Ramp Startup Journey: Fintech Firm Hits $13B Valuation in Share Sale</h4>
     
                     </div>
                     <div className="col-12 col-sm-6 col-lg-3">
                      <img src="https://realstorytime.com/wp-content/uploads/2025/03/Ashia-Lewis-Livaudais-1.jpg" alt="" className="img-fluid" />
                        <p>March 6, 2025</p>
     
                       <h4>Startup Story: SymbyAI Raised $2.1M in Seed to Simplify Scientific Research</h4>
                     </div>
                     <div className="col-12 col-sm-6 col-lg-3">
                      <img src="https://realstorytime.com/wp-content/uploads/2025/03/OpenAI-Success-Story.webp" alt="" className="img-fluid" />
                       
                       <p>Mar 3, 2025</p>
                       <h4>OpenAI Startup Journey to Success: 6 Lessons from Its Rise in AI Innovation</h4>
                     </div>
                   </div>
                 </div>
               </section>
    </>
  )
}

export default SocialStory