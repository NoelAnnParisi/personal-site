import React, {Component} from 'react'
import styled from 'styled-components'

import P from 'react-particles-js'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <P
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 946.9771699587272,
              },
            },
            color: {
              value: '#bc8f8f',
            },
            shape: {
              type: 'triangle',
              stroke: {
                width: 1.5,
                color: '#FFEEEE',
              },
              polygon: {
                nb_sides: 3,
              },
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: true,
                speed: 0,
                opacity_min: 0.19489853095232282,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 0,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 160,
              color: '#bc8f8f',
              opacity: 0.8,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'top',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 721.5354273894853,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <Banner />
    </div>
  )
}

export default Home
