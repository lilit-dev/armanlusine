import './Footer.css'

const INSTAGRAM_URL =
  'https://www.instagram.com/iventa.wedding?igsh=cWNnaWNnNmZvMnU2'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <hr className="footer__line" />
        <p className="footer__label">Պատվիրելու համար</p>
        <a
          className="footer__btn"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram — IVenta Wedding
        </a>
      </div>
    </footer>
  )
}
