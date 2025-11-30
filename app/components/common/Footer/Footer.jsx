import FooterBackground from './FooterBackground'
import FooterLogoAbout from './FooterLogoAbout'
import FooterQuickLinks from './FooterQuickLinks'
import FooterContact from './FooterContact'
import FooterNewsletter from './FooterNewsletter'
import FooterDivider from './FooterDivider'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white/90 pt-16 pb-8 relative overflow-hidden">
      <FooterBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and About Section */}
          <div className="lg:col-span-1">
            <FooterLogoAbout />
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <FooterQuickLinks />
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-1">
            <FooterContact />
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <FooterNewsletter />
          </div>
        </div>
        
        <FooterDivider currentYear={currentYear} />
      </div>
    </footer>
  )
}

