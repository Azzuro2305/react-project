import React from 'react'
import Images from '../components/Images'

const Service = () => {
    return (
        <div>
            <h3 className="text-2xl text-center font-medium">BASIC CLEANING</h3>
            <div className="flex space-x-4 left-64 justify-between ">
                <div className='general'>
                    <img src={Images.cleaning23} alt="" />
                    <div className="bg-green-200">
                        <h4>General Cleaning</h4>
                        <p>Dusting of furniture , shelves , and surfaces.</p>
                        <button>See More</button>
                    </div>
                </div>
                <div className='kitchen'>
                    <img src={Images.cleaning24} alt=""  />
                    <div className="bg-green-200">
                        <h4>Kitchen  Cleaning</h4>
                        <p>Wiping down countertops and    surfaces.</p>
                        <button>See More</button>
                    </div>
                </div>
                <div className='bathroom'>
                    <img src={Images.cleaning25} alt="" />
                    <div className="bg-green-200">
                        <h4>Bathroom Cleaning</h4>
                        <p>Scrubbing and sanitizing bathroom fixtures.</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl text-center font-medium">DEEP CLEANING</h3>
            <div className="flex space-x-4 left-64 justify-between ">
                <div className='appliance'>
                    <img src={Images.cleaning17} alt=""  />
                    <div className="bg-green-200">
                        <h4>Appliance Cleaning</h4>
                        <p>Interior and exterior cleaning of the refrigerator.</p>
                        <button>See More</button>
                    </div>
                </div>
                <div className='baseboard'>
                    <img src={Images.cleaning18} alt=""  />
                    <div className="bg-green-200">
                        <h4>Baseboard and Trim Cleaning</h4>
                        <p>Cleaning your baseboards isn’t exciting. But it’s the sort.</p>
                        <button>See More</button>
                    </div>
                </div>
                <div className='window'>
                    <img src={Images.cleaning19} alt="" />
                    <div className="bg-green-200">
                        <h4>Window Cleaning</h4>
                        <p>Cleaning interior windows and window sills.</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl text-center font-medium">PREMIUM CLEANING</h3>
            <div className="flex space-x-4 left-64 justify-between ">
                <div className='appliance'>
                    <img src={Images.cleaning20} alt="" />
                    <div className="bg-green-200">
                        <h4>Carpet Cleaning</h4>
                        <p>Carpet cleaning is performed to remove stain allergens .</p>
                        <button>Book Now</button>
                    </div>
                </div>
                <div className='additional'>
                    <img src={Images.cleaning22} alt="" />
                    <div className="bg-green-200">
                        <h4>Additional Room Cleaning</h4>
                        <p>Cleaning of additional rooms like a homeoffice or guest .</p>
                        <button>Book Now</button>
                    </div>
                </div>
                <div className='furniture'>
                    <img src={Images.cleaning21} alt="" />
                    <div className="bg-green-200">
                        <h4>Furniture Upholstery Cleaning</h4>
                        <p>Vacuuming and spot cleaning of upholstery.</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )




export default Service