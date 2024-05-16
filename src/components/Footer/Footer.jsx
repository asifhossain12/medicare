import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import {AiOutlineInstagram} from "react-icons/ai"

const socialLinks = [
  {
    path: "https://www.instagram.com/_.asif_12/",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
  }
]

const quickLinks1 = [
  {
    path: "/home",
    display : "Home",
  },
  {
    path: "/service",
    display : "Services",
  },
]

const quickLinks2 = [
  {
    path: "/",
    display : "Request an Appointment",
  },
  {
    path: "/",
    display : "Find a Location",
  },
  {
    path: "/",
    display : "Get a opinion",
  },
]

const quickLinks3 = [
  {
    path: "/",
    display : "Donate",
  },
  {
    path: "/contact",
    display : "Contact Us",
  },
]




const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <>
      <footer className='pb-16 pt-10'>
        <div className='container'>
          <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
            <div>
              <img src={logo} alt='303' />
              <p className='text-[16px] leading-7 font-[400] text-gray-600 mt-4'>
                Copyright © {year}
              </p>
              <div className='flex items-center gap-3 mt-4'>
                {socialLinks.map((link, index)=><Link to={link.path} key={index}
                className='w-9 h-9 border border-solid border-black rounded-full flex items-center
                justify-center group hover:bg-blue-600 hover:border-none'
                >{link.icon}</Link>)}
              </div>
            </div>


            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-black'>
                Quick Links
              </h2>
              <ul>
                {quickLinks1.map((item,index)=>(
                  <li key={index} className='mb-4'>
                    <Link to={item.path} className='text-[16px] leading-7 font-[400]
                    text-slate-500'>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-black'>
                I want to
              </h2>
              <ul>
                {quickLinks2.map((item,index)=>(
                  <li key={index} className='mb-4'>
                    <Link to={item.path} className='text-[16px] leading-7 font-[400]
                    text-slate-500'>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-black'>
                Support
              </h2>
              <ul>
                {quickLinks3.map((item,index)=>(
                  <li key={index} className='mb-4'>
                    <Link to={item.path} className='text-[16px] leading-7 font-[400]
                    text-slate-500'>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;








