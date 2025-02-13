import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlowLove = () => {
  const [showButton, setShowButton] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  useEffect(() => {
    setTimeout(() => setShowButton(true), 2000);
  }, []);

  useEffect(() => {
    if (!showMessage) {
      const interval = setInterval(() => {
        setFloatingHearts((prev) => [...prev, Date.now()]);
      }, 500);

      setTimeout(() => clearInterval(interval), 3000);
      return () => clearInterval(interval);
    }
  }, [showMessage]);

  return (
    <div className="flex flex-col items-center justify-center bg-pink-50 text-center p-4 relative overflow-hidden">
      {!showMessage && (
        <motion.div
          className="text-pink-500 text-6xl animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          ❤
        </motion.div>
      )}
      {/* floatinHearts */}
      {floatingHearts.map((id) => (
        <motion.div
          key={id}
          className="absolute text-pink-400"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -100 }}
          transition={{ duration: 2 }}
          style={{ bottom: 40, left: `${Math.random() * 100}%` }}
        >
          💖
        </motion.div>
      ))}

      {showButton && !showMessage && (
        <motion.button
          className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
          onClick={() => setShowMessage(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Done Yet?
        </motion.button>
      )}

      {showMessage && (
        <motion.p
          className="text-pink-700 text-xl mt-6 p-4 bg-white rounded-lg shadow-md space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            It's Valentine's Day, my love. I'm not much of a valentine person
            but then, I'm with my favorite person, so why not? This is my
            littlest way of expressing my love to you. I thought and thought of
            thoughtful gifts to give, went through my account balance, searched
            for things online but then, guess what? My account balance told me
            to take a chill pill and think of something better😂. Funny right?😂{" "}
          </p>

          <p>
            To be very very honest with you, Me searching for things online and
            wanting to gift you wasn't because I was expecting something, or I
            wanted something from you.. I mean, you should know me. I'm not a
            material kind of person 👌.The reason why I really wanted to gift
            you is because, You're all that! You deserve everything😍. From the
            way you express your love, the way you care, the way you're
            interested in whatever makes me happy, your support through
            everything, the way you annoy me, the way you apologize, the littlest
            talks, the laughs, amongst many others💖. If I were to keep on
            writing about you, trust me, you won't receive this gift on
            valentine's day.😂
          </p>

          <p>
            I know this isn't the very best gift I could give, it's just a
            starting point. We have many years to spend with each other. Jesus
            still tarrying, We'll get married. Tbh, I really want to write
            stores like "From he first time I knew you, blah blah" but then, I
            won't finish today😭. Why so sweet?😭.
          </p>

          <p>
            Now, This is me wishing you a Happy Valentine's day. I wish us many
            many more years together and many love to show. I love the way you
            love me. I love you so much my baby boy. Muah😘.
          </p>
        </motion.p>
      )}
    </div>
  );
};

export default GlowLove;
