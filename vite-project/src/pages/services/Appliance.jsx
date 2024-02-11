import React from 'react'
import Images from '../../components/Images'

const Appliance = () => {
  return (
    <div>
        <h3 className="text-2xl text-center font-medium">APPLIANCE CLEANING</h3>
        <div className="flex justify-center gap-40 ...">
            <div className="">
            <img src={Images.cleaning4} alt=""  />
            <div className="">
                <p>Interior and exterior cleaning of the refrigerator.</p>
                <button>Book Now</button>
            </div>
            </div>

            <div className="">
            <img src={Images.cleaning5} alt=""  />
            <div className="">
                <p>Oven cleaning.</p>
                <button>Book Now</button>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Appliance