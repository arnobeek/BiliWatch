export default function FooterNewsletter() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-5 text-white">Stay Updated</h3>
      <p className="text-sm text-gray-300 mb-4">
        Subscribe to our newsletter for the latest updates on BiliWatch developments.
      </p>
      <div className="relative">
        <input 
          type="email" 
          placeholder="Your email address" 
          className="w-full bg-gray-800/50 border border-gray-700 rounded-full py-2 px-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
        />
        <button className="absolute right-1 top-1 bg-primary hover:bg-primary-dark text-white rounded-full p-1 w-7 h-7 flex items-center justify-center transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

