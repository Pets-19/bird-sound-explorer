import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3217171/pexels-photo-3217171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
          >
            Ready to start your bird sound journey?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto"
          >
            Join thousands of bird enthusiasts and start exploring the fascinating world of bird sounds today. Whether you're a casual bird lover or a professional ornithologist, our platform has something for everyone.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="/explore" 
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
            >
              Start Exploring
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/about"
              className="bg-transparent border border-primary-200 text-white hover:bg-primary-700 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;