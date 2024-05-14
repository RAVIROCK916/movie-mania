import Link from "next/link";
import Logo from "./Logo";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-[1] flex items-center justify-between bg-opacity-50 px-8 py-6 text-light-1">
      <div>
        <Logo />
      </div>
      <div className="flex items-center space-x-8 text-sm">
        <SignedIn>
          <Link href="/dashboard">Dashboard</Link>
          <UserButton afterSignOutUrl="/login" />
        </SignedIn>
        <SignedOut>
          <Link href="/login">Login</Link>
          <Link href="/sign-up">Signup</Link>
        </SignedOut>
      </div>
    </header>
  );
};
export default Header;
