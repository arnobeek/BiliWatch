import './globals.css'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}
