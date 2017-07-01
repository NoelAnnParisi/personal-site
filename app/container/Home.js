import React, {Component} from 'react'
import styled from 'styled-components'

import P from 'react-particles-js'
import Nav from '../components/Nav'

const NavBar = styled.section`
  display:flex;
  height:100%;
  justify-content:center;
  align-items:center;
`

const Home = () => {
  return (
    <div>
      <P
        params={{
          particles: {
            number: {
              value: 71,
              density: {
                enable: true,
                value_area: 946.9771699587272
              }
            },
            color: {
              value: '#db7093'
            },
            shape: {
              type: 'triangle',
              stroke: {
                width: 1,
                color: '#db7093'
              },
              polygon: {
                nb_sides: 3
              }
            },
            opacity: {
              value: 0.12827296486924183,
              random: false,
              anim: {
                enable: true,
                speed: 9.90734199007641,
                opacity_min: 0.19489853095232282,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 192.40944730386272,
              color: '#db7093',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.603412060865523,
              direction: 'top',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 721.5354273894853,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              },
              onclick: {
                enable: false,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
      <Nav />
    </div>
  )
}

export default Home

//width: '100%',
//height: '100%'
