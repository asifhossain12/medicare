import React from 'react'
import ServicesList from '../components/Services/ServicesList'

const Service = () => {
  return (
    <>
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
      </>


  )
}

export default Service;
