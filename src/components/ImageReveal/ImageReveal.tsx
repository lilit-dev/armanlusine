import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ImgHTMLAttributes,
} from 'react'
import './ImageReveal.css'

type ImageRevealProps = ImgHTMLAttributes<HTMLImageElement> & {
  delay?: number
}

export default function ImageReveal({
  delay = 0,
  className = '',
  style,
  ...props
}: ImageRevealProps) {
  const ref = useRef<HTMLImageElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const isInView = () => {
      const rect = el.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    }

    if (isInView()) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -4% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <img
      ref={ref}
      className={`image-reveal${visible ? ' image-reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={
        {
          ...style,
          '--image-reveal-delay': `${delay}ms`,
        } as CSSProperties
      }
      {...props}
    />
  )
}
