import React from 'react'

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
        </div>
      </div>
    </section>

  )
}

export default About