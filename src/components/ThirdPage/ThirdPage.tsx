import ImageReveal from '../ImageReveal/ImageReveal'
import './ThirdPage.css'

const PHOTOS = [
  encodeURI('/images/hraviratoms 8.webp'),
  encodeURI('/images/hraviratoms8.4.webp'),
  encodeURI('/images/hraviratoms8.7.webp'),
]

export default function ThirdPage() {
  return (
    <section className="third-page">
      <div className="third-page__text-col">
        <div className="third-page__save-date">
          <span className="third-page__serif">SAVE</span>
          <span className="third-page__script">the</span>
          <span className="third-page__serif">DATE</span>
        </div>
      </div>

      <div className="third-page__photos-col">
        {PHOTOS.map((src, index) => (
          <ImageReveal
            key={src}
            delay={index * 120}
            className={`third-page__photo${
              index === 0 ? ' third-page__photo--first' : index === 1 ? ' third-page__photo--second' : ' third-page__photo--last'
            }`}
            src={src}
            alt={`Arman և Lusine ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
