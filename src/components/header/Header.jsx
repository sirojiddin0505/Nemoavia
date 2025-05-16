import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <section className='bg-[#f26522]'>
        <header className="container mx-auto p-[15px] flex justify-between text-[#ffffff]">  
            <a href="#" className=""><img src={logo} alt="logo bor edi" className='w-[65px] h-[22px]' /></a>
            <nav className='flex gap-[50px]'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/tours'}>Tours</NavLink>
                <NavLink to={'/tours'}>Tours</NavLink>
                <NavLink to={'/tours'}>Tours</NavLink>
                <NavLink to={'/tours'}>Tours</NavLink>
            </nav>
            <select name="select" className='outline-none bg-transparent text-[#ffffff]'>
                <option value="uz">Uz</option>
                <option value="uz">Ru</option>
                <option value="uz">En</option>
            </select>
        </header>
    </section>
)
}

export default Header