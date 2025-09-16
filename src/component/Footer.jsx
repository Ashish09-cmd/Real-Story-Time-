import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className='py-10 '>
      <div className="container d-flex flex-column  align-items-center justify-content-center">
         <div className='mb-4 f-icon d-flex align-items-center justify-content-center'>
         <TfiEmail className='text-white fs-2'/>
         </div >
         <div className='text-center'>
         <p className='fs-5'>Subscribe to our newsletter</p>
         <h4 className='text-white fs-30'>Sign up to the What to Watch newsletter for <br /> the  best of RST, delivered straight to your <br /> inbox each week.</h4>
      </div>
      <div className="row mt-4">
        <div className="col-8 d-flex align-items-center justify-content-end flex-column">
         <div className='w-100'>
          <input type="email" placeholder='Email Address ' className='border-0 outline-0 border-lightgrey bg-transparent border-bottom text-white pb-3 w-100 ' />
         </div>
         <div className="form-check mt-3">
          <div >
              <input className="form-check-input bg-light"  type="checkbox"  defaultValue id="form1Example3" defaultChecked />
        
              <label className="form-check-label " htmlFor="form1Example3"> I agree that my submitted data is being collected and stored.</label>
            </div>
      </div>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <button className='px-5 py-3 fs-5 ms-3 rounded-2 bg-brown border-0 text-white fw-semibold '>
            Subscribe
          </button>
        </div>
      </div>
      
       
      </div>
    </footer>
    <section className='py-5 bg-light '>
      <div className="container">
        <ul className='d-flex align-items-center justify-content-center gap-4 border-bottom pb-3'>
          <li><FaFacebookF className='fs-5 me-1'/> Facebook</li>
          <li><FaTwitter className='fs-5 me-1'/> Twitter</li>
          <li><FaYoutube className='fs-5 me-1'/> Youtube</li>
          <li>सूचना विभाग दर्ता नं. ००३०३/०८१-०८२</li>
        </ul>
        <ul className='d-flex align-items-center justify-content-center gap-5 mt-4 mb-2 '>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="3">Write For Us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Partner with us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="">Terms of Use</a></li>
          <li><a href="">Privacy policy</a></li>
        </ul>
        <p className='text-center fs-14'>Copyright © 2024 - 2025. Real Story Time or its affiliate(s). All rights reserved.</p>
      </div>
    </section>
    </>
  )
}

export default Footer