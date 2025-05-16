import React from 'react'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <section className='bg-[#111827] text-[#ffffff] my-[20px] py-[40px]'>
        <footer className="container mx-auto">
            <div className="">
                <img src={logo} alt="logo bor" className='w-14 pb-2' />
                <p className="text-[14px] w-65">Toshkent shahri, Muqumiy ko'chasi 44-A uy</p>
            </div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
        </footer>
    </section>
)
}

export default Footer