import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className = '' }: Props) {
  return (
    <div className={`transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}
