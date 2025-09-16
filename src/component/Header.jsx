import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Vediodetail from '../details/Vediodetail';
import StartUpStory from '../details/StartUpStory';
import BrandDetail from '../details/BrandDetail';
import EnterpriseDetail from '../details/EnterpriseDetail';
import RstNews from '../renderPages/RSTNEWS/RstNews';
import Featured from '../renderPages/Featured/Featured';
import VedioCatid from '../catid/VedioCatid';
import Foodmandu from '../EnterpriceCat/Foodmandu';
import Paypal from '../EnterpriceCat/Paypal';

function Header() {
  return (
    <>
     <header className='py-1   border-bottom  navbar-expand-lg border-[#dadada]'>
        <div className="container d-flex align-items-center justify-content-between">
          <Link to={'/'}>
            <img className='logo' src="https://realstorytime.com/wp-content/uploads/2025/02/logo.png" alt="" />
          </Link>
       

          <ul className='d-md-flex menu d-none d-md-block gap-5'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/rstnews/'}>RST News</Link></li>
             <div className='drop-down'>
            <li className=' drop-down-parent'><a href="#">Real Stories</a>   </li>
            <ul className='drop-downhover d-none shadow p-3 rounded-3 d-flex flex-column gap-1'>
              <li><a href="" className='fw-medium'>Startup Story</a></li>
              <li><a href="" className='fw-medium'>Enterprise Story</a></li>
              <li><a href="" className='fw-medium'>Brand Story</a></li>
              <li><a href="" className='fw-medium'>Social Story</a></li>
              <li><a href="" className='fw-medium'>Others</a></li>
            </ul>
            </div>
            <li><Link to={'/rsttv'}>RSTTV</Link></li>
            <li><Link to={'/featured'}>Featured</Link></li>
          </ul>
          
         <div className='d-flex gap-2'> 
          
           <IoIosSearch className='fs-3 d-none d-sm-block'/>
           <AiOutlineMenu className='d-md-none d-block fs-4 '/>
          </div>
        </div>
     </header>
        

    

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rsttv' element={<Vediodetail/>}/>
      <Route path='/real-stories/startup-story/' element={<StartUpStory/>}/>
      <Route path='/real-stories/brand-story/' element={<BrandDetail/>}/>
      <Route path='/real-stories/enterprise-story/' element={<EnterpriseDetail/>}/>
      <Route path='/rstnews/' element={<RstNews/>}/>
      <Route path='/featured' element={<Featured/>}/>
      <Route path='/rsttv/babys-first-thousand-days-health-tips-nepal/' element={<VedioCatid/>}/>
      <Route path='/enterprise-story/foodmandu-enterprise-story/' element={<Foodmandu/>}/>
      <Route path='/real-stories/enterprise-story/paypals-enterprise-story/' element={<Paypal/>}/>
     
    </Routes>
     
     
    </>
  )
}

export default Header