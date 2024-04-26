import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FlyoutLink({ children, title }) {
  const [open, setOpen] = useState(false);

  const showFlyout = children && open;

  return (
    <div className="flex flex-col gap-8 transform duration-300">
      <div
        onClick={() => setOpen(!showFlyout)}
        className="py-2 px-10 text-[#fff] bg-black flex flex-row font-bold text-[18px] justify-between items-center ">
        <div>{title}</div>
        <div>
          {showFlyout ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          )}

        </div>
      </div>

      <AnimatePresence>
        {showFlyout && (
          // <div className='overflow-hidden'>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ translateX: "0%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=" w-11/12 mx-auto leading-6 tracking-wide bg-white text-black left-0"
          >
            {children}
          </motion.div>
          // </div>
        )}
      </AnimatePresence>

    </div>
  )
}