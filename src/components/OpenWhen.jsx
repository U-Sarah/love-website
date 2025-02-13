import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { h3 } from "motion/react-client";

const OpenWhen = () => {
  const messages = [
    {
      title: "Open when you're sad",
      content: "Remeber, you're never alone. My love is always with you❤.",
    },
    {
      title: "Open when you miss me",
      content:
        "Close your eyes and feel my arms around you, I'm always here😊.",
    },
    {
      title: "Open when you need to smile",
      content:
        "Think of our best memories together and let them warm your heart😍.",
    },
    {
      title: "Open when you're feeling down and confused",
      content:
        "Think of how far God has brought you and all he has done for you❤.",
    },
    { title: "Open when you're hungry", content: "Better go and eat😂" },
    {
      title: "Open when you miss me again",
      content:
        "Open your gallery/snap and watch our videos together. I'm sure it'll make you smile😊.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const [showLoveNote, setShowLoveNote] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    if (openIndex !== index) {
      setFloatingHearts((prev) => [...prev, Date.now()]);
      setTimeout(() => {
        setFloatingHearts([]);
      }, 3000);
    }
  };

  const showHiddenLoveNote = () => {
    setShowLoveNote(true);
    setFloatingHearts((prev) => [...prev, Date.now()]);
    setTimeout(() => {
      setFloatingHearts([]);
    }, 3000);
  };

  return (
    <div className="bg-pink-50 relative p-4 sm:p-6 rounded-xl shadow-md mt-6 mx-2 sm:mx-4 text-center">
      <h2 className="text-2xl sm:text-2xl font-bold text-pink-600 mb-4">Love Messages❤</h2>
      <div className="flex flex-wrap justify-center sm:gap-6">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-3 sm:p-4 w-full sm:w-64 h-auto rounded-lg shadow-md border border-pink-200 cursor-pointer flex flex-col items-center justify-center text-center"
            onClick={() => toggleCard(index)}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            {" "}
            <h3 className="text-pink-600 font-bold text-sm sm:text-base">{msg.title}</h3>
            {openIndex === index && (
              <p className="text-pink-700 font-medium mt-2 text-sm">{msg.content} </p>
            )}
          </motion.div>
        ))}
      </div>
      {/* Hidden Love Note Button */}
      <button
        onClick={showHiddenLoveNote}
        className="fixed bottom-6 right-6 sm:right-8 bg-pink-500 p-3 rounded-full text-white hover:bg-pink-600 transition shadow-lg z-50"
      >
        <Heart size={20} />
      </button>
      {/* Hidden Love Note */}
      {showLoveNote && (
        <motion.div
          className="fixed bottom-16 right-6 sm:right-8 bg-white p-3 sm:p-4 rounded-lg shadow-md border border-pink-200 text-pink-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          "P.S. I love you more than you know❤💖"
        </motion.div>
      )}

      {/* Floating Hearts Animation */}
      
      {floatingHearts.map((id) => (
        <motion.div
          key={id}
          className="absolute text-pink-400 text-3xl"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -100 }}
          transition={{ duration: 2 }}
          style={{ bottom: 40, right: Math.random() * 50 + "%" }}
        >
          💕
        </motion.div>
      ))}
    </div>
  );
};

export default OpenWhen;
