import React from 'react'
import Images from '../../components/Images'

const Baseboard = () => {
  return (
    <div>
         <h3  className="text-2xl text-center font-medium">BASEBOARD AND TRIM CLEANING</h3>  
         <div  className="flex">
            <div>
            <img src={Images.cleaning15} alt=""  />
            </div>
            <div>
                <h4>Wiping down baseboards and trim.</h4>
                <p>Cleaning your baseboards isn’t exciting. But it’s the sort of task that, when completed to a sparkling T, 
                    makes your home feel and look better.</p>
                <button>Book Now</button>
            </div>
        </div> 

        <div  className="flex">
            <div>
                <h4>Wiping down baseboards and trim.</h4>
                <p>Cleaning your baseboards isn’t exciting. But it’s the sort of task that, when completed to a sparkling T, 
                    makes your home feel and look better.</p>
                <button>Book Now</button>
            </div>
            <div>
            <img src={Images.cleaning16} alt=""  />
            </div>
        </div> 
    </div>
  )
}

export default Baseboard 