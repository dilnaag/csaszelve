import React from 'react'

const Gmaps = () => {
  return (
    <div className=" innerWidth flexCenter gmaps">
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21815.18118102702!2d19.681478306658285!3d46.88506210246918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743da508b70892d%3A0x7de8e3392abd8367!2zS2Vjc2tlbcOpdCwgU3plbnQgTMOhc3psw7MtdsOhcm9zLCA2MDAw!5e0!3m2!1shu!2shu!4v1709101545308!5m2!1shu!2shu"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
    </div>
  )
}

export default Gmaps