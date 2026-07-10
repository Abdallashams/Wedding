import React from 'react'
import './Home.css'
import HeroText from './HeroText'
import { motion } from "motion/react";
import Flower_piller from './Flower_piller';



export default function Home() {
  return (
    <>
    <div className='home relative' >
    <img src='./image/Home.webp'/>
        <HeroText className='absolute'/>
    <Flower_piller  className='absolute'/>
    
  </div>
 

    


  </>
  )
}
