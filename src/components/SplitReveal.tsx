type Props = {
  text: string
  className?: string
  startDelay?: number
}

export default function SplitReveal({ text, className = '', startDelay = 0 }: Props) {
  const words = text.split(' ')
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span
            className="word-reveal inline-block"
            style={{ animationDelay: `${startDelay + i * 60}ms` }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </span>
  )
}
