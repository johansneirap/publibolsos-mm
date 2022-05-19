import React from 'react'
import { motion } from "framer-motion";


export const InfoCard = ({ title, legend, fMotion={} }) => {
  return (
    <motion.div
      className='info-card'
      initial={ fMotion.initial || null }
      animate={ fMotion.animate }
      transition={ fMotion.transition || null}
    >
      <h2 
        className='title' 
        // style={{ color: '#1C46A1'}}
        >{ title }</h2>
        <span className='legend'>{ legend }</span>
    </motion.div>
  )
}
