"use client";

import Link from "next/link";
import Logo from "./Logo";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import { MdLogin } from "react-icons/md";
import { BiUser } from "react-icons/bi";

const Header = () => {
  const { openUserProfile } = useClerk();

  return (
    <header className="container-section absolute left-0 right-0 top-0 z-10 m-0 flex items-center justify-between px-16 py-4 text-dark-primary-100">
      <div>
        <Logo />
      </div>
      <div className="flex items-center space-x-8 text-sm font-semibold">
        <SignedIn>
          <Link href="/dashboard">Dashboard</Link>
          <UserButton afterSignOutUrl="/login" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-up">
            <MdLogin className="text-xl" />
          </Link>
          <Link href="/login">
            <BiUser className="text-xl" />
          </Link>
        </SignedOut>
      </div>
    </header>
  );
};
export default Header;
