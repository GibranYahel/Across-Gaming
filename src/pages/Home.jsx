import React from 'react'
import { Header } from '../components/header/Header'
import { SliderTop } from '../components/Slider/Slide'
import { Virtual } from '../components/Virtual/Virtual'
import { ClickTester } from "../components/ClickTester/ClickTester";


export const Home = () => {
  return (
    <div className='Home'>
        <Header />
        <hr />
        <SliderTop />
        <Virtual />
        <hr />
        <ClickTester />
    </div>
  )
}
