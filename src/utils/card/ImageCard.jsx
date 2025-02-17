import React from 'react'

const ImageCard = ({ image, size }) => {
  return (
    <div className='w-full flex items-center justify-center rounded-xl p-5 border-[1px] border-zinc-300'>
        <img src={image} alt="Customers" className={`w-${size}`} />
    </div>
  )
}

export default ImageCard