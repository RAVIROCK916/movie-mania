import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-[1] flex items-center justify-between bg-opacity-50 px-8 py-6 text-light-1">
      <div>
        <Logo />
      </div>
      <div className="space-x-8 text-sm">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
};
export default Header;
