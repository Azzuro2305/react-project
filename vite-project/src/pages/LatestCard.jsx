import React from 'react'

import { useNavigate } from 'react-router-dom'

const LatestCard = ({id,img, text}) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(path)
//   }
  return (
    <div key={id}>
        <div>
        <img src={img} alt="" className="mb-6 shadow-custom1"/>
            <div className="text-center  ">
              <p className="mb-6 font-poppins font-bold text-center text-20px mt-8">{text}</p>
            </div>
        </div> 
        
    </div>
  )
}

export default LatestCard