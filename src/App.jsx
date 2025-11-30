import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../app/components/common/Header/Header'
import Footer from '../app/components/common/Footer/Footer'

// Import page components
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Team from './pages/Team'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <Helmet>
        <title>BiliWatch</title>
        <meta name="description" content="A low-cost, non-invasive medical device for early detection of neonatal jaundice" />
        <meta property="og:title" content="BiliWatch" />
        <meta property="og:description" content="A low-cost, non-invasive medical device for early detection of neonatal jaundice" />
        <meta property="og:image" content="/assets/icons/BiliLogo_black.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/assets/icons/BiliLogo_black.png" />
      </Helmet>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
