import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { contacts } from '../../utils/contact'


const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">

        
        <div className="flexColStart c-left">
          <span className='primaryText'>Várjuk új Tagjainkat és Támogatóinkat.</span>
          <span className='primaryText'>Elérhetőségeink</span>
          
          <div className="flexColStart contactModes">
            
            {contacts.map(obj =>
              <div className="flexStart row">
                  
              <div className="flexColCenter mode">
                <div className="flexStart ">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail content">
                    <div className='contactcontainer'>
                      <span className='orangeText'>{obj.name}</span>
                      <img src={obj.img} alt={obj.name} className='contimg'/>
                    </div>
                    
                    <span className='secondaryText'>{obj.position}</span>
                    <span className='secondaryText'>{obj.tel}</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+36309789391">Hívjon most!</a>
                </div>
              </div>
            </div>
            )}
          <span className='primaryText foot'>Vegye fel velünk a kapcsolatot!</span>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact