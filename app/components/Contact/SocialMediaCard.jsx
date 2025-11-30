import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function SocialMediaCard() {
  const socialMedia = [
    { name: 'Twitter', Icon: FaTwitter, color: 'bg-blue-400' },
    { name: 'Facebook', Icon: FaFacebook, color: 'bg-blue-600' },
    { name: 'LinkedIn', Icon: FaLinkedin, color: 'bg-blue-700' },
    { name: 'Instagram', Icon: FaInstagram, color: 'bg-pink-600' }
  ];
  
  return (
    <div className="glassmorphic-card bg-white/40 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/30 mt-8 relative overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0"></div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-6 text-secondary text-center">Connect With Us</h3>
        <div className="flex justify-between">
          {socialMedia.map(({ name, Icon }) => (
            <a 
              key={name}
              to="#"
              className="group"
              aria-label={name}
            >
              <div className="bg-white/70 group-hover:bg-primary text-primary group-hover:text-white p-4 rounded-xl transition-all duration-300 shadow-md group-hover:shadow-lg transform group-hover:scale-110">
                <Icon size={22} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

