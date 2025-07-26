import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { SiTwinmotion } from "react-icons/si";
import Website from "./website";
import AI from "./ai";
import Animation from "./animation";

function Portfolio() {
  const [select, selectTab] = useState('website');

  const tabVariants = {
    inactive: {
      scale: 1,
      opacity: 0.7,
      y: 0
    },
    active: {
      scale: 1.05,
      opacity: 1,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      y: -4,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const tabContainerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const tabItemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="flex justify-center items-center flex-col mt-10"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 uppercase tracking-wide text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Portfolio
            <motion.div 
              className="h-1 w-20 bg-blue-500 mx-auto mt-2"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.h1>
        </motion.header>

        <div className="main flex items-center justify-center h-full mt-10 mx-auto">
          <motion.ul
            className="flex flex-col sm:flex-row justify-center items-center text-xl gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 list-none w-full"
            variants={tabContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li
              className={`relative group text-base sm:text-lg font-bold flex flex-col items-center gap-2 transition-colors duration-300 cursor-pointer px-4 py-2 ${
                selectTab === 'website' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'
              }`}
              onClick={() => selectTab("website")}
              variants={tabItemVariants}
              animate={selectTab === 'website' ? 'active' : 'inactive'}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={selectTab === 'website' ? { rotateY: 360 } : { rotateY: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CgWebsite className="text-2xl sm:text-3xl" />
              </motion.div>
              <span className="text-center text-sm sm:text-base">Websites</span>
              {selectTab === 'website' && (
                <motion.div
                  className="absolute -bottom-2 left-1/2 w-8 h-1 bg-blue-500 rounded-full"
                  layoutId="activeTab"
                  initial={false}
                  style={{ x: '-50%' }}
                />
              )}
            </motion.li>

            <motion.li
              className={`relative group text-base sm:text-lg font-bold flex flex-col items-center gap-2 transition-colors duration-300 cursor-pointer px-4 py-2 ${
                selectTab === 'AI' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'
              }`}
              onClick={() => selectTab("AI")}
              variants={tabItemVariants}
              animate={selectTab === 'AI' ? 'active' : 'inactive'}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={selectTab === 'AI' ? { rotateY: 360 } : { rotateY: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FaCode className="text-2xl sm:text-3xl" />
              </motion.div>
              <span className="text-center text-sm sm:text-base">Artificial Intelligence</span>
              {selectTab === 'AI' && (
                <motion.div
                  className="absolute -bottom-2 left-1/2 w-8 h-1 bg-blue-500 rounded-full"
                  layoutId="activeTab"
                  initial={false}
                  style={{ x: '-50%' }}
                />
              )}
            </motion.li>

            <motion.li
              className={`relative group text-base sm:text-lg font-bold flex flex-col items-center gap-2 transition-colors duration-300 cursor-pointer px-4 py-2 ${
                selectTab === 'Animation' ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500'
              }`}
              onClick={() => selectTab("Animation")}
              variants={tabItemVariants}
              animate={selectTab === 'Animation' ? 'active' : 'inactive'}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={selectTab === 'Animation' ? { rotateY: 360 } : { rotateY: 0 }}
                transition={{ duration: 0.6 }}
              >
                <SiTwinmotion className="text-2xl sm:text-3xl" />
              </motion.div>
              <span className="text-center text-sm sm:text-base">Animations</span>
              {selectTab === 'Animation' && (
                <motion.div
                  className="absolute -bottom-2 left-1/2 w-8 h-1 bg-blue-500 rounded-full"
                  layoutId="activeTab"
                  initial={false}
                  style={{ x: '-50%' }}
                />
              )}
            </motion.li>
          </motion.ul>
        </div>

        <div className="mt-8 sm:mt-10">
          <AnimatePresence mode="wait">
            {select === 'website' && (
              <motion.div
                key="website"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Website />
              </motion.div>
            )}
            {select === 'AI' && (
              <motion.div
                key="ai"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <AI />
              </motion.div>
            )}
            {select === 'Animation' && (
              <motion.div
                key="animation"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Animation />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}

export default Portfolio;