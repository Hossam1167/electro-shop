import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppleLogo from "../assets/png-transparent-apple-logo-apple-computer-icons-apple-logo-heart-computer-logo-thumbnail.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative w-10 h-10 object-contain cursor-pointer opacity-75 transition hover:opacity-100 ">
            <Image src={AppleLogo} alt="" fill />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="headerIcon">
        <MagnifyingGlassIcon />
      </div>
    </header>
  );
};

export default Header;
