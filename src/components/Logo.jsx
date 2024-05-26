import Link from "next/link";
import { RiMovie2Line } from "react-icons/ri";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-dark-secondary-500 cursor-pointer text-center text-sm"
    >
      <RiMovie2Line className="mx-auto size-8" />

      <span className="text-xs font-semibold uppercase">Movie Mania</span>
    </Link>
  );
};
export default Logo;
