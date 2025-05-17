import React from 'react'
import about1 from '../images/about1.jpg'
import about2 from '../images/about2.jpg'
import about3 from '../images/about3.jpg'

const About = () => {
  return (
    <section>
      <div className="header">
        <div className="container mx-auto  py-8">
          <h1 className="font-bold text-4xl mb-6 text-center">Biz haqimizda</h1>
          <p className="text-xl text-gray-600 text-center mb-16">Sizning ishonchli sayohat hamkoringiz</p>
          <div className="box flex gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Bizning vazifamiz</h3>
              <p className="text-gray-600">Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Bizning maqsadlarimiz</h3>
              <p className="">O'zbekistondagi yetakchi sanoat kompaniyasiya aylanish va xalqaro miqyosda tan olingan brend bo'lish</p>
            </div>
          </div>
          <div className="boxs">
            <div className="text-gray-600 leading-">
              <p className="">Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga yetkazib, unutilmas xotiralar yaratishga yordam beramiz. Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik aviakompaniyalar bilan hamkorlik qiladi.</p>
              <p className="">Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling! Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda), Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda, Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam olish BAAda, Turlar Bali oroliga va dam olish Bali orolida, Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga va dam olish Indoneziyada.</p>
            </div>
            <div className="">
              <img src={about1} className='w-20 h-64' alt="" />
              <span>
                <img src={about2} alt="#" className='w-20'/>
                <img src={about3} alt="#" className='w-20' />
              </span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-12">Bizning jamoa</h2>
          <div className="flex justify-between gap-8"> 
            <div className="text-xl font-medium text-gray-800 p-8 bg-[#ffffff] text-center w-[250px] rounded-lg shadow-lg">Direktor</div>
            <div className="text-xl font-medium text-gray-800 p-8 bg-[#ffffff] text-center w-[250px] rounded-lg shadow-lg">Yurist</div>
            <div className="text-xl font-medium text-gray-800 p-8 bg-[#ffffff] text-center w-[250px] rounded-lg shadow-lg">Operator</div>
            <div className="text-xl font-medium text-gray-800 p-8 bg-[#ffffff] text-center w-[250px] rounded-lg shadow-lg">Adminstrator</div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About