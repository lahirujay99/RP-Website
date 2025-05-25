import { motion } from "framer-motion";
import hederimage from "../assets/hero.png"; // Adjust path if needed

function TopPage() {
  return (
    <div className="relative w-full h-[600px] overflow-x-hidden">
      {/* Background image */}
      <img
        src={hederimage}
        alt="Top Image"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Centered content with heading and button */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Localized blur effect only behind the text */}
        <div className="relative">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-lg -m-2 p-4"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-2 relative z-10">
            Little Hearts
          </h1>
          <p className="text-xl md:text-2xl text-white font-light italic relative z-10 max-w-3xl">
            multisensory learning tools for children with Down syndrome
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default TopPage;




