import { useEffect, useState } from 'react'
import ImageReveal from '../ImageReveal/ImageReveal'
import './SecondPage.css'

const WEDDING_DATE = new Date('2026-08-16T12:00:00')
const QUOTE_IMAGE = encodeURI('/images/hraviratoms 8.1.webp')

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

export default function SecondPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { value: timeLeft.days, label: 'Օր' },
    { value: timeLeft.hours, label: 'Ժամ' },
    { value: timeLeft.minutes, label: 'Րոպե' },
    { value: timeLeft.seconds, label: 'Վրկ' },
  ]

  return (
    <section className="second-page">
      <div className="second-page__countdown">
        <h2 className="second-page__title">Հարսանիքին մնաց</h2>

        <div className="second-page__timer">
          {units.map((unit, index) => (
            <div key={unit.label} className="second-page__timer-col">
              {index > 0 && <span className="second-page__timer-divider" aria-hidden />}
              <span className="second-page__timer-value">{pad(unit.value)}</span>
              <span className="second-page__timer-label">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>

      <article className="second-page__card">
        <ImageReveal
          className="second-page__card-image"
          src={QUOTE_IMAGE}
          alt="Մատանին"
        />
        <p className="second-page__quote">
          Սերը հանդուրժող է,
          <br />
          սերը բարի է
        </p>
        <p className="second-page__reference">— Ա Կորնթացիներ 13:4</p>
      </article>
    </section>
  )
}
