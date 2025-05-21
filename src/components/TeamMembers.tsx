import { motion } from "framer-motion";
import cosupervicser from '../assets/thamalik-1682326358.jpg';
import supervisor from '../assets/received_1709833112455269.jpeg';
import kamesh from '../assets/kamesh.jpg';
import lahiru from '../assets/lahiru.jpg'

const TeamMembers = () => {
  return (
    <div className="py-10 px-5 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-12 text-blue-800">
       Meet Our Team
      </h2>
      
      {/* Supervisors Section */}
      <h3 className="text-center text-xl font-semibold mb-8 text-blue-800">Project Supervisors</h3>
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            <img
              src={supervisor}
              alt="Ms. Jenny Krishara"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.h1
            className="text-xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ms. Jenny Krishara
          </motion.h1>
          <motion.p
            className="text-lg font-medium text-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Supervisor
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            <img
              src={cosupervicser}
              alt="Ms. Thamali Kelegama"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.h1
            className="text-xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ms. Thamali Kelegama
          </motion.h1>
          <motion.p
            className="text-lg font-medium text-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Co-Supervisor
          </motion.p>
        </motion.div>
      </div>

      {/* Team Members Section */}
      <h3 className="text-center text-xl font-semibold mb-8 text-blue-800">Research Team</h3>
      <div className="flex flex-wrap justify-center gap-10">
        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            <img
              src={kamesh}
              alt="Kamesh Diviyanah"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.h1
            className="text-xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Kamesh Diviyanjana
          </motion.h1>
          
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            <img
              src={lahiru}
              alt="Team Member"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.h1
            className="text-xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Lahiru Jayawardhane
          </motion.h1>
         
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            <img
              src="https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg"
              alt="Team Member"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.h1
            className="text-xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hiran Kaushalya
          </motion.h1>
          
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            <img
              src="https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg"
              alt="Team Member"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.h1
            className="text-xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Amadhi Wijesinghe
          </motion.h1>
          
        </motion.div>
      </div>
    </div>
  );
};

export default TeamMembers;

