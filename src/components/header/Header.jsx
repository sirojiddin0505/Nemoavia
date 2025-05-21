import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <section className='fixed right-0 left-0 z-50 bg-[#f26522] border-b-2 border-white'>
        <header className="container mx-auto p-5 hidden lg:flex lg:justify-between lg:items-center text-[#ffffff]">  
            <a href="#" className=""><img src={logo} alt="logo bor edi" className='w-19 h-6' /></a>
            <nav className='gap-[50px] hidden lg:flex'>
                <a href="#home">Asosiy</a>
                <a href="#about">Biz haqimizda</a>
                <a href="#tours">Turlar</a>
                <a href="#hotel">Menmonhonalar</a>
                <a href="#avia">Aviachiptalar</a>
                <a href="#contact">Aloqa</a>
            </nav>
            <div className="flex gap-4 items-center ">
                <select name="select" className='outline-none bg-[#f26522] font-bold text-[white]'>
                    <option value="uz">Uz</option>
                    <option value="uz">Ru</option>
                    <option value="uz">En</option>
                </select>
                <div className="hum__menu text-4xl "></div>
            </div>
        </header>
        <div className="container mx-auto p-4 flex justify-between items-center lg:hidden">
            <div className="hum__menu text-4xl text-white">≡</div>
            <a href="#" className="mt-4"><img src={logo} alt="logo bor edi" className='w-20 h-7' /></a>
            <select name="select" className='outline-none bg-[#f26522] font-bold text-[white] text-2xl'>
                <option value="uz">Uz</option>
                <option value="uz">Ru</option>
                <option value="uz">En</option>
            </select>
        </div>
    </section>
)
}

export default Header