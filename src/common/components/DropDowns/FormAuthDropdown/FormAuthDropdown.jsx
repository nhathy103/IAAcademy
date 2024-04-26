import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FormAuthDropdown({ children, href, title }) {
  const [open, setOpen] = useState(false);

  const showFlyout = children && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='flex flex-row items-center gap-1 relative'
    >
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-[28px] h-[28px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </span>

      <div className=''>
        <div className='text-[13px] font-semibold '>
          Đăng nhập / Đăng ký
        </div>
        <div className='flex flex-row text-[13px] items-center gap-2'>
          <span className='font-semibold'>Tài khoản của tôi</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
      </div>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "0%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute w-[340px] bg-white text-black right-0 top-14 z-50 shadow-inner drop-shadow-md"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute right-8 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
