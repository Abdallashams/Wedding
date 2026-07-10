import React from 'react'
import './Pillar.css'
import { motion } from "motion/react";

export default function Flower_piller() {
  return (
    <>
    <motion.div
      className="flower-pillar"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img src="/image/Pillar_flower.png" alt="Flower Pillar" />
    </motion.div>
  
    </>
  )
}
