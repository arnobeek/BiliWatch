import { FiUser, FiMail, FiHelpCircle, FiSend, FiRefreshCw, FiCheck, FiMessageCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function MessageForm({ formState, handleChange, handleSubmit, formStatus, isAnimating, onReset }) {
  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" },
    blur: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {formStatus.submitted ? (
        <motion.div 
          className={`py-10 px-6 bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl transition-all duration-500 ${isAnimating ? 'transform scale-95 opacity-80' : 'transform scale-100 opacity-100'}`}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="relative">
            {/* Decorative success elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-100/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            
            {/* Success icon */}
            <motion.div 
              className="bg-gradient-to-br from-green-400 to-green-500 text-white w-24 h-24 rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-200"
              initial={{ rotate: 45, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <FiCheck size={48} />
            </motion.div>
            
            {/* Success message */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600 mb-10 text-lg max-w-md mx-auto">{formStatus.message}</p>
              
              <button 
                onClick={onReset}
                className="cta-button bg-gradient-to-r from-primary to-secondary text-white font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
              >
                <FiRefreshCw className="mr-2" />
                Send Another Message
              </button>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          className={`py-10 px-8 bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl transition-all duration-500 ${isAnimating ? 'transform scale-95 opacity-80' : 'transform scale-100 opacity-100'}`}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/10 rounded-full blur-xl"></div>
          
          <div className="relative">
            {/* Form header with animated underline */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-4xl font-bold relative inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Send Us a Message
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </h2>
              <p className="text-gray-600 mt-4">We'd love to hear from you. Fill out the form below.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info Section */}
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div 
                  className="group flex-1"
                  initial="blur"
                  whileFocus="focus"
                  whileHover="focus"
                  variants={inputVariants}
                >
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700 group-focus-within:text-primary transition-colors">
                    Your Name
                  </label>
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary/40 to-secondary/40 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border-0 rounded-xl bg-white/70 focus:ring-0 focus:outline-none shadow-inner transition-all duration-300 text-gray-800"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex-1"
                  initial="blur"
                  whileFocus="focus"
                  whileHover="focus"
                  variants={inputVariants}
                >
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700 group-focus-within:text-primary transition-colors">
                    Your Email
                  </label>
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary/40 to-secondary/40 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 border-0 rounded-xl bg-white/70 focus:ring-0 focus:outline-none shadow-inner transition-all duration-300 text-gray-800"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Subject */}
              <motion.div 
                className="group"
                initial="blur"
                whileFocus="focus"
                whileHover="focus"
                variants={inputVariants}
              >
                <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 group-focus-within:text-primary transition-colors">
                  Subject
                </label>
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiHelpCircle className="text-gray-400 group-focus-within:text-primary transition-colors" />
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary/40 to-secondary/40 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border-0 rounded-xl bg-white/70 focus:ring-0 focus:outline-none shadow-inner transition-all duration-300 text-gray-800"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </motion.div>
              
              {/* Message */}
              <motion.div 
                className="group"
                initial="blur"
                whileFocus="focus"
                whileHover="focus"
                variants={inputVariants}
              >
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700 group-focus-within:text-primary transition-colors">
                  Your Message
                </label>
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <FiMessageCircle className="text-gray-400 group-focus-within:text-primary transition-colors" />
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary/40 to-secondary/40 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full pl-12 pr-4 py-4 border-0 rounded-xl bg-white/70 focus:ring-0 focus:outline-none shadow-inner transition-all duration-300 text-gray-800 resize-none"
                    placeholder="Please describe your inquiry in detail..."
                    required
                  ></textarea>
                </div>
              </motion.div>
              
              {/* Submit button with animated hover effect */}
              <div className="flex justify-end mt-8">
                <motion.button 
                  type="submit" 
                  className="cta-button bg-gradient-to-r from-primary to-secondary text-white font-medium py-4 px-12 rounded-full transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center">
                    <FiSend className="mr-3" />
                    Send Message
                  </span>
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
}