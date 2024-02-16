import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Card1 = ({id,img, text,path, buttonText}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path)
  }
  return (
    <div key={id}>
        <div>
        <img src={img} alt="" className="mb-6"/>
            <div className="text-center  ">
              <p className="mb-6">{text}</p>
              <Button txt={buttonText} onClick={handleClick}/>
            </div>
        </div> 
        
    </div>
  )
}

export default Card1