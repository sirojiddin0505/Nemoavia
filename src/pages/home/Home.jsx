import React from 'react'

const Home = () => {
  return (
    <section>
      <div className="header bg-[#f26522] ">
        <div className="container flex flex-col justify-center items-center text-[#ffffff] py-20 p-4 mx-auto w-250">
          <h1 className="text-[55px] font-bold">Sayohatingizni biz bilan boshlang</h1>
          <p className="text-2xl text-[#ffff] py-2">Nemo Travel - huzur uchun yo'l</p>
          <div className="bg-[#ffff] rounded-full my-8 px-8 py-6 flex items-center justify-around gap-8 w-200">
            <div className="">
              <h2 className="text-[#1f2937]">Mamnun mijozlar</h2>
              <p className="font-bold text-[#1f2937]">45000+</p>
            </div>
            <div className="">
              <h2 className="text-[#1f2937]">Mamalakatlar</h2>
              <p className="font-bold text-[#1f2937]">30+</p>
            </div>
            <div className="">
              <h2 className="text-[#1f2937]">Tajriba</h2>
              <p className="font-bold text-[#1f2937]">5+ yil</p>
            </div>
            <button className='bg-[#f26522] py-2 px-8 rounded-full hover:bg-[#e85a1db1] '>Batafsil ma'lumot</button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home