import React from 'react'
import Maincarousel from '../../component/HomeCarousel/Maincarousel'
import HomeSectionCarousel from '../../component/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
        <Maincarousel />

        <div className='space-y-10 py-20 flex flex-col justify-center'>
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
        </div>
    </div>
  )
}

export default HomePage