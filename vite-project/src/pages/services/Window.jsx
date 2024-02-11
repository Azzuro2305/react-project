import React from 'react'
import Images from '../../components/Images'
const Window = () => {
  return (
    <div>
        <h3 className="text-2xl text-center font-medium">WINDOW CLEANING</h3>
        <div className="flex">
        <div>
            <img src={Images.cleaning28} alt=""  />
        </div>
        <div>
            <p>Cleaning interior windows and window sills.</p>
            <button>Book Now</button>
        </div>
        </div>

    </div>
  )
}

export default Window