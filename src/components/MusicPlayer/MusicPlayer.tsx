import { useEffect, useRef, useState } from 'react'
import { Music, VolumeX } from '../../icons'
import './MusicPlayer.css'

const WEDDING_MUSIC = '/audio/ordinary-wedding.mp3'

const PAGE_IMAGES = [
  '/images/dzerqer.webp',
  '/images/ser-liqy-ser.webp',
  '/images/gagik-tamarik-2.webp',
  '/images/gagik-tamarik-3.webp',
  '/images/gagik-tamarik-4.webp',
  '/svg/bajakner.webp',
  '/svg/heart5.svg',
  '/svg/pesa.webp',
  '/svg/hars.webp',
  '/svg/ring1.svg',
  '/svg/cup5clean.svg',
  '/svg/kecharis.webp',
  '/svg/srah.webp',
]

let pagesReady: Promise<void> | null = null

function whenPagesReady() {
  if (!pagesReady) {
    const images = Promise.all(
      PAGE_IMAGES.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image()
            img.onload = () => resolve()
            img.onerror = () => resolve()
            img.src = src
          }),
      ),
    )
    pagesReady = Promise.race([
      images.then(() => undefined),
      new Promise<void>((resolve) => window.setTimeout(resolve, 4000)),
    ])
  }
  return pagesReady
}

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    let cancelled = false

    const start = () => {
      if (cancelled || !audio.paused) return
      if (!audio.getAttribute('src')) audio.src = WEDDING_MUSIC
      audio.muted = false
      audio.volume = 1
      void audio.play().catch(() => {})
    }

    const arm = () => {
      void whenPagesReady().then(start)
    }

    if (document.readyState === 'complete') arm()
    else window.addEventListener('load', arm, { once: true })

    return () => {
      cancelled = true
      window.removeEventListener('load', arm)
    }
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      return
    }

    try {
      if (!audio.getAttribute('src')) audio.src = WEDDING_MUSIC
      await audio.play()
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <>
      <button
        type="button"
        className="music-player__btn"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Դադարեցնել երաժշտությունը' : 'Նվագարկել երաժշտությունը'}
      >
        {isPlaying ? <Music size={22} /> : <VolumeX size={22} />}
      </button>

      <audio
        ref={audioRef}
        preload="none"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </>
  )
}
