'use client'

import React, { FormEvent, useState } from 'react'
import './ContactForm.css'
import { sendEmail } from '@/actions/sendEmail'

const ContactForm = () => {
  // const [firstname, setFirstname] = useState('')
  // const [lastname, setLastname] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')

  
  // const onSubmit = (e: FormEvent) => {
  //   e.preventDefault()
  //   console.log('Data', firstname, lastname, email, message)

  // onSubmit={onSubmit}
  // }

  return (
    <div className='contact-form-content '>
        <form 
        action={async (FormData) => {
          await sendEmail(FormData);
        }}
        >
            <div className='name-container'>
                <input 
                // value={firstname}
                // onChange={(e) => setFirstname(e.target.value)}
                type='text0' name='firstname' placeholder='First Name' />

                <input 
                // value={lastname}
                // onChange={(e) => setLastname(e.target.value)}
                type='text1' name='lastname' placeholder='Last Name' />
            </div>
            <input 
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            type='text' name='senderEmail' placeholder='Email' />

            <textarea  
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            name='message' placeholder='Message' rows={3} />

            <button>SEND</button>
        </form>
        </div>
  )
}

export default ContactForm