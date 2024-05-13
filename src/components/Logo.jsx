import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/" className="text-3xl cursor-pointer">
			<span className="text-light font-extrabold">Movie</span>
			<span className="text-light-1">Mania</span>
		</Link>
	);
};
export default Logo;
