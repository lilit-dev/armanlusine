import './FifthPage.css'

const CENTER_IMAGE = '/images/gagik-tamarik-4.webp'
const LEFT_IMAGE = '/images/gagik-tamarik-3.webp'
const RIGHT_IMAGE = '/images/gagik-tamarik-2.webp'

const PROGRAM = [
  {
    icon: '/svg/pesa.webp',
    title: 'ՓԵՍԱՅԻ ՏՈՒՆ',
    time: '11:00',
    hasLine: true,
  },
  {
    icon: '/svg/hars.webp',
    title: 'ՀԱՐՍԻ ՏՈՒՆ',
    time: '13:00',
    hasLine: true,
  },
  {
    icon: '/svg/ring1.svg',
    title: 'ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ',
    location: 'Կեչառիս վանական համալիր',
    time: '15:00',
    hasLine: true,
  },
  {
    icon: '/svg/cup5clean.svg',
    title: 'ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ',
    location: 'Palais Wedding Hall',
    time: '17:30',
    hasLine: false,
  },
]

export default function FifthPage() {
  return (
    <section className="fifth-page">
      <div className="fifth-page__collage">
        <img
          className="fifth-page__photo fifth-page__photo--center"
          src={CENTER_IMAGE}
          alt="Գագիկ և Թամարիկ"
          loading="lazy"
          decoding="async"
        />
        <img
          className="fifth-page__photo fifth-page__photo--left"
          src={LEFT_IMAGE}
          alt="Գագիկ և Թամարիկ"
          loading="lazy"
          decoding="async"
        />
        <img
          className="fifth-page__photo fifth-page__photo--right"
          src={RIGHT_IMAGE}
          alt="Գագիկ և Թամարիկ"
          loading="lazy"
          decoding="async"
        />
      </div>

      <h2 className="fifth-page__title">Ծրագիր</h2>

      <div className="fifth-page__program">
        {PROGRAM.map((event) => (
          <article key={event.title} className="fifth-page__event">
            <div className="fifth-page__icon-col">
              <img
                className="fifth-page__icon"
                src={event.icon}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
              />
              {event.hasLine && <span className="fifth-page__connector" aria-hidden />}
            </div>
            <div className="fifth-page__event-info">
              <h3 className="fifth-page__event-title">{event.title}</h3>
              {event.location && (
                <p className="fifth-page__event-location">{event.location}</p>
              )}
              <p className="fifth-page__event-time">{event.time}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
