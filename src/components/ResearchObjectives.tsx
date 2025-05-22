
import { motion } from "framer-motion";

function ResearchObjectives() {
  return (
    <div className="text-center mt-5 py-8 md:py-12 max-w-6xl mx-auto px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-800">
          Research Objectives
        </h2>
        
        <div className="text-left space-y-4 md:space-y-6">
          <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">
              Development of an AI-driven System for Gross Motor Skill Enhancement
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              The first objective is to develop an AI-driven system using Long Short-Term Memory (LSTM) networks 
              and MediaPipe for pose estimation. This system will recognize and assess various gross motor actions 
              performed by children with Down syndrome, providing personalized feedback and activity plans to 
              enhance their physical coordination, balance, and overall motor capabilities, addressing delays 
              caused by hypotonia and coordination challenges.
            </p>
          </div>

          <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">
              Creation of a Learning Module for Word Pronunciation and Verbal Communication Improvement
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              The second objective is to create an interactive learning module that utilizes LSTM neural networks
              to analyze speech recordings of children with Down syndrome. This module will aim to improve word 
              pronunciation, expand vocabulary, and enhance verbal communication skills by providing guided training 
              with visual aids (like mouth animations) and individualized feedback on accuracy and audibility, 
              thereby supporting clearer speech output.
            </p>
          </div>          <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">
              Design of a System for Teaching Basic Mathematics via Finger Mathematics
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              The third objective is to design and implement a system for teaching fundamental mathematical concepts (number 
              recognition, sequences, addition, subtraction) to children with Down syndrome through an interactive 
              Finger Mathematics approach. This will involve leveraging MediaPipe to extract detailed hand landmarks in 
              real-time and developing an algorithm to interpret these landmarks for accurate finger gesture recognition 
              and direct input for mathematical operations, thereby making abstract concepts more tangible.
            </p>
          </div>

          <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">
              Implementation Module for Improving Sinhala Writing Skills
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              The fourth objective is to implement an AI-powered multisensory module to improve Sinhala letter 
              writing skills in children with Down syndrome. This system will use CNNs to analyze and provide 
              feedback on letters traced by children on a digital interface, supported by animated stroke-order 
              guidance and audio cues. The aim is to enhance fine motor control, letter formation accuracy, and 
              spatial organization, addressing specific writing difficulties.
            </p>
          </div>

          <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">
              Integration into an Affordable and Accessible Unified Learning Platform
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              The final objective is to integrate these specialized modules (gross motor, verbal communication, 
              mathematics, and writing) into a single, affordable, user-friendly, and accessible web-based platform. 
              This platform will be designed for home-based learning, enabling parents and caregivers to support 
              their children's development effectively, track progress across different skill areas, and provide 
              a comprehensive educational tool tailored to the specific needs of children with Down syndrome in Sri Lanka.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ResearchObjectives
