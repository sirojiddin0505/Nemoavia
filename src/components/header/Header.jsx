import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <section className='fixed right-0 left-0 z-50 bg-[#f26522] border-b-2 border-white'>
        <header className="container mx-auto p-5 hidden lg:flex lg:justify-between lg:items-center text-[#ffffff]">  
            <a href="#" className=""><img src={logo} alt="logo bor edi" className='w-19 h-6' /></a>
            <nav className='gap-[50px] hidden lg:flex'>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/'}>Asosiy</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/about'}>Biz haqimizda</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/tours'}>Turlar</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/hotel'}>Mehmonxonalar</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/avia'}>Aviachiptalar</NavLink>
                <NavLink className="transform hover:scale-110 transition duration-500 " to={'/contact'}>Aloqa</NavLink>
                {/* <a href="About7">About</a> */}
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