import React from 'react'
import Button from './Button';
import Images from './Images';
import mainvisual from '../assets/landingBg.png';

function MainVisual() {
  return (
    <>
      <div className='h-800px bg-cover flex' style={{ backgroundImage: `url(${mainvisual})`}}>
        <div className='my-auto mx-40'>
            <h2 className='font-lato text-50px py-4 text-white font-bold'>Cleaning Service</h2>
            <p className='font-poppins text-24px py-4 text-white w-300px'>
                We are here to serve for 
                whatever you need
            </p>
            <div className='flex space-x-4'>
                <Button txt={"Book Now"}/>
                <Button txt={"Learn More"}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default MainVisual