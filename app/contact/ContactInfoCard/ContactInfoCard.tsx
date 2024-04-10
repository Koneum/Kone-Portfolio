import React from 'react'
import './ContactInfoCard.css'

interface Props {
    iconUrl: string;
    text: string;
  }

const ContactInfoCard = ({iconUrl, text}: Props) => {
  return (
    <div className='contact-details-card '>
        <div className='icon'>
            <img src={iconUrl} alt={text} />
        </div>

        <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard
