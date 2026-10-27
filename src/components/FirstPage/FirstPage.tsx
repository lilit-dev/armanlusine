import { type CSSProperties } from 'react'
import './FirstPage.css'

const COVER_IMAGE = '/images/gagik-tamarik-1.webp'

export default function FirstPage() {

  return (

    <section
      className="first-page"
      style={{ '--bg-image': `url("${COVER_IMAGE}")` } as CSSProperties}
    >

      <header className="first-page__header">

        <p className="first-page__label">Հարսանյաց հրավեր</p>

        <h1 className="first-page__names">

          <span className="first-page__name">Գագիկ</span>

          <span className="first-page__amp">և</span>

          <span className="first-page__name">Թամարիկ</span>

        </h1>

        <p className="first-page__date">11.11.2026</p>

      </header>

    </section>

  )

}


