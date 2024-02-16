import React from 'react'
import Images from '../../components/Images'
import Title from '../../components/Title'
import Card1 from '../../components/Card1'

const General = () => {

    const general1 = [
        {
            id: 1,
            path: '/booking',
            img: Images.cleaning6,
            text: "Dusting of furniture,shelves, and surfaces.",
            buttonText: "Book Now"
        },
        {
            id: 2,
            path: '/booking',
            img: Images.cleaning7,
            text: "Dusting of furniture,shelves, and surfaces.",
            buttonText: "Book Now"
        },
        {
            id: 3,
            path: '/booking',
            img: Images.bottleDisposal,
            text: "Scrubbing and sanitizing bathroom fixtures.",
            buttonText: "Book Now"
        },
    ]
    return (
        <div>
            <Title title = "our service"/>
            <h3 className="text-3xl text-center font-bold mb-10 mt-10">GENERAL CLEANING</h3>
            <div className="flex space-x-4 left-64 justify-between p-9">
                {

                    general1.map((item) =>

                        <Card1 id={item.id} img={item.img}  text={item.text} buttonText={item.buttonText} path={item.path} />
                    )
                }
            </div>
        </div>
    )
}

export default General