import React from 'react'
import footerframe from "./footerframe.svg"

function Footer() {
  return (
    <>
    <footer className='mt-6 -mb-5 footer flex justify-center items-center w-full border-t-[2px] border-[#161b2d29] p-4 bottom-0 left-0 right-0'>
        <p className="contex md:text-[14px] text-[12px] text-[#161b2dab]">coyrights &#169;<span className='text-secondary font-bold'>TridaPro 2025</span>. all rights are reserved</p>
    </footer>
    <img src={footerframe} alt="" className="frame w-full bottom-0 left-0 right-0 z-10" />
    </>
  )
}

export default Footer