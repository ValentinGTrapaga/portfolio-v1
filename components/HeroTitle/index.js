import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const HeroTitle = ({ stringsToType }) => {
  return (
    <>
      <TypewriterComponent
        options={{
          strings: stringsToType,
          autoStart: true,
          loop: true
        }}
      />
    </>
  )
}

export default HeroTitle
