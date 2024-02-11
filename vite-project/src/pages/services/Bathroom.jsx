import React from 'react'
import Images from '../../components/Images'

const Bathroom = () => {
  return (
    <div>
        <h3 className="text-2xl text-center font-medium">BATHROOM CLEANING</h3>

        {/* <div className="flex space-x-4 left-64 justify-between"> */}
        <div className=" flex gird grid-cols-4 gap-40 items-stretch content-center ...">
            <div className="">
            <img src={Images.cleaning11} alt=""  />
                <div>
                    <p>Scrubbing and sanitizing bathroom fixtures.
                    </p>
                    <button>Book Now</button>
                </div>
            </div>

            <div className="">
            <img src={Images.cleaning12} alt=""  />
                <div >
                    <p>Dusting of furniture,shelves, and 
                        surfaces.
                    </p>
                    <button>Book Now</button>
                </div>
            </div>

            <div className="">
            <img src={Images.cleaning13} alt=""  />
                <div>
                    <p>Dusting of furniture,shelves, and 
                        surfaces.
                    </p>
                    <button>Book Now</button>
                </div>
            </div>
       

        <div className="">
            <img src={Images.cleaning14} alt=""  />
                <div>
                    <p>Dusting of furniture,shelves, and 
                        surfaces.
                    </p>
                    <button className=" flex justify-center ">Book Now</button>
                </div>
        </div>



        </div>

    </div>
  )
}

export default Bathroom