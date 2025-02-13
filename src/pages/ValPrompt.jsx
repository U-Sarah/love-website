import React from "react";

const ValPrompt = ({onAccept}) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-red-500">
      <h1 className="text-4xl font-bold text-white mb-6">
        Will you be my Valentine?
      </h1>
      <div className="space-x-4">
        <button onClick={onAccept} className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition">
          Yes
        </button>
        <button onClick={onAccept} className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition">
          Yes
        </button>
      </div>
    </div>
  );
};

export default ValPrompt;
