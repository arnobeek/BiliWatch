import { FiMessageSquare } from 'react-icons/fi';

export default function FAQSection({ faqs, onContactTab }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-6">Don't see an answer to your question?</p>
        <button 
          onClick={onContactTab}
          className="cta-button bg-gradient-to-r from-primary to-secondary text-white font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
        >
          <FiMessageSquare className="mr-2" />
          Contact Us
        </button>
      </div>
    </div>
  );
}
