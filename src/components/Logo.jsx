import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/" className="text-3xl cursor-pointer">
			<span className="text-dark font-extrabold">Movie</span>
			<span className="text-dark-1">Mania</span>
		</Link>
	);
};
export default Logo;
