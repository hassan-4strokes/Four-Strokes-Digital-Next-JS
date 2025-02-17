import React from 'react'

const WhyChooseUsCard = ({ image, heading, text }) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-3 py-10 px-8 bg-[#F3F6FE]">
      <img src={image} alt="Category Image" className="w-16" />
      <h3 className="text-center font-semibold text-xl lg:text-2xl 2xl:text-3xl">
        {heading}
      </h3>
      <p className='text-center text-sm lg:text-base 2xl:text-lg tracking-wide font-["Creato_Display"]'>
        {text}
      </p>
    </div>
  )
}

export default WhyChooseUsCard