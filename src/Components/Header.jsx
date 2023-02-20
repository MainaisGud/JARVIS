import React, { useEffect } from 'react'
import Granim from 'granim'
import '../styles/Header.css'

const Header = () => {
  useEffect(() => {
    new Granim({
      element: '#logo-canvas1',
      direction: 'diagonal',
      opacity: [1, 1],
      states: {
        'default-state': {
          gradients: [
            ['#2958AE', '#FF0091'],
            ['#FB8800', '#FFFF00'],
            ['#FF0091', '#FB8800'],
            ['#FFFF00', '#2958AE']
          ],
          transitionSpeed: 2000
        }
      }
    })
  }, [])
  return (
    <div className='container'>
      <div className='bloc-logo1'>
        <canvas id='logo-canvas1' />
      </div>
    </div>
  )
}
export default Header
