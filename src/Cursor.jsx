import { useEffect, useState } from 'react'

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event
      const target = event.target
      const isInteractive = Boolean(
        target.closest('button, a, [data-cursor-target]')
      )

      setPosition({ x, y })
      setHovered(isInteractive)
    }

    const handleMouseDown = () => setPressed(true)
    const handleMouseUp = () => setPressed(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        className={`cursor-ring ${hovered ? 'cursor-ring--active' : ''} ${pressed ? 'cursor-ring--press' : ''}`}
        style={{ transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)` }}
      />
      <div
        className={`cursor-dot ${hovered ? 'cursor-dot--active' : ''} ${pressed ? 'cursor-dot--press' : ''}`}
        style={{ transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)` }}
      />
    </div>
  )
}
