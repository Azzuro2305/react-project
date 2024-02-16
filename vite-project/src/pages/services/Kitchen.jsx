import React from 'react'
import Title from '../../components/Title'
import Images from '../../components/Images'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Card1 from '../../components/Card1'

const Kitchen = () => {
    const kitchen1 = [
        {
            id: 1,
            path: '/booking',
            img: Images.cleaning8,
            text: "Wiping down countertops and surfaces.",
            buttonText: "Book Now"
        },
        {
            id: 2,
            path: '/booking',
            img: Images.room4,
            text: "Cleaning kitchen appliances.",
            buttonText: "Book Now"
        },
    ]
    const kitchen2 = [
        {
            id: 1,
            path: '/booking',
            img: Images.cleaning9,
            text: "Sanitizing sinks and faucets..",
            buttonText: "Book Now"
        },
        {
            id: 2,
            path: '/booking',
            img: Images.cleaning10,
            text: "Cleaning the exterior of kitchen cabinets",
            buttonText: "Book Now"
        },
    ]
    return (
        <div>
            <Title title="our service" />
            <h3 className="text-3xl text-center font-bold mb-10 mt-10">KITCHEN  CLEANING</h3>

            <div className="flex content-center justify-center gap-56 mb-12">
                {

                    kitchen1.map((item) =>

                        <Card1 id={item.id} img={item.img} text={item.text} buttonText={item.buttonText} path={item.path} />
                    )
                }
            </div>

            <div className="flex content-center justify-center gap-56 mb-12">
                {

                    kitchen2.map((item) =>

                        <Card1 id={item.id} img={item.img} text={item.text} buttonText={item.buttonText} path={item.path} />
                    )
                }
            </div>
        </div>
    )
}

export default Kitchen