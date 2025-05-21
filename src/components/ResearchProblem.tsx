
import { motion } from "framer-motion";

function ResearchProblem() {
  return (
    <div className="text-center mt-5 py-8 md:py-12 max-w-6xl mx-auto px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-800">
          Research Problem & Solution
        </h2>
        
        <div className="text-left space-y-4 md:space-y-6">
          <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">
              Proposed Problem
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              How can the educational, social, and personal development of children with Down syndrome (aged 5-10) 
              be effectively enhanced in developing countries like Sri Lanka, where access to specialized, affordable, 
              and integrated learning resources is limited?
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              Children with Down syndrome face significant challenges in acquiring core skills such as handwriting, 
              verbal communication, mathematics, and gross motor coordination. Existing educational solutions are 
              often complex, expensive, lack a specialized curriculum tailored to their unique learning needs, or 
              are not easily accessible for home-based learning. Schools may struggle due to a lack of individual 
              teaching facilities and trained teachers, while generic educational games may not sufficiently engage 
              or address the specific developmental delays. This creates a significant barrier to their overall 
              development and quality of life, particularly in regions where technological literacy and resources 
              are constrained. For efficient support, early, consistent, and personalized intervention across these 
              multiple developmental domains is crucial.
            </p>
          </div>

          <div className="bg-blue-50 p-3 md:p-5 rounded-lg shadow-sm mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-blue-700">
              Proposed Solution
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              This research proposes an AI-driven, multisensory learning platform to address the multifaceted 
              developmental needs of children with Down syndrome (aged 5-10) in Sri Lanka. The platform aims 
              to provide a low-cost, effective, discreet, reliable, and modern educational service, focusing 
              on four main areas: handwriting, verbal communication, mathematics (via Finger Mathematics), and 
              gross motor skills. The core challenge lies in creating a unified system that can accurately 
              assess and provide real-time, personalized feedback across these diverse skill sets.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
              Therefore, Deep Learning technologies, specifically Convolutional Neural Networks (CNNs) and 
              Long Short-Term Memory (LSTM) networks, will be utilized for their robust capabilities in 
              pattern recognition and sequence analysis.
            </p>

            <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2">
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">For Handwriting: </span>
                CNNs will analyze traced Sinhala letters, with the system providing animated stroke-order 
                guidance and immediate feedback on accuracy.
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">For Verbal Communication: </span>
                LSTMs will assess speech recordings for pronunciation accuracy and clarity, supported by 
                visual aids like mouth animations, and offer guided practice with gamified feedback.
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">For Mathematics: </span>
                CNNs, integrated with MediaPipe and OpenCV, will recognize finger-based number representations 
                for teaching basic arithmetic concepts through interactive Finger Mathematics exercises.
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">For Gross Motor Skills: </span>
                LSTMs, using MediaPipe for pose estimation from video, will classify and assess the child's 
                execution of various motor activities, leading to personalized exercise plans.
              </li>
            </ul>

            <p className="text-sm md:text-base text-gray-700 mt-2 md:mt-4">
              Children, with the support of parents or caregivers, will interact with the platform through a 
              user-friendly interface. The system will capture inputs (traced letters, voice recordings, video of 
              movements, hand gestures for math) and provide immediate, constructive feedback. Progress will be 
              tracked and stored (using technologies like MongoDB/Firebase) to monitor development and allow for 
              adaptive learning pathways. Real-time feedback and engaging activities aim to make learning interactive 
              and sustainable at home. This holistic platform is designed to be both affordable and easy to use, 
              empowering parents and improving the quality of life and educational outcomes for children with 
              Down syndrome by offering them tailored support.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ResearchProblem