import React from 'react'

const TestimonialCard = ({id,txt,img,title,text}) => {
    
    return (
            <div className='border-2 rounded-20px border-black p-10' key={id}>
              <div>
                <p className='w-300px mb-8' >
                {txt}
                </p>
              </div>
              <hr className='border-black' />
              <div className='flex space-x-6 mt-2'>
                <div>
                  <img src={img} alt="" />
                </div>
                <div>
                  <h3 className='font-lato font-bold text-24px mb-2'>{title}</h3>
                  <p className='font-poppins'>{text}</p>
                </div>
              </div>
            </div>
    )
}

export default TestimonialCard