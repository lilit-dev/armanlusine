import { useRef, useState } from 'react'
import { Music, VolumeX } from '../../icons'
import './MusicPlayer.css'

const WEDDING_MUSIC = encodeURI('/audio/Sirusho_-_Sirt_(www.mexedi.am) (1).mp3')

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
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
        {isPlaying ? <VolumeX size={22} /> : <Music size={22} />}
      </button>

      <audio
        ref={audioRef}
        src={WEDDING_MUSIC}
        loop
        onEnded={() => setIsPlaying(false)}
      />
    </>
  )
}
