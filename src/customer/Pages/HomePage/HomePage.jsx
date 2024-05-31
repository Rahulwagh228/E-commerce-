import React from 'react'
import Maincarousel from '../../component/HomeCarousel/Maincarousel'
import HomeSectionCarousel from '../../component/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
        <Maincarousel />

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
        </div>
    </div>
  )
}

export default HomePage