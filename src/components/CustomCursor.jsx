import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function CustomCursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const mousePosition = useRef({ x: 0, y: 0 })
  const cursorPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    if (!cursor || !cursorDot) return

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
      
      // Detect background color at cursor position
      let element = document.elementFromPoint(e.clientX, e.clientY)
      let bgColor = 'rgba(0, 0, 0, 0)'
      
      // Traverse up the DOM tree to find a non-transparent background
      while (element && element !== document.body) {
        const style = window.getComputedStyle(element)
        const bg = style.backgroundColor
        
        // Check if background is not transparent
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          bgColor = bg
          break
        }
        element = element.parentElement
      }
      
      // If still transparent, check body background
      if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        bgColor = window.getComputedStyle(document.body).backgroundColor
      }
      
      const rgb = bgColor.match(/\d+/g)
      
      if (rgb && rgb.length >= 3) {
        // Calculate relative luminance
        const r = parseInt(rgb[0])
        const g = parseInt(rgb[1])
        const b = parseInt(rgb[2])
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
        
        // If luminance is less than 0.5, it's a dark background
        setIsDarkBackground(luminance < 0.5)
      }
    }

    // Smooth cursor animation
    const animateCursor = () => {
      // Smooth follow effect using lerp (linear interpolation)
      const lerp = (start, end, factor) => start + (end - start) * factor
      
      cursorPosition.current.x = lerp(cursorPosition.current.x, mousePosition.current.x, 0.15)
      cursorPosition.current.y = lerp(cursorPosition.current.y, mousePosition.current.y, 0.15)

      gsap.set(cursor, {
        x: cursorPosition.current.x,
        y: cursorPosition.current.y,
      })

      gsap.set(cursorDot, {
        x: mousePosition.current.x,
        y: mousePosition.current.y,
      })

      requestAnimationFrame(animateCursor)
    }

    animateCursor()

    // Handle hover states for interactive elements
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Select all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], .cursor-pointer, .info-card'
    )

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  // Animate cursor size and color on hover and background change
  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    // Determine colors based on background and hover state
    let borderColor, dotColor
    
    if (isHovering) {
      // On hover: always white
      borderColor = 'rgba(255, 255, 255, 0.8)'
      dotColor = '#FFFFFF'
    } else if (isDarkBackground) {
      // Dark background: use white/light colors
      borderColor = 'rgba(255, 255, 255, 0.6)'
      dotColor = '#FFFFFF'
    } else {
      // Light background: use dark colors
      borderColor = 'rgba(15, 23, 42, 0.6)'
      dotColor = '#0F172A'
    }

    gsap.to(cursor, {
      width: isHovering ? 60 : 40,
      height: isHovering ? 60 : 40,
      borderColor: borderColor,
      duration: 0.3,
      ease: 'power2.out',
    })

    gsap.to(cursorDot, {
      backgroundColor: dotColor,
      scale: isHovering ? 1.5 : 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }, [isHovering, isDarkBackground])

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '2px solid rgba(15, 23, 42, 0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          backgroundColor: '#0F172A',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}

export default CustomCursor
