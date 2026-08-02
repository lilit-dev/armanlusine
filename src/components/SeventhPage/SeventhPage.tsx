import { Phone, Send } from '../../icons'
import './SeventhPage.css'

const DETAILS_IMAGE = encodeURI('/images/hraviratoms8.13.webp')

const CONTACTS = [
  { name: 'ԼՈՒՍԻՆԵ', phone: '+374 94 999991', tel: 'tel:+37494999991' },
  { name: 'ԱՐՄԱՆ', phone: '+374 94 999992', tel: 'tel:+37494999992' },
]

export default function SeventhPage() {
  return (
    <section className="seventh-page">
      <header className="seventh-page__header">
        <h2 className="seventh-page__title">Դետալներ</h2>

        <div className="seventh-page__ornament" aria-hidden>
          <span className="seventh-page__dot" />
          <img className="seventh-page__heart seventh-page__heart--sm" src="/svg/heart5.svg" alt="" />
          <img className="seventh-page__heart seventh-page__heart--lg" src="/svg/heart5.svg" alt="" />
          <img className="seventh-page__heart seventh-page__heart--sm" src="/svg/heart5.svg" alt="" />
          <span className="seventh-page__dot" />
        </div>
      </header>

      <img
        className="seventh-page__photo"
        src={DETAILS_IMAGE}
        alt="Arman և Lusine"
      />

      <article className="seventh-page__card">
        <p className="seventh-page__text">
          Ձեր և մեր հարմարավետության համար մենք ստեղծել ենք Telegram ալիք,
          որտեղ դուք կարող եք կիսվել հարսանեկան լուսանկարներով։
        </p>

        <a
          className="seventh-page__join-btn"
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send size={15} strokeWidth={1} />
          Միանալ
        </a>
      </article>

      <div className="seventh-page__contacts-block">
        <h3 className="seventh-page__subtitle">Կապ</h3>

        <div className="seventh-page__contacts">
          {CONTACTS.map((contact) => (
            <a
              key={contact.name}
              className="seventh-page__contact"
              href={contact.tel}
            >
              <span className="seventh-page__contact-name">{contact.name}</span>
              <span className="seventh-page__contact-phone">
                <Phone size={14} strokeWidth={1} aria-hidden />
                {contact.phone}
              </span>
            </a>
          ))}
        </div>
      </div>

      <footer className="seventh-page__closing-wrap">
        <img className="seventh-page__closing-heart" src="/svg/heart5.svg" alt="" aria-hidden />
        <p className="seventh-page__closing">Սիրով կսպասենք</p>
        <img className="seventh-page__closing-heart" src="/svg/heart5.svg" alt="" aria-hidden />
      </footer>
    </section>
  )
}
