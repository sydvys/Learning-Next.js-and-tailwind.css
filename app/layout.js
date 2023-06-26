"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const [navbar, setNavbar] = useState(false);

  return (
    <html lang="en">
      <body>

        <nav className="w-full fixed top-0 left-0 right-0 z-10">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}
                <Link href="/">
                  <h2 className="text-2xl">
                    <img src="./logo.svg" alt="logo" />
                  </h2>
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 "
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                    ) : (
                      <svg class="w-5 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                  }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-6 text-xl text-white py-2 md:px-6 text-center">
                    <Link href="#" onClick={() => setNavbar(!navbar)}>
                      Help

                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-white py-2 px-6 text-center">
                    <Link href="#" onClick={() => setNavbar(!navbar)}>
                      Dictionaries

                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-white py-2 px-6 text-center">
                    <Link href="#" onClick={() => setNavbar(!navbar)}>
                      Project

                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-white py-2 px-6 text-center">
                    <Link href="#" onClick={() => setNavbar(!navbar)}>

                      Mobile App
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-white py-2 px-6 text-center">
                    <Link href="#" onClick={() => setNavbar(!navbar)}>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>


        {children}
      </body>
    </html>
  );
}
