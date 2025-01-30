import Image from 'next/image'
import React from 'react'
import { Radial } from './shadCharts/Radial'

const Guide = () => {
  return (
    <section className="flexCenter flex-col mb-10">
      <div className="mt-20 padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] text-blue-900">Farm <i>Smarter</i>, not harder</h2>
          <p className="regular-18 text-gray-30 xl:max-w-[520px]">
          With our AI-powered shrimp farming system, you’ll never have to worry about water quality, disease, or shrimp health again. Our predictive analytics ensure optimal conditions with real-time monitoring and automated adjustments, even offline. Maximize efficiency, sustainability, and productivity with data-driven insights. Join the future of shrimp farming and experience smarter, more efficient aquaculture today.          </p>
        </div>
      </div>

    
      <div className="flex max-container w-full gap-10 items-center">
     
        <div className="w-full lg:w-[80%]">
          <Image
            src="/img-farm.jpg"
            alt="farm"
            width={1440}
            height={800} 
            quality={100} 
            className="w-full h-[600px] object-cover object-center 2xl:rounded-5xl"
          />
        </div>

     
        <div className="w-full lg:w-[30%] flex items-center justify-center">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"> 
            <Radial />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
