"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data';
import Link from 'next/link';

export default function Header() {
  return (
    <header className = "z-[999] relative">
      <motion.div className="fixed top-0 left-1/2 h-[4.5rem]
      w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
      backdrop-blur-[0.05rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
      initial ={{ y: -100, x: "-50%", opacity:0 }}
      animate = {{ y: 0, x: "-50%", opacity:1 }}
      transition={{ duration: 0.3, delay: 0.2, type: "spring", stiffness: 100 }}
      ></motion.div>

      <nav className = "flex fixed top-[0.25rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {
          links.map(link => (
            <motion.li className=" h-3/4 flex items-center justify-center" key = {link.hash}
              initial = {{ opacity: 0, y: -100 }}
              animate = {{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <Link className='flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950' href={link.hash}>
                {
                  link.name
                }

              </Link>
            </motion.li>
          ))
          }

        </ul>
      </nav>

    </header>
  )
}
