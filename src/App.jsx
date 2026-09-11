import RoutesApp from './routes/RoutesApp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import './App.css'
import './redesign.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <RoutesApp />
      <Footer />
    </>
  )
}

export default App
