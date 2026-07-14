import FirstPage from './components/FirstPage/FirstPage'
import SecondPage from './components/SecondPage/SecondPage'
import ThirdPage from './components/ThirdPage/ThirdPage'
import FourthPage from './components/FourthPage/FourthPage'
import FifthPage from './components/FifthPage/FifthPage'
import SixthPage from './components/SixthPage/SixthPage'
import SeventhPage from './components/SeventhPage/SeventhPage'
import Footer from './components/Footer/Footer'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import './App.css'

function App() {
  return (
    <div className="app">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <Footer />
      <MusicPlayer />
    </div>
  )
}

export default App
