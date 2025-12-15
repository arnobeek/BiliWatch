import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function FooterContact() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-5 text-white">Contact Us</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <FaMapMarkerAlt className="text-secondary mt-1 mr-3" />
          <span className="text-sm text-gray-300">
            Mbarara University of Science and Technology
          </span>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="text-secondary mr-3" />
          <span className="text-sm text-gray-300">info@biliwatch.org</span>
        </li>
        <li className="flex items-center">
          <FaPhone className="text-secondary mr-3" />
          <span className="text-sm text-gray-300">+256 780 736 117</span>
        </li>
      </ul>
    </div>
  )
}

