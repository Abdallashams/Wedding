import React from 'react'
import { motion } from "motion/react";
import './Text.css'
// export default function HeroText() {
//   return (
//     <>
//     <motion.h1 className="text-4xl font-medium"
//                     initial={{ opacity: 0, y: 0 }}
//                     animate={{ opacity: 1, y: 50 }}
//                     transition={{ delay: .8 }}
//                 >Hi i'm Abdalla
//     </motion.h1>
//     </>
//   )
// }
export default function HeroText() {
  return (
    <>
    <motion.h1 className='Names'
     initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 50 }}
                    transition={{ delay: .8 }}

    >
      Yasmeen
       & 
       Ahmed
    </motion.h1>
    <motion.h2 className='desc'
     initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 50 }}
                    transition={{ delay: .8 }}
  
  
    >
      Two Bodies & One Soul
    </motion.h2>
    </>
  );
}