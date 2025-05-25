import React, { useState } from 'react';
import { motion } from 'framer-motion';
import acceptanceLetter from '../assets/documents/accept.png';

const ResearchAcceptanceLetter: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section id="research-acceptance" className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-800">
            Research Acceptance Letter
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-8 shadow-lg">
            <div className="flex justify-center">
              {!isImageLoaded && (
                <div className="w-full h-64 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              )}
              <img
                src={acceptanceLetter}
                alt="Research Paper Acceptance Letter"
                className={`max-w-full h-auto rounded-lg transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ maxHeight: '80vh' }}
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchAcceptanceLetter;
