import React from 'react'
import Images from '../../components/Images'

const General = () => {
  return (
    <div>
        <h3 className="text-2xl text-center font-medium">GENERAL CLEANING</h3>
        <div className="flex space-x-4 left-64 justify-between">
            <div className="">
            <img src={Images.cleaning6} alt=""  />
                <div className="bg-green-200">
                    <p>Dusting of furniture,shelves, and 
                        surfaces.
                    </p>
                    <button>Book Now</button>
                </div>
            </div>

            <div className="">
            <img src={Images.cleaning7} alt=""  />
                <div className="bg-green-200">
                    <p>Dusting of furniture,shelves, and 
                        surfaces.
                    </p>
                    <button>Book Now</button>
                </div>
            </div>

            <div className="">
            <img src={Images.bottleDisposal} alt=""  />
                <div className="bg-green-200">
                    <p>Dusting of furniture,shelves, and 
                        surfaces.
                    </p>
                    <button>Book Now</button>
                </div>
            </div>



        </div>
    </div>
  )
}

export default General