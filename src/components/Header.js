import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <header className="w-full flex flex-col">
        <div className="w-full text-center p-2 bg-blue-600 text-white text-sm">
          Use code
          <span className="font-bold"> DECEM10 </span>
          for
          <span className="font-bold"> $10 OFF </span>
          your first order
        </div>
        <nav className="w-full flex justify-between items-center text-xl px-8 py-1 font-semibold">
          <div className="flex gap-4">
            <Link href={"/"}>SHOP</Link>
            <Link href={"/"}>STORY</Link>
          </div>
          <Link className="text-4xl" href={"/"}>
            DECEM
          </Link>
          <div>
            BASKET <span className="italic">({count})</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
