import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import './Goals.css'
import data from '../../utils/intro.json'
import { sliderSettings } from '../../utils/common'

const Goals = () => {
  return (
    <div className="r-wrapper">
      <div className="paddings innerWidth r-container">

        <div className='r-head flexColStart'>
          <span className='orangeText'>Céljaink</span>
        </div>

        <Swiper {...sliderSettings}>

          <SliderButtons />

          {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} 
                  alt="miss" 
                  height={200}
                  />

                  <span className='secondatyText r-price'>                   
                    <span>{card.db}</span>
                    <span style={{ color: 'green' }}> számára</span>
                  </span>

                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      
      </div>
    </div>
  )
}

export default Goals

const SliderButtons = () => {

  const swiper = useSwiper();

  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}> &lt; </button>
      <button onClick={()=> swiper.slideNext()}> &gt; </button>
    </div>
  )
}