import { useRef, type ReactNode, type MouseEvent } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export default function TiltCard({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    node.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(4px)`
  }

  const handleLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-150 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}
