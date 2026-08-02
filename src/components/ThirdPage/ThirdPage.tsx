import './ThirdPage.css'

const PHOTOS = [
  encodeURI('/images/hraviratoms8.10.webp'),
  encodeURI('/images/hraviratoms8.11 (2).webp'),
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
          <img
            key={src}
            className={`third-page__photo${
              index === 0 ? ' third-page__photo--first' : ' third-page__photo--second'
            }`}
            src={src}
            alt={`Arman և Lusine ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
