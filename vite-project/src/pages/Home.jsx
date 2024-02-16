import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import MainVisual from '../components/MainVisual';
import Images from '../components/Images';
import LatestCard from './LatestCard';
import TestimonialCard from './TestimonialCard'


function Home() {
  const condition = [Images.whiteDot, Images.blackDot];
  const status = [false, false, true, false, false];
  const [clickValue, setClickValue] = useState(0);

  const handleClick = (e) => {
    setClickValue(1);
  }

  const latest = [
    {
      id: 1,

      img: Images.cleaning27,

      text: "Dusting of furniture , shelves , and surfaces.",

    },
    {
      id: 2,
      img: Images.dishWashing,
      text: "Wiping down countertops and surfaces.",

    },
    {
      id: 3,

      img: Images.cleaning29,

      text: "Scrubbing and sanitizing bathroom fixtures.",

    }
  ]

  const testimonial = [
    {
      id: 1,
      txt: "Lorem ipsum dolor sit amet consectetur.Maurissit amet consectetur. Mauris diamelit consectetur ipsum dolor sit",
      img: Images.profileIcon1,
      title: "Client",
      text: "Michael",

    },
    {
      id: 2,
      txt: "Lorem ipsum dolor sit amet consectetur.Maurissit amet consectetur. Mauris diamelit consectetur ipsum dolor sit",
      img: Images.profileIcon1,
      title: "Client",
      text: "Michael",

    },
    {
      id: 3,
      txt: "Lorem ipsum dolor sit amet consectetur.Maurissit amet consectetur. Mauris diamelit consectetur ipsum dolor sit",
      img: Images.profileIcon1,
      title: "Client",
      text: "Michael",

    },

  ]
  return (
    <>
      <MainVisual />
      <main className='mx-4'>
        <section className='flex justify-center align-middle space-x-5 mt-negative100px mb-50px'>
          <div className='bg-#FAFAFA rounded-20px shadow-2xl p-6'>
            <div><img src={Images.windowCleaning} className='m-auto' alt="" /></div>
            <h3 className='font-lato font-bold text-20px text-center mb-4'>Basic Cleaning</h3>
            <p className='font-poppins w-150px text-center'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='bg-#FAFAFA rounded-20px shadow-2xl p-6'>
            <div><img src={Images.laundary} className='m-auto' alt="" /></div>
            <h3 className='font-lato font-bold text-20px text-center mb-4'>Deep Cleaning</h3>
            <p className='font-poppins w-150px text-center'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='bg-#FAFAFA rounded-20px shadow-2xl p-6'>
            <div><img src={Images.dishes} className='m-auto' alt="" /></div>
            <h3 className='font-lato font-bold text-20px text-center mb-4'>Premium Cleaning</h3>
            <p className='font-poppins w-150px text-center'>Lorem ipsum dolor sit amet</p>
          </div>
        </section>

        <section className='mb-100px'>
          <h2 className='font-lato font-bold text-50px text-center'>OUR MISSION</h2>
          <div className='flex justify-center mt-50px'>
            <div className='m-auto'>
              <img src={Images.images} alt="" />
            </div>
            <div className='m-auto'>
              <h3 className='font-lato font-bold text-20px mb-5 text-center'>"Clean Like Never Before"</h3>
              <p className='font-poppins w-500px mb-5'>
                Lorem ipsum dolor sit amet ipsum dolor
                sit amet ipsum dolor sit amet sit amet
                ipsum dolor sit amet dolor sit amet Lorem
                ipsum dolor sit amet ipsum dolor sit amet
                ipsum dolor sit amet sit amet ipsum dolor
                sit amet dolor sit amet
              </p>
              <p className='font-poppins w-500px mb-5'>
                Lorem ipsum dolor sit amet ipsum dolor
                sit amet ipsum dolor sit amet sit amet
                ipsum dolor sit amet dolor sit amet Lorem
                ipsum dolor sit amet ipsum dolor sit amet
                ipsum dolor sit amet sit amet ipsum dolor
                sit amet dolor sit amet
              </p>
              <p className='font-poppins w-500px mb-5'>
                Lorem ipsum dolor sit amet ipsum dolor
                sit amet ipsum dolor sit amet sit amet
                ipsum dolor sit amet dolor sit amet Lorem
                ipsum dolor sit amet ipsum dolor sit amet
                ipsum dolor sit amet sit amet ipsum dolor
                sit amet dolor sit amet
              </p>
              <p className='font-poppins w-500px mb-5'>
                Lorem ipsum dolor sit amet ipsum dolor
                sit amet ipsum dolor sit amet sit amet
                ipsum dolor sit amet dolor sit amet Lorem
                ipsum dolor sit amet ipsum dolor sit amet
                ipsum dolor sit amet sit amet ipsum dolor
                sit amet dolor sit amet
              </p>
            </div>
          </div>
        </section>

        <section className='mb-100px'>
          <h2 className='font-lato font-bold text-50px text-center'>LATEST SERVICES</h2>
          <div className='flex justify-center space-x-100px mt-50px'>
            {

              latest.map((item) =>

                <LatestCard id={item.id} img={item.img} title={item.title} text={item.text} />
              )
            }
          </div>
          <div className='text-center my-6'>
            <Link to="/service">
              <Button txt={"See More"} />
            </Link>
          </div>
        </section>

        <section className='mb-200px'>
          <h2 className='font-lato font-bold text-50px text-center'>TESTIMONIALS</h2>
          <div className='flex justify-center space-x-125px mt-50px'>              {
                testimonial.map((item) =>

                  <TestimonialCard id={item.id} txt={item.txt} img={item.img} title={item.title} text={item.text}  />
                )
              }
            </div>
          <div className='flex justify-center space-x-5 mt-50px'>
            <button onClick={handleClick}>
              <img src={condition[clickValue]} alt="" />
            </button>
            <button onClick={handleClick}>
              <img src={condition[clickValue]} alt="" />
            </button>
            <button onClick={handleClick}>
              <img src={condition[clickValue]} alt="" />
            </button>
            <button onClick={handleClick}>
              <img src={condition[clickValue]} alt="" />
            </button>
            <button onClick={handleClick}>
              <img src={condition[clickValue]} alt="" />
            </button>
          </div>
        </section>

      </main>
    </>
  )
}

export default Home