import React from 'react'
import Images from '../../components/Images'
import Title from '../../components/Title'
import Card1 from '../../components/Card1'

const Appliance = () => {
  const appliance1 = [
    {
      id: 1,
      path: '/booking',
      img: Images.cleaning4,
      text: "Interior and exterior cleaning of the refrigerator.",
      buttonText: "Book Now"
    },
    {
      id: 2,
      path: '/booking',
      img: Images.cleaning5,
      text: "Oven cleaning.",
      buttonText: "Book Now"
    },
  ]
  return (
    <div>
      <Title title="our service" />
      <h3 className="text-3xl text-center font-bold mb-10 mt-10">APPLIANCE CLEANING</h3>
      <div className="flex justify-center gap-40 mb-12 ...">
        {

          appliance1.map((item) =>

            <Card1 id={item.id} img={item.img} text={item.text} buttonText={item.buttonText} path={item.path} />
          )
        }

      </div>
    </div>
  )
}

export default Appliance