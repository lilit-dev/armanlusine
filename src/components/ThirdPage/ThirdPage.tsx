import './ThirdPage.css'

const PHOTOS = ['/images/gagik-tamarik-2.webp', '/images/gagik-tamarik-3.webp']

export default function ThirdPage() {
  return (
    <section className="third-page">
      <div className="third-page__text-col">
        <img className="third-page__phrase" src="/images/ser-liqy-ser.png" alt="ՍԵՐ լիքը ՍԵՐ" />
      </div>

      <div className="third-page__photos-col">
        {PHOTOS.map((src, index) => (
          <img
            key={src}
            className={`third-page__photo${
              index === 0 ? ' third-page__photo--first' : ' third-page__photo--second'
            }`}
            src={src}
            alt={`Գագիկ և Թամարա ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
