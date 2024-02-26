import React from 'react'
import './Head.css'
import { motion } from 'framer-motion'


const Head = () => {
  return (
    <div className="head-wrapper">
      <div className="paddings innerWidth flexCenter head-container ">

        <div className="flexColStart head-left">
          <div className="head-title">
           
            <motion.h1
              initial={{y:"2rem", opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration: 1,
                type: "spring"
              }}
            >
                Családok
                <br/>
                a Szent László Városrészért  <br/>
                Egyesület
            </motion.h1>
          </div>

          <div className="flexColStart head-desc">
            <h3>2023-ban megalakult egyesületünk várja új tagjait</h3>
            <span className='brightText'>A célunk a városrészünk élhetőbbé tétele</span>
          </div>

        </div>


        <div className="flexCenter hero-right">
          <motion.div 
            initial={{x:"7rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"
            }} 
            className="img-container">
            <img src="./logo.jpg" alt="" />
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Head