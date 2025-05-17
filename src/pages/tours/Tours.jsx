import React from 'react'
import tours1 from '../images/about1.jpg'

const Tours = () => {
  return (
    <section>
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Turlar</h1>
        <p className="text-xl text-gray-600 text-center mb-10">Eng yaxshi sayohat turlari</p>
        <div className="cards flex flex-col items-center gap-8 sm:grid grid-cols-2 lg:grid-cols-4">
          <div className="max-w-[550px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div>
              <img src={tours1} alt="rasm bor" className='h-[190px] w-full object-cover' />
            </div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-bold'>O'zbekiston bo'ylab sayohat</h2>
              <p className='py-2 mb-4'>O'zbekistonning tarixiy va ma'daniy shaharlari bo'ylab sayohat</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] py-2 px-8'>Batafsil</button>
            </div>
          </div>
          <div className="max-w-[550px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div>
              <img src={tours1} alt="rasm bor" className='h-[190px] w-full object-cover' />
            </div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-bold'>O'zbekiston bo'ylab sayohat</h2>
              <p className='py-2 mb-4'>O'zbekistonning tarixiy va ma'daniy shaharlari bo'ylab sayohat</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] py-2 px-8'>Batafsil</button>
            </div>
          </div>
          <div className="max-w-[550px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div>
              <img src={tours1} alt="rasm bor" className='h-[190px] w-full object-cover' />
            </div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-bold'>O'zbekiston bo'ylab sayohat</h2>
              <p className='py-2 mb-4'>O'zbekistonning tarixiy va ma'daniy shaharlari bo'ylab sayohat</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] py-2 px-8'>Batafsil</button>
            </div>
          </div>
          <div className="max-w-[550px] rounded-[12px] border-2 border-[#f26522] overflow-hidden">
            <div>
              <img src={tours1} alt="rasm bor" className='h-[190px] w-full object-cover' />
            </div>
            <div className="py-4 px-6">
              <h2 className='text-xl font-bold'>O'zbekiston bo'ylab sayohat</h2>
              <p className='py-2 mb-4'>O'zbekistonning tarixiy va ma'daniy shaharlari bo'ylab sayohat</p>
              <button className='bg-[#f26522] rounded-full text-[#ffffff] py-2 px-8'>Batafsil</button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Tours