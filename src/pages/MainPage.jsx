import React, { useState } from "react";
import Header from "../components/Header";
import LoveNotes from "../components/LoveNotes";
import OpenWhen from "../components/OpenWhen";
import GlowLove from "../components/GlowLove";
import { motion } from "framer-motion";

const MainPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="bg-pink-50 min-h-screen p-4  relative" >
      <Header />
      <LoveNotes />
      <OpenWhen />
      <GlowLove />

{/* Final Button to Trigger Pop-up */}
<div className="mt-12">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-pink-500 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-lg hover:bg-pink-600 transition shadow-md text-sm sm:text-base"
        >
          Done Reading? Click Me! 💖
        </button>
      </div>

      {/* Pop-up Message */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center border border-pink-300 w-full max-w-sm sm:max-w-md"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <p className="text-pink-700 text-sm sm:text-lg font-medium">
              Thank you for reading through! You mean the world to me 🥰💖
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-pink-500 text-white px-3 py-1 rounded-lg hover:bg-pink-600 transition text-sm"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MainPage;
