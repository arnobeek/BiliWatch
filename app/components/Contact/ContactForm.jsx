import { useState, useEffect } from "react";
import TabNavigation from "./TabNavigation";
import MessageForm from "./MessageForm";
import FAQSection from "./FAQSection";
import ContactInfoCard from "./ContactInfoCard";
import SocialMediaCard from "./SocialMediaCard";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState('message'); // 'message' or 'faq'
  
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, []);
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Simulate form submission for demo purposes
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });
      // Reset form fields
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsAnimating(false);
    }, 1000);
  };
  
  const handleReset = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: '',
      });
      setIsAnimating(false);
    }, 300);
  };
  
  // Define FAQs array
  const faqs = [
    {
      question: "How does BiliWatch help monitor jaundice?",
      answer: "BiliWatch uses advanced imaging technology to capture and analyze skin tone changes that could indicate jaundice, providing healthcare professionals with data to make informed decisions."
    },
    {
      question: "Is BiliWatch available in my region?",
      answer: "BiliWatch is currently available throughout Uganda with plans to expand to neighboring countries soon. Contact us for specific availability information."
    },
    {
      question: "How accurate is BiliWatch compared to traditional testing?",
      answer: "Clinical trials have shown BiliWatch to have a 95% correlation with traditional blood bilirubin testing, making it a reliable screening tool."
    }
  ];
  
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary-light"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 z-0"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block animate-float">
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium py-1 px-4 rounded-full mb-4">
              24/7 Support
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're here to help with any questions about BiliWatch. Reach out and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Main Content Card (Message/FAQ) */}
          <div className="lg:w-2/3 order-1">
            <div className="glassmorphic-card bg-white/30 backdrop-blur-xl p-1 rounded-3xl shadow-xl border border-white/30 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0 opacity-60"></div>
              
              <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
              
              <div className="p-8">
                {activeTab === 'message' && (
                  <MessageForm 
                    formState={formState} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    formStatus={formStatus} 
                    isAnimating={isAnimating} 
                    onReset={handleReset}
                  />
                )}
                {activeTab === 'faq' && (
                  <FAQSection faqs={faqs} onContactTab={() => setActiveTab('message')} />
                )}
              </div>
            </div>
          </div>
          
          {/* Contact Information & Social Media Card */}
          <div className="lg:w-1/3 order-2">
            <div className="h-full flex flex-col">
              <ContactInfoCard />
              <SocialMediaCard />
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .glassmorphic-card {
          transition: all 0.5s ease;
        }
        .glassmorphic-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
}

