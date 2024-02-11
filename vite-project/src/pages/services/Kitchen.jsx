import React from 'react'
import Images from '../../components/Images'
const Kitchen = () => {
    return (
        <div>
            <h3 className="text-2xl text-center font-medium">KITCHEN  CLEANING</h3>

            <div className="flex space-x-96">
                <div>
                    <img src={Images.cleaning8} alt="" />
                    <div>
                        <p>Wiping down countertops and surfaces.</p>
                        <button>Book Now</button>
                    </div>
                </div>

                <div>
                    <img src={Images.room4} alt="" />
                    <div>
                        <p>Cleaning kitchen appliances.</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>

            <div className="flex space-x-96">
                <div>
                    <img src={Images.cleaning9} alt="" />
                    <div>
                        <p>Sanitizing sinks and faucets.</p>
                        <button>Book Now</button>
                    </div>
                </div>

                <div>
                    <img src={Images.cleaning10} alt="" />
                    <div>
                        <p>Cleaning the exterior of kitchen cabinets.</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Kitchen