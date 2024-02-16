import React from 'react'
import Images from '../components/Images'
import Button from '../components/Button'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Basic = [
    {
        id: 1,
        path:'/general',
        img: Images.cleaning23,
        title: "General Cleaning",
        text: "Dusting of furniture , shelves , and surfaces.",
        buttonText: "See More"
    },
    {
        id: 2,
        path:'/kitchen',
        img: Images.cleaning24,
        title: "Kitchen  Cleaning",
        text: "Wiping down countertops and surfaces.",
        buttonText: "See More"
    },
    {
        id: 3,
        path:'/bathroom',
        img: Images.cleaning25,
        title: "Bathroom Cleaning",
        text: "Scrubbing and sanitizing bathroom fixtures.",
        buttonText: "See More"
    },
]
const Deep = [
    {
        id: 1,
        path:'/appliance',
        img: Images.cleaning17,
        title: "Appliance Cleaning",
        text: "Interior and exterior cleaning of the refrigerator.",
        buttonText: "See More"
    },
    {
        id: 2,
        path:'/baseboard',
        img: Images.cleaning18,
        title: "Baseboard Cleaning",
        text: "Cleaning your baseboards isn’t exciting. But it’s the sort.",
        buttonText: "See More"
    },
    {
        id: 3,
        path:'/window',
        img: Images.cleaning19,
        title: "Windows Cleaning",
        text: "Cleaning interior windows and window sills.",
        buttonText: "See More"
        
    }]
const Premium = [
    {
        id: 1,
        path:'/booking',
        img: Images.cleaning20,
        title: "Carper Cleaning",
        text: "Cleaning your carpet isn’t exciting. But it’s the sort.",
        buttonText: "Book Now"
    },
    {
        id: 2,
        path:'/booking',
        img: Images.cleaning22,
        title: "Additional Room Cleaning",
        text: "Cleaning of additional rooms like a homeoffice or guest .",
        buttonText: "Book Now"
    },
    {
        id: 3,
        path:'/booking',
        img: Images.cleaning21,
        title: "Furniture Cleaning",
        text: "Vacuuming and spot cleaning of upholstery.",
        buttonText: "Book Now"
    },
]


const Service = () => {

    return (
        <div>
             <Title title = "our service"/>
             <h2 className="text-3xl text-center font-bold mb-10">BASIC CLEANING</h2>
            <div className="flex content-center justify-center gap-16 mb-6 ">
                {

                    Basic.map((item) =>

                        <Card id={item.id} img={item.img} title={item.title} text={item.text} buttonText={item.buttonText} path={item.path}/>
                    )
                }
            </div>
            <h2 className="text-3xl text-center font-bold mb-10">DEEP CLEANING</h2>
            <div className="flex content-center justify-center gap-16 mb-6">
                {
                    Deep.map((item) =>

                        <Card id={item.id} img={item.img} title={item.title} text={item.text} buttonText={item.buttonText}  path={item.path}/>
                    )
                }
            </div>
            <h2 className="text-3xl text-center font-bold mb-10">PREMIUM CLEANING</h2>
            <div className="flex content-center justify-center gap-16 mb-6">
                {
                    Premium.map((item) =>

                        <Card id={item.id} img={item.img} title={item.title} text={item.text} buttonText={item.buttonText}  path={item.path}/>
                    )
                }
            </div>
        </div>



    )
}

export default Service