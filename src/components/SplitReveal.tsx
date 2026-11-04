type Props = {
  text: string
  className?: string
  startDelay?: number
}

export default function SplitReveal({ text, className = '' }: Props) {
  return <span className={`inline-block ${className}`}>{text}</span>
}
