import React from 'react'
import { BsPerson } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'
import about3 from '../images/about3.jpg'
import tours1 from '../images/tours1.png'
import tours2 from '../images/tours2.png'
import tours3 from '../images/tours3.png'
import tours4 from '../images/tours4.png'
import hotel1 from '../images/hotel1.png'
import hotel2 from '../images/hotel2.png'
import hotel3 from '../images/hotel3.png'
import avia2 from '../images/avia2.png'
import avia3 from '../images/avia3.png'
import avia4 from '../images/avia4.png'
import Marquee from 'react-fast-marquee';
import image from '../images/image.png'
import qatar from '../images/qatar.png'
import turkish from '../images/turkish.png'
import uzair from '../images/image1.png'


const Home = () => {
  return (
    <>
    <section className='home'>
      <div className="bg-[#f26522]">
        <div className="container flex flex-col justify-center items-center text-[#ffffff] py-32 p-4 mx-auto w-250">
          <h1 className="text-[55px] font-bold text-center md:text-[35px]">Sayohatingizni biz bilan boshlang</h1>
          <p className="text-2xl text-[#ffff] py-2">Nemo Travel - huzur uchun yo'l</p>
          <div className="bg-[#ffff] max-w-[800px] rounded-full my-8 px-8 py-6 flex items-center justify-around gap-8 w-200">
            <div className="flex gap-4 item-center">
              <BsPerson className='w-10 h-10 p-2 rounded-full text-white bg-[#f26522]'/>
              <div className="">
                <h2 className="text-[#1f2937]">Mamnun mijozlar</h2>
                <p className="font-bold text-[#1f2937]">45000+</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <FaRegClock className='w-10 h-10 p-2 rounded-full text-white bg-[#f26522]'/>
              <div className="">
                <h2 className="text-[#1f2937]">Mamalakatlar</h2>
                <p className="font-bold text-[#1f2937]">30+</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
            <FaRegClock className='w-10 h-10 p-2 rounded-full text-white bg-[#f26522]'/>
            <div className="">
              <h2 className="text-[#1f2937]">Tajriba</h2>
              <p className="font-bold text-[#1f2937]">5+ yil</p>
            </div>
            </div>
            <button className='bg-[#f26522] py-2 px-8 rounded-full hover:bg-[#e85a1db1] '>Batafsil ma'lumot</button>
          </div>
        </div>
      </div>
    </section>

    <section className='about'>
      <div className="hero">
        <div className="container mx-auto  py-8 px-6">
          <h1 className="font-bold text-4xl mb-6 text-center">Biz haqimizda</h1>
          <p className="text-xl text-gray-600 text-center mb-16">Sizning ishonchli sayohat hamkoringiz</p>
          <div className="box flex flex-col md:grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Bizning vazifamiz</h3>
              <p className="text-gray-600">Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Bizning maqsadlarimiz</h3>
              <p className="">O'zbekistondagi yetakchi sanoat kompaniyasiya aylanish va xalqaro miqyosda tan olingan brend bo'lish</p>
            </div>
          </div>
          <div className="boxs py-14 flex items-center justify-around flex-col md:grid md:grid-cols-2 gap-6 ">
            <div className="max-w-140">
              <p className="text-gray-600 mb-4 leading-7">Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga yetkazib, unutilmas xotiralar yaratishga yordam beramiz. Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik aviakompaniyalar bilan hamkorlik qiladi.</p>
              <p className="text-gray-600 leading-7">Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling! Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda), Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda, Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam olish BAAda, Turlar Bali oroliga va dam olish Bali orolida, Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga va dam olish Indoneziyada.</p>
            </div>
            <div className="flex flex-col overflow-hidden gap-4 max-w-[560px] px-1">
              <div className=""><img src={about1} className="w-full h-64 object-cover rounded-[12px]" alt="" /></div>
              <div className="flex gap-6">
                <div className="w-70"><img src={about2} alt="#" className='w-full h-40 object-cover rounded-[12px]'/></div>
                <div className="w-70"><img src={about3} alt="#" className='w-full h-40 object-cover rounded-[12px]'/></div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-12">Bizning jamoa</h2>
          <div className="flex justify-around flex-wrap sm:grid sm:grid-cols-2 md:gap-6 lg:grid-cols-4 gap-2"> 
            <div className="text-xl font-medium text-gray-800 p-8 bg-[#ffffff] text-center min-w-[150px] rounded-lg shadow-lg">Direktor</div>
            <div className="text-xl font-medium text-gray-800 p-8 bg-[#ffffff] text-center min-w-[150px] rounded-lg shadow-lg">Yurist</div>
            <div className="text-xl font-medium text-gray-800 p-8 bg-[#ffffff] text-center min-w-[150px] rounded-lg shadow-lg">Operator</div>
            <div className="text-xl font-medium text-gray-800 p-8 bg-[#ffffff] text-center min-w-[150px] rounded-lg shadow-lg">Adminstrator</div>
          </div>
        </div>
      </div>
    </section>

    <section className='tours'>
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Turlar</h1>
        <p className="text-xl text-gray-600 text-center mb-10">Eng yaxshi sayohat turlari</p>
        <div className="cards flex flex-col items-center gap-8 sm:grid grid-cols-2 lg:grid-cols-4">
          <div className="max-w-[550px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div>
              <img src={tours1} alt="rasm bor" className='h-[190px] w-full object-cover' />
            </div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-bold'>Yurtimiz bo'ylab sayohat</h2>
              <p className='py-2 mb-4'>O'zbekistonning tarixiy va ma'daniy shaharlari bo'ylab</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil</button>
            </div>
          </div>
          <div className="max-w-[550px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div>
              <img src={tours2} alt="rasm bor" className='h-[190px] w-full object-cover' />
            </div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-bold'>Turkiya bo'ylab sayohat</h2>
              <p className='py-2 mb-4'>Istanbul, Antalya, Kappadokiya - eng mashhur joylar</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil</button>
            </div>
          </div>
          <div className="max-w-[550px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div>
              <img src={tours3} alt="rasm bor" className='h-[190px] w-full object-cover' />
            </div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-bold'>Dubai bo'ylab sayohat </h2>
              <p className='py-2 mb-4'>Zamonaviy arxitektura va hashamatli savdo markazlari</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil</button>
            </div>
          </div>
          <div className="max-w-[550px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div>
              <img src={tours4} alt="rasm bor" className='h-[190px] w-full object-cover' />
            </div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-bold'>Yevropa bo'ylab sayohat</h2>
              <p className='py-2 mb-4'>Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='hotels'>
    <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Menmonxonalar</h1>
        <div className="card flex flex-col items-center gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 ">
           <div className="max-w-[400px] rounded-[12px] border-2 border-[#f26522] overflow-hidden pb-4">
                <div>
                    <img src={hotel1} alt="rasm bor" className='h-[190px] w-full object-cover' />
                </div>
                <div className="py-4 px-8">
                   <h2 className='text-xl font-semibold mb-2 text-[#000000]'>Hyatt Regency Tashkent</h2>
                    <p className=''>Navoiy ko'chasi 1-uy, Toshkent</p>
                    <p className='py-2'>Navoiy ko' 1-uy,amonaviy mehmonxona markaz markazida</p>
                    <button className='bg-[#f26522] rounded-full text-[#ffffff] mt-2 py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil ma'lumot</button>
                </div>
            </div>
           <div className="max-w-[400px] rounded-[12px] border-2 border-[#f26522] overflow-hidden pb-4">
                <div>
                    <img src={hotel2} alt="rasm bor" className='h-[190px] w-full object-cover' />
                </div>
                <div className="py-4 px-8">
                   <h2 className='text-xl font-semibold mb-2 text-[#000000]'>Hilton Tashkent City</h2>
                    <p className=''>Islom Karimov ko'chasi 2-uy, Toshkent</p>
                    <p className='py-2 pb-8'>Biznes mehmonxona shahar markazida</p>
                    <button className='bg-[#f26522] rounded-full text-[#ffffff] mt-2 py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil ma'lumot</button>
                </div>
            </div>
           <div className="max-w-[400px] rounded-[12px] border-2 border-[#f26522] overflow-hidden pb-4">
                <div>
                    <img src={hotel3} alt="rasm bor" className='h-[190px] w-full object-cover' />
                </div>
                <div className="py-4 px-8">
                   <h2 className='text-xl font-semibold mb-2 text-[#000000]'>City Palace Hotel</h2>
                    <p className=''>Amir Temur ko'chasi 15-uy, Toshkent</p>
                    <p className='py-2'>Qulay mehmonxona diqqatga sazovor joylar yaqinida</p>
                    <button className='bg-[#f26522] rounded-full text-[#ffffff] mt-2 py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil ma'lumot</button>
                </div>
            </div>
        </div>
    </div>
    </section>

    <section className='avia'>
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold ml-6">Aviachiptalar</h2>
        <div className="wrapper bg-[#ffff] shadow-xl p-6 rounded-[8px]">
          <div className="flex  gap-4">
            <button className=" active:text-white  active:bg-[#f26522] bg-[#edeaea] py-2 px-4 rounded-[6px] ">Borish</button>
            <button className=" active:text-white  active:bg-[#f26522] bg-[#edeaea] py-2 px-4 rounded-[6px] ">Qaytish</button>
          </div>
          <div className=" mx-auto max-w-[1200px]">
            <form id='form' className=''>
              <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-4  w-full ">
              <div className=''>
                <label id="label" className='text-sm font-medium text-gray-700 mx-1 '>Qayerdan</label>
                <input type="text" className='w-full border-2 border-[#9a9494] p-2 rounded-[6px] outline-none focus:border-2 focus:border-[#f26522] ' required/>
              </div>
              <div className="">
                <label id="label" className='text-sm font-medium text-gray-700 mx-1 '>Qayerga</label>
                <input type="text" className='w-full border-2 border-[#9a9494] p-2 rounded-[6px] outline-none focus:border-2 focus:border-[#f26522] 'required/>
              </div>
              <div className="">
                <label id='label' className='text-sm font-medium text-gray-700 mx-1 '>Jo'nash sanasi</label>
                <input type="date" className='w-full border-2 border-[#9a9494] p-2 rounded-[6px] outline-none focus:border-2 focus:border-[#f26522] ' required/>
              </div>
              <div className="">
                <label id="label" className='text-sm font-medium text-gray-700 mx-1 '>Yo'lovchilar</label>
                <input maxLength={4} type="number" className='w-full border-2 border-[#9a9494] p-2 rounded-[6px] outline-none focus:border-2 focus:border-[#f26522] ' required/>
              </div>
              </div>
              <button type='submit' className='border-1 rounded-[6px] py-2 px-8 w-full my-1 bg-[#f26522] font-semibold text-[18px] text-white hover:opacity-80'>Qidirish</button>
            </form>
          </div>
        </div>
        <h2 className='text-2xl font-bold text-center pt-20'>Mahhur shaharlar</h2>
        <div className="cards flex flex-col items-center gap-8 py-12 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-[320px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div><img src={tours3} alt="rasm bor" className='h-[190px] w-full object-cover' /></div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-semibold mb-2 text-[#000000]'>Dubai</h2>
              <p className='py-2 pb-4'>Zamonaviy arxitektura va hashamatli savdo markazlari</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] mt-2 py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil ma'lumot</button>
            </div>
          </div>
          <div className="max-w-[320px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div><img src={avia2} alt="rasm bor" className='h-[190px] w-full object-cover' /></div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-semibold mb-2 text-[#000000]'>Saudiya Arabistoni</h2>
              <p className='py-2 pb-6'>Umra ziyorati uchun maxsus paketlar</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] mt-2 py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil ma'lumot</button>
            </div>
          </div>
          <div className="max-w-[320px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div><img src={avia3} alt="rasm bor" className='h-[190px] w-full object-cover' /></div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-semibold mb-2 text-[#000000]'>Istanbul</h2>
              <p className='py-2 pb-4'>Tarixiy obidalar va zamonaviy madaniyat</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] mt-2 py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil ma'lumot</button>
            </div>
          </div>
          <div className="max-w-[320px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div><img src={avia4} alt="rasm bor" className='h-[190px] w-full object-cover' /></div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-semibold mb-2 text-[#000000]'>Antalya</h2>
              <p className='py-2 pb-10'>Dam olish va sohil bo'yi kurortlari</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] mt-2 py-2 px-8 cursor-pointer hover:opacity-70 btn'>Batafsil ma'lumot</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section> 
      <h2 className="text-2xl text-center font-bold mb-4">Hamkorlarimiz</h2>
      <Marquee pauseOnHover={false} speed={150} className='cursor-pointer py-4'>
        <img src={image} alt=""  className='rounded-[12px] mx-2 w-[200px] h-[120px]'/>
        <img src={qatar} alt="" className='rounded-[12px] mx-2 w-[200px] h-[120px]'/>
        <img src={uzair} alt="" className='rounded-[12px] mx-2 w-[200px] h-[120px]'/>
        <img src={turkish} alt="" className='rounded-[12px] mx-2 w-[200px] h-[120px]'/>
        <img src={image} alt=""  className='rounded-[12px] mx-2 w-[200px] h-[120px]'/>
        <img src={qatar} alt="" className='rounded-[12px] mx-2 w-[200px] h-[120px]'/>
        <img src={uzair} alt="" className='rounded-[12px] mx-2 w-[200px] h-[120px]'/>
        <img src={turkish} alt="" className='rounded-[12px] mx-2 w-[200px] h-[120px]'/>
      </Marquee>
    </section>
      
      <section>
        <div className="contact">
          <div className="container mx-auto py-10 px-4">
            <h2 className="text-center">Biz bilan bog'lanish</h2>
            <p className="text-center">Svolingiz bormi? Biz sizga yordam berishdan xursandmiz</p>
            <div className="box flex justify-between px-4">
              <div className="box1 bg-[#ffff] py-10 px-6  w-full max-w-[600px]">
                <form id="form2">
                <div className=" w-full">
                  <div className="">
                    <label>Ismingiz</label>
                    <input type="name" className='w-full border-2 border-[#727070] rounded-[6px] py-2 mt-2 mb-6 focus:border-[#f26522] outline-none' required/>
                  </div>
                  <div className="">
                    <label>Email manzilingiz</label>
                    <input type="email" className='w-full border-2 border-[#727070] rounded-[6px] py-2 mt-2 focus:border-[#f26522] outline-none' required />
                  </div>
                  <div className="">
                    <label>Telefon raqamingiz</label>
                    <input type="tel" className='w-full border-2 border-[#727070] rounded-[6px] py-2 mt-2 focus:border-[#f26522] outline-none' required/>
                  </div>
                  <div className="">
                    <label>Savolingiz</label>
                    <input type="text" className='w-full border-2 border-[#727070] rounded-[6px] py-8 mt-2 focus:border-[#f26522] outline-none' required />
                  </div>
                  <button  type='submit' className='py-2 px-6 w-full rounded-[6px] bg-[#222121] text-white my-4 hover:opacity-80'>Yuborish</button>
                </div>
                </form>
              </div>
              <div className="box2">
                <div className="aloqa">
                  <h3>Aloqa ma'lumotlari</h3>
                  <p>Manzil: Toshkent shahri Muqimiy ko'chasi 44-A uy</p>
                  <a href="tel:+998951500000"><p>Tel: +998 93 150 00 00</p></a>
                  <p>Email: info@nemoavia.uz</p>
                  <p>Ish vaqti: Du-Sha 24 soat</p>
                </div>
                <div className="map w-[600px] h-[400px] p-6 ">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2837463913424!2d69.23896297512701!3d41.28092867131355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af549caa943%3A0xb57ba020a1de5d09!2sMuqimiy%20ko%27chasi%2044%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1747656473144!5m2!1suz!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Muqimiy xaritasi"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    

  )
}

export default Home