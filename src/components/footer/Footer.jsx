import { t } from 'i18next';
import logo from '../images/logo.png'
import { FaInstagram, FaTelegram  } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const {t, i18n} = useTranslation()
  return (
    <section className='bg-[#111827] text-[#ffffff] px-6 py-10'>
        <footer className="container mx-auto px-6 flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <div className="">
                <img src={logo} alt="logo bor" className='w-16 py-4' />
                <p className="text-[14px] w-65 text-[#9ca3af]">{t("Toshkent shahri, Muqumiy ko'chasi 44-A uy")}</p>
            </div>
            <div className="">
                <h3 className="py-3">{t("Bog'lanish")}</h3>
                <a href="tel:+998951500000"><p className="text-[#9ca3af]">Tel: +998 95 150 00 00</p></a>
                <p className='text-[#9ca3af]'>info@nemoavia.uz</p>
            </div>
            <div className="">
                <h3 className="py-3">{t("Ijtimoit tarmoqlar")}</h3>
                <div className="flex gap-3">
                    <FaInstagram/>
                    <FaTelegram/>
                    <SiGmail/>
                </div>
            </div>
            <div className="">
                <h3 className="py-3">{t("Manzil")}</h3>
                <p className="text-[14px] w-65 text-[#9ca3af]">{t("Toshkent shahri, Muqumiy ko'chasi 44-A uy")}</p>
            </div>
        </footer>
        <p className="text-[#9ca3af] text-center mt-10">{t("2025 Nemo Avia Trip Barcha huquqlar himoyalangan")}</p>
    </section>
)
}

export default Footer