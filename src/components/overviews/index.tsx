import React from 'react'
import { FaNutritionix } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { Ri24HoursFill } from 'react-icons/ri'

const HomeOverview = () => {
  return (
    <div className='bg-slate-100 py-4 md:py-8'>
      <div className="mx-container">
        <div>
          <h2 className='text-xl md:text-2xl'>Sandwich Specialist, WHAT WE OFFER...</h2>
          <p>We Create The Sandwich Best In The Town.</p>
          <p>Your Satisfaction Is Our Satisfaction.</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-6'>
          <div className='bg-white p-3 rounded-lg'>
            <div className='flex gap-2 items-center'>
              <div className="h-8 w-8 flex items-center justify-center border rounded-md">
              <FaNutritionix />
              </div>
              <h3 className='text-xl md:text-2xl font-bold'>Nutrition Calculator</h3>
            </div>
            <p className='text-sm md:text-base'>
            Use our Nutrition Calculator to build your meal just the way you want it, to fit your lifestyle. Our Allergen Menu will help if you need to watch out for or avoid any particular ingredients. At Potbelly we don’t just make great food—we help you make the right decisions for you.
            </p>
          </div>
          <div className='bg-white p-3 rounded-lg'>
            <div className='flex gap-2 items-center'>
              <div className="h-8 w-8 flex items-center justify-center border rounded-md">
              <FaCartShopping/>
              </div>
              <h3 className='text-xl md:text-2xl font-bold'>Online Shop Everyday</h3>
            </div>
            <p className='text-sm md:text-base'>
            Our Commitment to You and Our Team At Sandwich.coo, our number one priority is the health and well-being of our team and our loyal customers. In response to the COVID-19 concerns, we want to assure you we are taking proactive steps to mitigate the spread of the virus.
            </p>
          </div>
          <div className='bg-white p-3 rounded-lg'>
            <div className='flex gap-2 items-center'>
              <div className="h-8 w-8 flex items-center justify-center border rounded-md">
              <Ri24HoursFill />
              </div>
              <h3 className='text-xl md:text-2xl font-bold'>24 Hour Service</h3>
            </div>
            <p className='text-sm md:text-base'>
            We are ready to serve you 24 hours, for your convenience and your satisfaction, trust us to reply to your message as quickly as possible.
            </p>
          </div>
        </div>

        <div className='mt-6 mx-auto max-w-xl text-center p-4 border border-dashed  bg-lime-500/10 text-lime-600 rounded-lg border-lime-400'>
          {/* tagline */}
          <p className='text-xl italic font-ligh'>
          Delicious sandwiches, always fresh and ready to be enjoyed at any time. Made with selected ingredients for satisfaction in every bite.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeOverview