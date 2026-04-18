'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // ⏳ 2.5 seconds fixed loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
          >
            <div className="text-center">
              
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white"
              >
                WELCOME TO KAZIR NATION
              </motion.h1>

              <div className="mt-8 flex justify-center">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 220 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  className="h-[2px] bg-white"
                />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </>
  );
}