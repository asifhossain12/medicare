import React from 'react'
import ServicesList from "../components/Services/ServicesList"
import heroImag01 from "../assets/images/hero-img01.png"
import icon1 from "../assets/images/icon01.png"
import icon2 from "../assets/images/icon02.png"
import icon3 from "../assets/images/icon03.png"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import faqImg from "../assets/images/faq-img.png"
import FaqList from '../components/Faq/FaqList'





const Home = () => {
  return (
    <>
      {/*---------------Hero Section--------------*/}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
           
           {/*--------------hero content-------------------*/}
           <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-slate-900 font=[800px]
              md:text-[50px] md:leading-[70px]'>We helps patients live a healthy and longer life
              </h1>
              <p className='text__para'>
              Welcome to Mediplus. We've been providing top-notch healthcare for more than 10 years.
               Our skilled team offers personalized care in various specialties including General
                Medicine, Pediatrics, Obstetrics, and more. We're equipped with modern technology
                 for accurate diagnoses. 
              Your well-being is our priority, so schedule an appointment today!
              </p>

              <button className='btn'>Request an Appointment</button>
            </div>

              {/*==========Hero Counter------------*/}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center
              gap-5 lg:gap[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                  font-[700] text-slate-900'>10+
                  </h2>

                  <span className='w-[100px] h-2 bg-yellow-400 rounded-full block
                   mt-[-14px]' ></span>
                  <p className='text__para'>Years of Experience</p>
                </div>


                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                  font-[700] text-slate-900'>15+
                  </h2>

                  <span className='w-[100px] h-2 bg-purple-500 rounded-full block
                   mt-[-14px]' ></span>
                  <p className='text__para'>Clinics</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                  font-[700] text-slate-900'>100%
                  </h2>

                  <span className='w-[100px] h-2 bg-cyan-500 rounded-full block
                   mt-[-14px]' ></span>
                  <p className='text__para'>Patient Satisfaction</p>
                </div>
              </div>
           </div>
           {/*--------------hero content-------------------*/}


           <div className='flex gap-[30px] justify-end'>
            <div>
              <img className='w-full' src={heroImag01} alt=' '/>
            </div>
           </div>
          </div>
        </div>
      </section>

      {/*---------Hero Section end--------------*/}

      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center capitalize'>Providing the best medical service
            </h2>
            <p className='text__para text-center'>We have the world's best heathcare System</p>
          </div>

          <div className=' grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-5 lg:gap-[30px]
          mt-[30px] lg:mt-[55px]'>

          <div className='py-[30px] px-5'>
            <div className=' flex items-center justify-center'>
            <img src={icon1} alt=''/>
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-slate-900 font-[700px] text-center'>
                Find a Doctor
              </h2>

              <Link to = '/doctors' className='w-[44px] h-[44px] rounded-full border
              border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
              group hover:bg-black hover:border-none '>
                <BsArrowRight className='group-hover: text-white w-6 h-5' />
              </Link>
            </div>

          </div>

          <div className='py-[30px] px-5'>
            <div className=' flex items-center justify-center'>
            <img src={icon2} alt=''/>
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-slate-900 font-[700px] text-center'>
                Find a Location
              </h2>

              <Link to = '/doctors' className='w-[44px] h-[44px] rounded-full border
              border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
              group hover:bg-black hover:border-none '>
                <BsArrowRight className='group-hover: text-white w-6 h-5' />
              </Link>
            </div>


          </div>

          <div className='py-[30px] px-5'>
            <div className=' flex items-center justify-center'>
            <img src={icon3} alt=''/>
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-slate-900 font-[700px] text-center'>
                Book Appointment
              </h2>

              <Link to = '/doctors' className='w-[44px] h-[44px] rounded-full border
              border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
              group hover:bg-black hover:border-none '>
                <BsArrowRight className='group-hover: text-white w-6 h-5' />
              </Link>
            </div>

          </div>
          </div>
        </div>
      </section>

      {/*------------------Services Section Start--------------*/}

      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Services</h2>
            <p className='text__para text-center'>
            At Mediplus, we provide a wide range of healthcare services to cater to your needs.
            Schedule your appointment today to embark on your journey toward better
            health with us.
            </p>
          </div>

          <ServicesList />
        </div>
      </section>

      {/*------------------Services Section End--------------*/}

      {/*------------------FAQ Section Start--------------*/}
      <br />
      <br />
      <br />
      <br />

      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src = {faqImg} alt='303' />
            </div>
            <div className='w-full md:h-1/2'>
              <h2 className='heading'>Frequently Asked Questions</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

       {/*------------------FAQ Section End--------------*/}

    </>
  )
}

export default Home;
