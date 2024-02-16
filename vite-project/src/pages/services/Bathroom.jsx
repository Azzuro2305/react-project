import React from 'react'
import Title from '../../components/Title'
import Images from '../../components/Images'
import Card1 from '../../components/Card1'

const Bathroom = () => {
  const bathroom1 = [
    {
      id: 1,
      path: '/booking',
      img: Images.cleaning11,
      text: "Scrubbing and sanitizing bathroom fixtures.",
      buttonText: "Book Now"
    },
    {
      id: 2,
      path: '/booking',
      img: Images.cleaning12,
      text: "Cleaning of mirrosrs",
      buttonText: "Book Now"
    },
    {
      id: 3,
      path: '/booking',
      img: Images.cleaning13,
      text: "Wiping down countertops.",
      buttonText: "Book Now"
    },
    {
      id: 4,
      path: '/booking',
      img: Images.cleaning14,
      text: "Mopping floors.",
      buttonText: "Book Now"
    },
  ]
  return (
    <div>
      <Title title="our service" />
      <h3 className="text-3xl text-center font-bold mb-10 mt-10">BATHROOM CLEANING</h3>
      <div className="flex content-center justify-center gap-10 mb-12">
        {

          bathroom1.map((item) =>

            <Card1 id={item.id} img={item.img} text={item.text} buttonText={item.buttonText} path={item.path} />
          )
        }


      </div>
    </div>
  )
}

export default Bathroom