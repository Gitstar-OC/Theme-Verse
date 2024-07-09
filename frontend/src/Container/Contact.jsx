// import React from 'react'
import { ContactForm } from '../components/Exports'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Theme Verse</title>
      </Helmet>
      <ContactForm />
    </>
  )
}

export default Contact
