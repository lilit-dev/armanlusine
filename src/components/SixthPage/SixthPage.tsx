import { MapPin } from '../../icons'
import './SixthPage.css'

const LOCATIONS = [
  {
    title: 'Կեչառիս վանական համալիր',
    kind: 'church',
    image: '/svg/kecharis.webp',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Kecharis+Monastery,+Tsaghkadzor,+Armenia',
  },
  {
    title: 'Palais Wedding Hall',
    kind: 'hall',
    image: '/svg/srah.webp',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Palais+Wedding+Hall,+Kamoyi+3,+Hrazdan,+Armenia',
  },
]

export default function SixthPage() {
  return (
    <section className="sixth-page">
      {LOCATIONS.map((location) => (
        <article key={location.title} className="sixth-page__location">
          <h2 className="sixth-page__title">{location.title}</h2>

          <img
            className={`sixth-page__illustration sixth-page__illustration--${location.kind}`}
            src={location.image}
            alt={location.title}
            loading="lazy"
            decoding="async"
          />

          <a
            className="sixth-page__map-link"
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={16} strokeWidth={1.5} />
            <span>Քարտեզ</span>
          </a>
        </article>
      ))}
    </section>
  )
}
