"use client";

import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Menubutton() {
  const [sidebar, setSidebar] = useState(false);
  const toggleShow = () => {
    setSidebar(!sidebar);
  };


  return (
    <div>
      <button className="text-xl" onClick={toggleShow}>
        <BsThreeDotsVertical />
      </button>
      <div
        className={`${
          !sidebar ? "hidden" : "transition-opacity opacity-100"
        } absolute flex justify-center bg-[#04081ddc] text-[#e7fddd] items-center top-0 right-0 w-[30vh] h-[40vh] rounded-xl`}
      >
        <span onClick={toggleShow} className="absolute top-3 right-5 text-xl">
          <AiOutlineClose />
        </span>

        <ul className="flex-col top-10 text-xl">
          
            <li className="m-4 hover:text-lime-300"><Link href="/" onClick={toggleShow}>Home</Link></li>
            <li className="m-4 hover:text-lime-300"><Link href="/events" onClick={toggleShow}>Events</Link></li>
            <li className="m-4 hover:text-lime-300"><Link href="/about" onClick={toggleShow}>About</Link></li>
            <li className="m-4 hover:text-lime-300"><Link href="/admin" onClick={toggleShow}>Admin</Link></li>
            
          
        </ul>
      </div>
    </div>
  );
}
