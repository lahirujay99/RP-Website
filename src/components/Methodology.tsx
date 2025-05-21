// No React import needed with React 17+ and JSX Transform
import { motion } from "framer-motion";

function Methodology() {
  return (
    <div className="text-center mt-5 py-8 md:py-12 max-w-6xl mx-auto px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-800">
          Methodology
        </h2>
          {/* Main flexbox container for two-column layout */}        <div className="flex flex-col lg:flex-row text-left gap-6 md:gap-8">
          {/* Left column - System Architecture Diagram */}
          <div className=" md:p-6 rounded-lg shadow-sm lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-blue-700 text-center">
              System Architecture
            </h3>
            {/* System Architecture Diagram */}
            <div className="flex justify-center mb-4 md:mb-6 bg-white p-4 rounded-lg border border-gray-200">
              <div className="relative w-full h-72 md:h-96 lg:h-[500px] bg-white flex items-center justify-center">
                <img 
                  src="/src/assets/system diagram.jpeg" 
                  alt="System Architecture Diagram" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            
            <p className="text-sm md:text-base text-gray-700 mb-2">
              Fig. 3 illustrates the overall system architecture of the proposed solution, 
              which is designed to provide an interactive and adaptive learning environment for 
              children with Down syndrome.
            </p>
          </div>
            {/* Right column - Methodology Explanation Section */}
          <div className="space-y-4 md:space-y-6 lg:w-1/2">
            <p className="text-sm md:text-base text-gray-700">
              The proposed multisensory learning platform consists of five main components, addressing 
              distinct developmental areas and overall progress tracking. These are:
            </p>
            
            <ul className="list-disc pl-6 space-y-1 md:space-y-2">
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Word Pronunciation teaching component</span>
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Handwriting teaching component</span>
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Basic Mathematics teaching component</span>
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Gross Motor Skills teaching component</span>
              </li>
              <li className="text-sm md:text-base text-gray-700">
                <span className="font-medium">Progress</span> (including analytics and parental guidance)
              </li>
            </ul>
            
            <div className=" p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-700">
                System Flow & Components
              </h3>
              
              <p className="text-sm md:text-base text-gray-700 mb-3">
                As depicted in the diagram, the User (child, often with parental support) 
                interacts with the Web System through a React.js frontend. The user can select 
                one of the four core teaching components. Each component guides the child through 
                a Teaching stage for initial learning and a Practice stage where they apply what 
                they've learned.
              </p>
              
              <p className="text-sm md:text-base text-gray-700 mb-3">
                During the Practice stage, the child's inputs (e.g., spoken words, traced letters, 
                mathematical gestures, physical movements) are captured. This data is sent via HTTP 
                request to the backend Flask server. This server houses the core Backend Functions 
                powered by Deep Learning models. Specifically:
              </p>
              
              <ul className="list-disc pl-6 space-y-1 md:space-y-2">
                <li className="text-sm md:text-base text-gray-700">
                  <span className="font-medium">LSTM Models</span> are utilized for tasks involving sequential data, 
                  such as analyzing word pronunciations and assessing gross motor skill sequences 
                  (likely using pose estimation data).
                </li>
                <li className="text-sm md:text-base text-gray-700">
                  <span className="font-medium">CNN Models</span> are employed for visual pattern recognition tasks, 
                  such as identifying handwritten letters and classifying finger gestures for basic 
                  mathematics.
                </li>
              </ul>
              
              <p className="text-sm md:text-base text-gray-700 mt-3 mb-3">
                Frameworks like TensorFlow (implied by the logo) are used to build and run these models, 
                and libraries such as OpenCV and MediaPipe (indicated by the logo) are used for image/video 
                processing and feature extraction (e.g., hand landmarks, pose estimation) that feed into 
                these models.
              </p>
              
              <p className="text-sm md:text-base text-gray-700 mb-3">
                The Flask server processes this input and provides real-time feedback directly to the 
                Web System, allowing the child to immediately understand their performance.
              </p>
              
              <p className="text-sm md:text-base text-gray-700">
                Simultaneously, data related to the child's performance and progress from the practice 
                stages is sent via HTTP request to a Node Server. This server is responsible for Progress 
                tracking functions. It processes and stores the child's learning data (scores, areas of 
                difficulty, milestones achieved) into a MongoDB Database.
              </p>
            </div>
            
            <p className="text-sm md:text-base text-gray-700">
              The Progress component within the Web System then accesses this stored data from the 
              Node Server/MongoDB. It presents this information as Current Progress analytics for the 
              child and provides Parent guidance, offering insights into the child's development and 
              suggesting areas for further practice or support. This closed-loop system aims to deliver 
              a personalized and effective learning experience.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Methodology