import { FiMessageSquare, FiHelpCircle } from 'react-icons/fi';

export default function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="flex mb-6 bg-white/30 backdrop-blur-md rounded-full p-1 max-w-md mx-auto">
      <button 
        className={`flex-1 py-3 px-6 rounded-full text-center font-medium transition-all duration-300 ${activeTab === 'message' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'}`}
        onClick={() => setActiveTab('message')}
      >
        <div className="flex items-center justify-center">
          <FiMessageSquare className="mr-2" />
          Send Message
        </div>
      </button>
      <button 
        className={`flex-1 py-3 px-6 rounded-full text-center font-medium transition-all duration-300 ${activeTab === 'faq' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'}`}
        onClick={() => setActiveTab('faq')}
      >
        <div className="flex items-center justify-center">
          <FiHelpCircle className="mr-2" />
          FAQ
        </div>
      </button>
    </div>
  );
}
