// No React import needed with React 17+ and JSX Transform
import { motion } from "framer-motion";
import diagram from '../assets/system diagram.jpeg'; // Adjust the path as necessary
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
                  src={diagram}
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
          <div className="space-y-4 md:space-y-6 lg:w-1/2">            <p className="text-sm md:text-base text-gray-700">
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
                During the Practice stage, the child's inputs are captured:
              </p>

              <ul className="list-disc pl-6 space-y-1 md:space-y-2">
                <li className="text-sm md:text-base text-gray-700">
                  For the Mathematics teaching component, video input of the child's hands is processed. 
                  MediaPipe is used (typically client-side within the React frontend) to extract detailed hand 
                  landmark data in real-time. This landmark data precisely represents the child's mathematical 
                  gestures (e.g., finger counts, operational signs).
                </li>
                <li className="text-sm md:text-base text-gray-700">
                  For other components, inputs such as spoken words (audio), traced letters (images), 
                  and physical movements (video for pose estimation) are captured.
                </li>
              </ul>

              <p className="text-sm md:text-base text-gray-700 mb-3">
                This varied input data (audio for word pronunciation, image data for handwriting, 
                the extracted hand landmark coordinates for mathematics, and pose data for gross motor 
                skills) is sent via HTTP request to the backend Flask server. This server houses the 
                core Backend Functions which process these inputs. Specifically:
              </p>
              
              <ul className="list-disc pl-6 space-y-1 md:space-y-2">
                <li className="text-sm md:text-base text-gray-700">
                  <span className="font-medium">LSTM Models</span> are utilized for tasks involving sequential data, 
                  such as analyzing word pronunciations and assessing gross motor skill sequences 
                  (derived from pose estimation data).
                </li>
                <li className="text-sm md:text-base text-gray-700">
                  <span className="font-medium">CNN Models</span> are employed for visual pattern recognition tasks, 
                  such as identifying handwritten letters from the image data.
                </li>
                <li className="text-sm md:text-base text-gray-700">
                  For the Mathematics component, a dedicated backend function on the Flask server hosts 
                  a custom algorithm. This algorithm takes the incoming MediaPipe hand landmark data, analyzes 
                  the spatial configuration of these landmarks, and interprets the child's finger patterns to 
                  determine the specific number being shown (0-9) or the mathematical operation being gestured. 
                  This provides the core logic for the finger mathematics interactions.
                </li>
              </ul>
              
              <p className="text-sm md:text-base text-gray-700 mt-3 mb-3">
                Frameworks like TensorFlow are used to build and run the LSTM and CNN models. Libraries 
                such as OpenCV and MediaPipe are broadly utilized: MediaPipe for crucial feature extraction 
                like hand landmarks (for mathematics) and pose estimation (for gross motor skills), and 
                OpenCV for general image/video input handling and pre-processing, often working in conjunction 
                before data is sent to or processed by the Flask backend functions.
              </p>
              
              <p className="text-sm md:text-base text-gray-700 mb-3">
                The Flask server, through its respective backend functions, processes these inputs and 
                provides real-time feedback directly to the Web System, allowing the child to immediately 
                understand their performance in each activity.
              </p>
              
              <p className="text-sm md:text-base text-gray-700">
                Simultaneously, data related to the child's performance and progress from the practice 
                stages (including the interpretations from the mathematics component) is sent via HTTP 
                request to a Node Server. This server is responsible for Progress tracking functions. 
                It processes and stores the child's learning data (scores, areas of difficulty, milestones 
                achieved) into a MongoDB Database.
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