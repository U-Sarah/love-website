import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LoveNotes = () => {
  const notes = [
    "I love the way you love, it changed my perspective about the word called 'Love'.",
    "Every moment spent with you makes me the happiest and I could never ask for more.",
    "You're my one and only, the one I'll love forever and always.",
    "Your Smile and laughter brightens up the room, what more my heart?😍",
    "You're my answered prayer, God being with Us, this is the beginning of forever.",
    "I love you so much, My TEMINIKAN, My ONE AND ONLY, My IFE and many more.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevNote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? notes.length - 1 : prevIndex - 1
    );
  };
  const nextNote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === notes.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="bg-pink-50 p-6 rounded-xl shadow-md mt-6 mx-4 text-center">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">Love Notes 💌</h2>
      <div className=" flex items-center justify-center space-x-4 w-full">
        <button
          onClick={prevNote}
          className="p-3 bg-pink-200 rounded-full hover:bg-pink-300 transition"
        >
          <ChevronLeft />{" "}
        </button>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-pink-200 w-72 min-h-32 text-center justify-center items-center text-pink-700 text-lg font-medium ">
          {notes[currentIndex]}
        </div>
        <button
          onClick={nextNote}
          className="p-3 bg-pink-200 rounded-full hover:bg-pink-300 transition"
        >
          <ChevronRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default LoveNotes;
