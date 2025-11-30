import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Users, Lightbulb } from 'lucide-react';

export default function CTA() {
  const engagementOptions = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Healthcare Partners",
      description: "Join our network of healthcare facilities implementing BiliWatch"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Investors",
      description: "Support our mission to expand access to affordable healthcare solutions"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Collaborators",
      description: "Contribute your expertise to improve our technology and reach"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card p-8 md:p-0 rounded-2xl border border-gray-100 bg-white bg-opacity-90 backdrop-blur-lg shadow-xl overflow-hidden">
          <div className="md:grid md:grid-cols-5">
            {/* Left content area */}
            <div className="md:col-span-3 p-6 md:p-12 text-left">
              <div className="w-20 h-2 bg-secondary mb-8 rounded-full"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Ready to Make a <span className="text-secondary">Difference</span>?
              </h2>
              
              <p className="text-lg mb-8 text-gray-700 md:pr-12">
                Join us in revolutionizing neonatal healthcare in Uganda and beyond. BiliWatch is looking for healthcare partners, investors, and collaborators.
              </p>
              
              <div className="space-y-6 mb-8">
                {engagementOptions.map((option, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      {React.cloneElement(option.icon, { className: "w-5 h-5 text-primary" })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{option.title}</h3>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md group"
              >
                Get Involved
                <ArrowRight className="ml-2 group-hover:ml-3 transition-all duration-300 w-5 h-5" />
              </Link>
            </div>
            
            {/* Right image/gradient area */}
            <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-primary to-secondary relative">
              <div className="absolute inset-0 bg-opacity-20 pattern-dots pattern-white pattern-size-4 pattern-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-white opacity-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          Making a difference in neonatal care across Uganda.
        </div>
      </div>
    </section>
  );
}


