import React from 'react'

export const NewsLetter = () => {
  return (
    <div className='w-full py-6 text-white px-4'>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className='lg:col-span-2 my-7'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>¿Quieres saber nuestros trucos & estrategias?</h1>
          <p className='mt-3'>Únete a nuestro boletín de noticias para estar al día.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Email@example.com' />
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Notificarme</button>
          </div>
          <p className="">Nos preocupamos por la protección de tus datos. Lea nuestras <span className='text-[#00dd63] underline cursor-pointer'>Políticas de Privacidad.</span></p>
        </div>
      </div>
    </div>
  )
}
