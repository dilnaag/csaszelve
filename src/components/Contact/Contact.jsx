import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'


const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">

        
        <div className="flexColStart c-left">
          <span className='primaryText'>Elérhetőségeink</span>
          <span className='primaryText'>Vegye fel velünk a kapcsolatot!</span>
          <span className='orangeText'>Várjuk új Tagjainkat és Támogatóinkat.
          </span>

          <div className="flexColStart contactModes">
            
            <div className="flexStart row">
                  {/* Kosa falu */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Dimény Renáta</span>
                    <span className='secondaryText'>+36202196340</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+36309789391">Hívjon most!</a>
                </div>
              </div>
                  {/* Elnok */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Gyánó-Válik Szimonetta</span>
                    <span className='secondaryText'>+36203959923</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+36309789391">Hívjon most!</a>
                </div>
              </div>
                  {/* Rendor falu */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Vincze Ágnes</span>
                    <span className='secondaryText'>+36202196340</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+36309789391">Hívjon most!</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact