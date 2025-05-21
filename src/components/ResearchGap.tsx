import React from 'react'
import { motion } from "framer-motion";

function ResearchGap() {
  return (
    <div className="text-center mt-5 py-8 md:py-12 max-w-6xl mx-auto px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-800">
          Research Gap
        </h2>
        <div className="text-left space-y-4 md:space-y-6">          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            While various digital tools and educational platforms exist to support children with Down syndrome, 
            significant gaps remain in providing a comprehensive, integrated, and accessible learning environment 
            tailored to their multifaceted needs, particularly in developing countries like Sri Lanka. Many current 
            systems often focus on isolated skills or present as generic educational games, failing to offer an 
            integrated curriculum that addresses critical areas like handwriting, verbal communication, mathematics, 
            and gross motor skills in a cohesive and specifically tailored manner.
          </p>
          
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Furthermore, existing solutions can be complex, expensive, or not easily adaptable for home-based learning, 
            limiting their reach and consistent use by parents who may lack specialized training or resources. A significant 
            limitation is the general lack of consistent real-time, accurate feedback mechanisms powered by advanced deep 
            learning technologies (like CNN and LSTM) that are applied uniformly across all these diverse developmental 
            domains within a single, unified platform. While some tools may address one skill, such as the LVDS-App 
            focusing on language over writing, a holistic approach that provides individualized support across multiple 
            areas is often missing. Many platforms also do not adequately facilitate continuous progress tracking and 
            parental guidance for home-based exercises that reinforce learning.
          </p>            <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">
              Under-researched Areas
            </h3>            <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2">
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Lack of comprehensive and integrated deep learning platforms: </span> 
                Systems that cohesively cover multiple core skills (handwriting, verbal, math, gross motor) using tailored deep learning models.
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Limited accessibility and affordability for specialized home-based learning: </span> 
                Solutions that are low-cost, user-friendly, and specifically designed for children with Down syndrome to use at home, especially in resource-constrained settings.
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Gaps in consistent, real-time, and personalized feedback: </span> 
                Unified systems providing immediate and adaptive feedback for diverse skills rather than just one.
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Insufficient tailored content for multifaceted skill development: </span> 
                Moving beyond generic games to curricula specifically designed for the learning patterns of children with Down syndrome across various developmental needs.
              </li>
            </ul>
          </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Our proposed system addresses these shortcomings by developing an affordable, integrated platform utilizing 
            deep learning (CNN and LSTM) to provide educational support in four key areas: handwriting, verbal communication, 
            mathematics, and gross motor skills. It offers real-time, accurate feedback, enabling children to engage in 
            personalized exercises at home, and provides progress tracking to improve the quality of life for these children 
            by offering a discreet, reliable, and modern educational service. This holistic approach aims to enhance 
            multifaceted skill development and promote sustained engagement.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default ResearchGap
