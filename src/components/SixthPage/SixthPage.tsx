import { MapPin } from '../../icons'
import ImageReveal from '../ImageReveal/ImageReveal'
import './SixthPage.css'

const LOCATIONS = [
  {
    title: 'Սուրբ Գայանե եկեղեցի',
    image: '/svg/ejmiacin.svg',
    mapUrl: 'https://www.google.com/maps/search/Surb+Gayane+Church+Yerevan',
  },
  {
    title: 'Nor Dvin',
    image: '/svg/nordvin.svg',
    mapUrl: 'https://www.google.com/maps/search/Nor+Dvin+Armenia',
  },
]

export default function SixthPage() {
  return (
    <section className="sixth-page">
      {LOCATIONS.map((location, index) => (
        <article key={location.title} className="sixth-page__location">
          <h2 className="sixth-page__title">{location.title}</h2>

          <ImageReveal
            className="sixth-page__illustration"
            src={location.image}
            alt={location.title}
            delay={index * 150}
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
