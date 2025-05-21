import { motion } from "framer-motion";

function LiteratureReview() {
  return (
    <div className="text-center mt-5 py-8 md:py-12 max-w-6xl mx-auto px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-800">Literature Review</h2>
        
        <div className="text-left space-y-4 md:space-y-6">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Children with Down syndrome (DS) often encounter significant developmental challenges that impact their 
            core abilities, including mathematical understanding, speech and language, gross motor skills, and fine 
            motor skills like writing. Addressing these challenges effectively requires interactive and tailored 
            educational approaches.
          </p>          <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">Multisensory Learning Approaches</h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              Multisensory learning equipment and movement-based strategies are recognized for enhancing learning 
              efficiency and interactivity in children with DS. These approaches engage multiple senses simultaneously,
              creating more robust neural connections and improving retention.
            </p>
          </div>
          
          <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">Mathematical Skill Development</h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              For mathematical skill development, Finger Mathematics has proven scientifically and socially significant. 
              Its efficacy is further boosted by modern technologies like:
            </p>
            <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2">
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Convolutional Neural Networks (CNNs)</span>: Enable complex pattern recognition
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">OpenCV</span>: Facilitates computer vision applications
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">MediaPipe</span>: Allows for real-time hand gesture and number recognition
              </li>
            </ul>
            <p className="text-sm md:text-base text-gray-700 mt-2 md:mt-3">
              These tools make learning more visual and tactile, significantly improving comprehension for children with DS.
            </p>
          </div>
            <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">Speech and Language Development</h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              In speech development, children with DS typically experience delays in output and limited vocabulary. 
              Research shows the effectiveness of:
            </p>
            <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2">
              <li className="text-sm md:text-base text-gray-700">Interactive word games that engage multiple senses</li>
              <li className="text-sm md:text-base text-gray-700">Structured learning strategies for word recognition</li>
              <li className="text-sm md:text-base text-gray-700">Formal learning approaches to assist with pronunciation</li>
            </ul>
            <p className="text-sm md:text-base text-gray-700 mt-2 md:mt-3">
              These interventions help improve communication with neurotypical individuals, enhancing social integration.
            </p>
          </div>
          
          <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">Gross Motor Skill Development</h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              Gross motor skill development is often delayed due to hypotonia (low muscle tone) and coordination issues,
              significantly affecting daily activities. Research highlights:
            </p>
            <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2">
              <li className="text-sm md:text-base text-gray-700">Movement-based activities to strengthen core muscles</li>
              <li className="text-sm md:text-base text-gray-700">Kinesthetic learning strategies for improving motor coordination</li>
              <li className="text-sm md:text-base text-gray-700">Assistive platforms like the EduPlaneer system that integrate kinesthetic, auditory, and visual learning</li>
            </ul>
            <p className="text-sm md:text-base text-gray-700 mt-2 md:mt-3">
              These approaches often employ machine learning to personalize activities, creating adaptive and engaging environments.
            </p>
          </div>
            <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">Fine Motor Skills & Handwriting</h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              Fine motor skills, particularly writing, present substantial difficulties due to hypotonia and coordination deficits,
              often resulting in irregular handwriting, especially with complex scripts.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              While traditional methods may fall short, artificial intelligence offers promising solutions:
            </p>
            <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2">
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Convolutional Neural Networks (CNNs)</span>: Show strong potential for recognizing unique handwriting features
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Data Augmentation Techniques</span>: Help model variability in handwriting patterns
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Personalized AI Systems</span>: Enhance individualized handwriting support
              </li>
            </ul>
            <p className="text-sm md:text-base text-gray-700 mt-2 md:mt-3">
              These technologies address gaps left by tools focusing primarily on language skills, providing more comprehensive support.
            </p>
          </div>
          
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            This comprehensive literature review has informed our approach to designing multisensory learning
            platforms that address the specific developmental needs of children with Down syndrome across multiple skill domains.
            By integrating advanced technologies with evidence-based learning strategies, we aim to create more effective, 
            engaging, and personalized educational experiences.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default LiteratureReview
