import ImageReveal from '../ImageReveal/ImageReveal'
import './FifthPage.css'

const CENTER_IMAGE = encodeURI('/images/hraviratoms 8.webp')
const LEFT_IMAGE = encodeURI('/images/hraviratoms 8.1.webp')
const RIGHT_IMAGE = encodeURI('/images/hraviratoms8.5.webp')

const PROGRAM = [
  {
    icon: '/svg/ring1.svg',
    title: 'ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ',
    location: 'Սուրբ Գայանե եկեղեցի',
    time: '14:30',
    hasLine: true,
  },
  {
    icon: '/svg/cup5clean.svg',
    title: 'ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ',
    location: 'Nor Dvin',
    time: '17:00',
    hasLine: false,
  },
]

export default function FifthPage() {
  return (
    <section className="fifth-page">
      <div className="fifth-page__collage">
        <ImageReveal
          className="fifth-page__photo fifth-page__photo--center"
          src={CENTER_IMAGE}
          alt="Arman և Lusine"
          delay={200}
        />
        <ImageReveal
          className="fifth-page__photo fifth-page__photo--left"
          src={LEFT_IMAGE}
          alt="Arman և Lusine"
        />
        <ImageReveal
          className="fifth-page__photo fifth-page__photo--right"
          src={RIGHT_IMAGE}
          alt="Arman և Lusine"
          delay={120}
        />
      </div>

      <h2 className="fifth-page__title">Ծրագիր</h2>

      <div className="fifth-page__program">
        {PROGRAM.map((event) => (
          <article key={event.title} className="fifth-page__event">
            <div className="fifth-page__icon-col">
              <img className="fifth-page__icon" src={event.icon} alt="" aria-hidden />
              {event.hasLine && <span className="fifth-page__connector" aria-hidden />}
            </div>
            <div className="fifth-page__event-info">
              <h3 className="fifth-page__event-title">{event.title}</h3>
              <p className="fifth-page__event-location">{event.location}</p>
              <p className="fifth-page__event-time">{event.time}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
