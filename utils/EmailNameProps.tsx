import React from 'react'
import {
    Html,
    Body,
    Head,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Heading,
} from '@react-email/components';
import { Tailwind } from '@react-email/components';

type EmailNameProps ={
    firstname: string,
    lastname: string,
    senderEmail: string,
    message: string,
}

const EmailNameProps = ({
    firstname, lastname, senderEmail, message,
  }: EmailNameProps) => {
  return (
    <Html>
      <Head>
        <Preview>New Message from your portfolio</Preview>
        <Tailwind>
          <Body>
            <Container>
              <Section>
                <Heading>You received the following message from the contact
                </Heading>
                <Text>{firstname}, {lastname}, {senderEmail}, {message}</Text>
                <Hr />
                <Text>The senders email is: {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  )
}

export default EmailNameProps