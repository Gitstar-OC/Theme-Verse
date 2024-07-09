// import React from 'react'
import { Info, Skills, Certification } from '../components/Exports'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
    <Helmet>
        <title>About - Theme Verse</title>
    </Helmet>
    <div>
      <Info />
      <Skills />
      <Certification />
    </div>
    </>
  )
}

export default About;
