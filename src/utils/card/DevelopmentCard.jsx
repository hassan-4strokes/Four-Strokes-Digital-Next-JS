import React from 'react'

const DevelopmentCard = ({ step }) => {
  return (
    <div className="w-full h-full flex flex-col items-start gap-3 py-10 px-8 bg-[#F3F6FE]">
      <h3 className="text-left font-semibold text-xl lg:text-2xl 2xl:text-3xl text-[#5DD1FF]">
        {step.heading}
      </h3>
      <p className='text-left text-sm lg:text-baseline 2xl:text-lg tracking-wide font-["Creato_Display"]'>
        {step.text}
      </p>
    </div>
  )
}

export default DevelopmentCard