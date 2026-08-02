import { type CSSProperties } from 'react'

import './FirstPage.css'



const COUPLE_IMAGE = encodeURI('/images/hraviratoms 8.webp')



export default function FirstPage() {

  return (

    <section

      className="first-page"

      style={{ '--bg-image': `url("${COUPLE_IMAGE}")` } as CSSProperties}

    >

      <header className="first-page__header">

        <p className="first-page__label">Wedding Day</p>

        <h1 className="first-page__names">

          <span className="first-page__name">Arman</span>

          <span className="first-page__amp">&amp;</span>

          <span className="first-page__name">Lusine</span>

        </h1>

        <p className="first-page__date">16.08.2026</p>

      </header>

    </section>

  )

}


