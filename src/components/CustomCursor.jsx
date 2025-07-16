import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  useEffect(() => {
    const cursorBall = document.getElementById('ball')
    if (!cursorBall) return

    const handleMouseMove = (e) => {
      gsap.to(cursorBall, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        ease: 'power2.out'
      })
    }

    const hoverElements = document.querySelectorAll('a')
    
    const handleMouseEnter = () => {
      cursorBall.classList.add('hovered')
      gsap.to(cursorBall, {
        duration: 0.3,
        scale: 2,
        opacity: 0,
        ease: 0.1
      })
    }

    const handleMouseLeave = () => {
      cursorBall.classList.remove('hovered')
      gsap.to(cursorBall, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        ease: 'power2.out'
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div id="magic-cursor">
      <div id="ball"></div>
    </div>
  )
}

export default CustomCursor