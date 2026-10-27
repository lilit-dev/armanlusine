import './Footer.css'

const INSTAGRAM_URL = 'https://www.instagram.com/shogha_photostudio/'

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Պատվիրելու համար</h2>

      <a
        className="footer__btn"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram — Shogha Photostudio
      </a>
    </footer>
  )
}
