import { useEffect, useRef, useState } from 'react'
import { Music, VolumeX } from '../../icons'
import './MusicPlayer.css'

const WEDDING_MUSIC = '/audio/ordinary-wedding.mp3'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = false
    audio.volume = 1

    const start = () => {
      if (!audio.paused) return
      void audio.play().catch(() => {})
    }

    start()
    const retry = window.setTimeout(start, 300)

    const onGesture = (event: Event) => {
      const target = event.target
      if (target instanceof Element && target.closest('.music-player__btn')) return
      start()
    }

    window.addEventListener('pointerdown', onGesture)
    const onPlaying = () => window.removeEventListener('pointerdown', onGesture)
    audio.addEventListener('playing', onPlaying)

    return () => {
      window.clearTimeout(retry)
      window.removeEventListener('pointerdown', onGesture)
      audio.removeEventListener('playing', onPlaying)
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
        src={WEDDING_MUSIC}
        preload="auto"
        autoPlay
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </>
  )
}
