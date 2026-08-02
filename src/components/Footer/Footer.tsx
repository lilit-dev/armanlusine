import './Footer.css'

const INSTAGRAM_URL =
  'https://www.instagram.com/iventa.wedding?igsh=cWNnaWNnNmZvMnU2'

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
        Instagram — IVenta Wedding
      </a>
    </footer>
  )
}
