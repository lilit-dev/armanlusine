import { Send } from '../../icons'
import './SeventhPage.css'

const DETAILS_IMAGE = '/images/gagik-tamarik-4.webp'

export default function SeventhPage() {
  return (
    <section className="seventh-page">
      <header className="seventh-page__header">
        <h2 className="seventh-page__title">Դետալներ</h2>
      </header>

      <article className="seventh-page__card">
        <img
          className="seventh-page__photo"
          src={DETAILS_IMAGE}
          alt="Գագիկ և Թամարիկ"
          loading="lazy"
          decoding="async"
        />

        <p className="seventh-page__text">
          Ձեր և մեր հարմարավետության համար մենք ստեղծել ենք Telegram ալիք,
          որտեղ դուք կարող եք կիսվել հարսանեկան լուսանկարներով։
        </p>

        <a
          className="seventh-page__join-btn"
          href="https://t.me/+m95vip4CIY44OTg6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send size={15} strokeWidth={1.5} />
          Միանալ
        </a>
      </article>

      <footer className="seventh-page__closing-wrap">
        <p className="seventh-page__closing">Սիրով սպասում ենք</p>
      </footer>
    </section>
  )
}
