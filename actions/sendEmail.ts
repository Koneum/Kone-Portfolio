'use server'

import React from "react";
import EmailNameProps from "@/utils/EmailNameProps";
import { validateString } from "@/utils/validateString";
import { error } from "console";
import { Resend } from "resend";

const resend = new Resend (process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(firstname, 500)) {
        return {
            error: 'Invalid message',
        }
    }
    if (!validateString(lastname, 500)) {
        return {
            error: 'Invalid message',
        }
    }
    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid message',
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid Message'
        }
    }
    
   try {
    await resend.emails.send({
        from: 'Kone Portfolio <onboarding@resend.dev>',
        to: 'prokonemoussa@gmail.com',
        subject: 'Message from koneportfolio',
        reply_to: senderEmail as string,
        react: React.createElement(EmailNameProps, {
            firstname: firstname as string,
            lastname: lastname  as string,
            senderEmail: senderEmail  as string,
            message: message as string,
        })
        // react: <EmailNameProps firstname{firstname} lastname{lastname} senderEmail{senderEmail} message{message}/>
        
    })
    console.log('====================================');
        console.log('value');
        console.log('====================================');
} catch (error) {
    console.log(error);
}
   }