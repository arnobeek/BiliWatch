import { FiMail, FiPhone, FiMapPin, FiCalendar } from 'react-icons/fi';

export default function ContactInfoCard() {
  return (
    <div className="glassmorphic-card bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/5 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/30 flex-grow relative overflow-hidden transform transition-all duration-500 hover:translate-y-2 hover:shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mb-32 filter blur-3xl z-0"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-8 text-primary border-b pb-4 border-primary/20">
          Contact Information
        </h2>
        <div className="space-y-8">
          <div className="flex items-start group">
            <div className="bg-white/50 p-4 rounded-xl mr-5 shadow-md group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <FiMail className="text-primary group-hover:text-white text-2xl" />
            </div>
            <div>
              <p className="font-medium text-gray-700">Email Us At:</p>
              <a to="mailto:contact@biliwatch.com" className="text-secondary hover:text-primary transition-colors text-lg">
                contact@biliwatch.com
              </a>
            </div>
          </div>
          <div className="flex items-start group">
            <div className="bg-white/50 p-4 rounded-xl mr-5 shadow-md group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <FiPhone className="text-primary group-hover:text-white text-2xl" />
            </div>
            <div>
              <p className="font-medium text-gray-700">Call Us:</p>
              <a to="tel:+256123456789" className="text-secondary hover:text-primary transition-colors text-lg">
                +256 123 456 789
              </a>
            </div>
          </div>
          <div className="flex items-start group">
            <div className="bg-white/50 p-4 rounded-xl mr-5 shadow-md group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <FiMapPin className="text-primary group-hover:text-white text-2xl" />
            </div>
            <div>
              <p className="font-medium text-gray-700">Visit Our Office:</p>
              <p className="text-gray-600">Mbarara University of Science and Technology</p>
              <p className="text-gray-600">Mbarara, Uganda</p>
            </div>
          </div>
          <div className="flex items-start group">
            <div className="bg-white/50 p-4 rounded-xl mr-5 shadow-md group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <FiCalendar className="text-primary group-hover:text-white text-2xl" />
            </div>
            <div>
              <p className="font-medium text-gray-700">Office Hours:</p>
              <p className="text-gray-600">Monday - Friday: 8am - 5pm</p>
              <p className="text-gray-600">Weekend: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

