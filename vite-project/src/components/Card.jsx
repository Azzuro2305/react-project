import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Card = ({id,img, title, text,path, buttonText}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path)
  }
  return (
    <div key={id}>
        <div className="bg-green-200">
            <img src={img} alt="" className="mb-6"/>
            <div className="h-44 text-center bg-# ">
              <h3 className="mb-4">{title} </h3>
              <p className="mb-6">{text}</p>
              <Button txt={buttonText} onClick={handleClick}/>
            </div>
        </div>
        
    </div>
  )
}

export default Card