import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <section className='bg-[#f26522] border-b-2 border-white'>
        <header className="container mx-auto p-5 flex justify-between items-center text-[#ffffff] ">  
            <a href="#" className=""><img src={logo} alt="logo bor edi" className='w-19 h-6' /></a>
            <nav className='flex gap-[50px] '>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/'}>Asosiy</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/about'}>Biz haqimizda</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/tours'}>Turlar</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/tours'}>Mehmonxonalar</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/tours'}>Aviachiptalar</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/tours'}>Aloqa</NavLink>
            </nav>
            <select name="select" className='outline-none bg-[#f26522] font-bold text-[white]'>
                <option value="uz">Uz</option>
                <option value="uz">Ru</option>
                <option value="uz">En</option>
            </select>
        </header>
    </section>
)
}

export default Header