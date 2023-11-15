import Image from "next/image";
import React from "react";
import ThemeButton from "./Themebutton";
import Link from "next/link";

import Menubutton from "./Menubutton";

export default function Navbar() {
  return (
    <>
      <div className="top-0 z-30 sticky dark:text-zinc-50">
        <div className="h-16 z-50 top-0 backdrop-saturate-200 backdrop-blur-[6px] shadow-lg flex justify-around md:justify-around items-center">
          <div className="flex justify-center items-center mr-20 md:m-2">
            <Link href="/">
              <Image src="/logo.png" width={40} height={40} alt="/" />
            </Link>
            <Link href="/">
              <span className="m-2 md:text-3xl text-2xl font-bold">
                KARTAVYA
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <ul className="flex justify-center items-center mx-9">
                <Link href="/">
                  <li className="m-2 hover:border-2 hover:scale-1050 hover:border-blue-950 dark:hover:border-green-300 rounded-full px-3 transition-all ease-in-out duration-100">
                    Home
                  </li>
                </Link>
                <Link href="/events">
                  <li className="m-2 hover:border-2 hover:scale-1050 hover:border-blue-950 dark:hover:border-green-300 rounded-full px-3 transition-all ease-in-out duration-100">
                    Events
                  </li>
                </Link>
                <Link href="/about">
                  <li className="m-2 hover:border-2 hover:scale-1050 hover:border-blue-950 dark:hover:border-green-300 rounded-full px-3 transition-all ease-in-out duration-100">
                    About
                  </li>
                </Link>
                <Link href="/admin">
                  <li className="m-2 hover:border-2 hover:scale-1050 hover:border-blue-950 dark:hover:border-green-300 rounded-full px-3 transition-all ease-in-out duration-100">
                    Admin
                  </li>
                </Link>
              </ul>
            </div>

            <div className="md:m-3 flex pt-2 justify-center items-center">
              <div className="p-2">
                <ThemeButton />
              </div>
              <div>
                <div className="focus:bg-none md:hidden p-2">
                  <Menubutton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
