import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const ServiceCard = ({item}) => {

    const {name, desc} = item

  return (
    <>
        <div className='py-[20px] px-1 lg:px-5'>
            <h2 className='text-[26px] leading-9 text-slate-900 font-[700]'>{name}</h2>
            <p className='text-[16px] leading-7 font-[400] text-slate-500 mt-1'>
                {desc}
            </p>
        </div>
    </>
  )
}

export default ServiceCard
