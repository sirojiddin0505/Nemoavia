import { useTranslation } from 'react-i18next'
import logo from '../images/logo.png'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {t, i18n} = useTranslation();
  const languages = localStorage.getItem('i18nextLng')
  const handleChange = (event) =>{
      const selectedLanguage = event.target.value;
      i18n.changeLanguage(selectedLanguage);
  }

  return (
    <section className='fixed right-0 left-0 z-50 bg-[#f26522] border-b-2 border-white'>
        <header className="container mx-auto p-5 hidden lg:flex lg:justify-between lg:items-center text-[#ffffff]">  
            <a href="#" className=""><img src={logo} alt="logo bor edi" className='w-20 h-auto' /></a>
            <nav className='gap-[50px] hidden lg:flex'>
                <a href="#home">{t("Asosiy")}</a>
                <a href="#about">{t("Biz haqimizda")}</a>
                <a href="#tours">{t("Turlar")}</a>
                <a href="#hotel">{t("Mehmonxonalar")}</a>
                <a href="#avia">{t("Aviachiptalar")}</a>
                <a href="#contact">{t("Aloqa")}</a>
            </nav>
            <div className="flex gap-4 items-center ">
                <select name="select" className='outline-none bg-[#f26522] font-bold text-[white]' onChange={handleChange} value={languages}>
                    <option value="uz">Uz</option>
                    <option value="ru">Ru</option>
                    <option value="en">En</option>
                </select>
                <div className="hum__menu text-4xl "></div>
            </div>
        </header>

        <div className="container mx-auto p-4 flex justify-between items-center lg:hidden">
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-white text-[28px]">{isOpen ? '✕' : '≡'}</div>            
            <a href="#" className="mt-4"><img src={logo} alt="logo bor edi" className='w-18 h-6' /></a>
            <select className='outline-none bg-[#f26522] font-bold text-[white] text-[18px]' onChange={handleChange} value={languages}>
                <option value="uz">Uz</option>
                <option value="uz">Ru</option>
                <option value="uz">En</option>
            </select>
        </div>

      {isOpen && (
        <div className="bg-[#f26522] text-white px-6 py-4 lg:hidden border-t-1 border-t-[white]">
          <nav className='flex flex-col gap-4'>
            <a href="#home" className='hover:underline underline-offset-4 hover:transition-all hover:duration-900 hover:ease-in-out ' onClick={() => setIsOpen(false)}>Asosiy</a>
            <a href="#about" onClick={() => setIsOpen(false)}>Biz haqimizda</a>
            <a href="#tours" onClick={() => setIsOpen(false)}>Turlar</a>
            <a href="#hotel" onClick={() => setIsOpen(false)}>Mehmonxonalar</a>
            <a href="#avia" onClick={() => setIsOpen(false)}>Aviachiptalar</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Aloqa</a>
          </nav>
        </div>
      )}

    </section>
)
}

export default Header