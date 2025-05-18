import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <section className='bg-[#f26522] border-b-2 border-white'>
        <header className="container mx-auto p-5 flex justify-between items-center text-[#ffffff] ">  
            <a href="#" className=""><img src={logo} alt="logo bor edi" className='w-19 h-6' /></a>
            <nav className='gap-[50px] hidden lg:flex'>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/'}>Asosiy</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/about'}>Biz haqimizda</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/tours'}>Turlar</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/hotel'}>Mehmonxonalar</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/tours'}>Aviachiptalar</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/tours'}>Aloqa</NavLink>
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
    </section>
)
}

export default Header