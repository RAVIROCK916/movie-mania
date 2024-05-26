"use client";

import Link from "next/link";
import Logo from "./Logo";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import { MdLogin } from "react-icons/md";

const Header = () => {
  const { openUserProfile } = useClerk();

  return (
    <header className="container-section absolute z-10 flex w-full items-center justify-between pb-12 text-dark-primary-100">
      <div>
        <Logo />
      </div>
      <div className="flex items-center space-x-8 text-sm font-semibold">
        <SignedIn>
          <Link href="/dashboard">Dashboard</Link>
          <UserButton afterSignOutUrl="/login" />
        </SignedIn>
        <SignedOut>
          <Link href="/login">
            <MdLogin />
          </Link>
          <Link href="/sign-up">Signup</Link>
        </SignedOut>
      </div>
    </header>
  );
};
export default Header;
