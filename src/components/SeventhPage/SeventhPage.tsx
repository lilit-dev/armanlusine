import { Camera, Phone, Send } from '../../icons'
import ImageReveal from '../ImageReveal/ImageReveal'
import './SeventhPage.css'

const DETAILS_IMAGE = encodeURI('/images/hraviratoms 8.webp')

const CONTACTS = [
  { name: 'ԼՈՒՍԻՆԵ', phone: '+374 94 999991', tel: 'tel:+37494999991' },
  { name: 'ԱՐՄԱՆ', phone: '+374 94 999992', tel: 'tel:+37494999992' },
]

export default function SeventhPage() {
  return (
    <section className="seventh-page">
      <div className="seventh-page__hero">
        <ImageReveal
          className="seventh-page__photo"
          src={DETAILS_IMAGE}
          alt="Arman և Lusine"
        />

        <h2 className="seventh-page__title">Դետալներ</h2>

        <div className="seventh-page__divider" aria-hidden>
          <span className="seventh-page__dot" />
          <img
            className="seventh-page__heart seventh-page__heart--sm"
            src="/svg/heart5.svg"
            alt=""
          />
          <img
            className="seventh-page__heart seventh-page__heart--lg"
            src="/svg/heart5.svg"
            alt=""
          />
          <img
            className="seventh-page__heart seventh-page__heart--sm"
            src="/svg/heart5.svg"
            alt=""
          />
          <span className="seventh-page__dot" />
        </div>
      </div>

      <div className="seventh-page__content">
        <hr className="seventh-page__line" />

        <div className="seventh-page__cards">
        <article className="seventh-page__card">
          <div className="seventh-page__card-head">
            <span className="seventh-page__card-icon">
              <Camera size={20} strokeWidth={1} />
            </span>
            <h3 className="seventh-page__card-label">TELEGRAM</h3>
          </div>
          <p className="seventh-page__card-text">
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

        {CONTACTS.map((contact) => (
          <a
            key={contact.name}
            className="seventh-page__contact"
            href={contact.tel}
          >
            <span className="seventh-page__contact-icon">
              <Phone size={18} strokeWidth={1} />
            </span>
            <span className="seventh-page__contact-info">
              <span className="seventh-page__contact-name">{contact.name}</span>
              <span className="seventh-page__contact-phone">{contact.phone}</span>
            </span>
          </a>
        ))}
        </div>

        <div className="seventh-page__closing-wrap">
        <img
          className="seventh-page__closing-heart"
          src="/svg/heart5.svg"
          alt=""
          aria-hidden
        />
        <p className="seventh-page__closing">Սիրով կսպասենք</p>
        <img
          className="seventh-page__closing-heart"
          src="/svg/heart5.svg"
          alt=""
          aria-hidden
        />
        </div>
      </div>
    </section>
  )
}
