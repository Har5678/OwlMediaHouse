import React from 'react'
import { assets } from '../../assets/assets'

const AboutHome = () => {
  return (
    <div className="relative w-screen min-h-screen flex items-center justify-center text-center   overflow-hidden">
          {/* Background Scroll Wrapper */}
          <div className="absolute w-full h-full top-0 left-0 flex bg-container">
            <div
              className="flex-1 w-screen h-full bg-cover bg-no-repeat bg-moving"
              style={{ backgroundImage: `url(${assets.Banner})` }}
            ></div>
            <div
              className="flex-1 w-screen h-full bg-cover bg-no-repeat bg-moving"
              style={{ backgroundImage: `url(${assets.Banner})` }}
            ></div>
          </div>
    
          
        </div>
  )
}

export default AboutHome