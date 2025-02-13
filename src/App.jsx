import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ValPrompt from "./pages/ValPrompt";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={accepted ? (showMainPage ? "main" : "welcome") : "valprompt"}
        initial={{ opacity: 0, filter: "blur(10px) brightness(0.8)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px) brightness(1)",
          boxShadow: "0px 0px 15px rgba(255, 182, 193, 0.6)",
        }}
        exit={{ opacity: 0, filter: "blur(10px) brightness(0.8)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {!accepted ? (
          <ValPrompt onAccept={() => setAccepted(true)} />
        ) : !showMainPage ? (
          <WelcomePage onProceed={() => setShowMainPage(true)} />
        ) : (
          <MainPage />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
