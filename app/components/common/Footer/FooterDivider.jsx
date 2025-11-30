import { Link } from 'react-router-dom'

export default function FooterDivider({ currentYear }) {
  return (
    <div className="border-t border-gray-700/50 mt-8 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-gray-400">
          © {currentYear} BiliWatch. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <Link to="/privacy" className="text-xs text-gray-400 hover:text-white transition-all duration-300">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-xs text-gray-400 hover:text-white transition-all duration-300">
            Terms of Service
          </Link>
          <Link to="/cookies" className="text-xs text-gray-400 hover:text-white transition-all duration-300">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}



