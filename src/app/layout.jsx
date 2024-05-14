import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const inter = Inter({
	displayName: "Inter",
	subsets: ["latin"],
});

export const metadata = {
	title: "Movie Mania",
	description: "A place to discover the best movies",
	keywords: "nextjs, clerk, next-auth, tailwindcss",
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<head>
					<link rel="icon" href="/favicon.ico" />
				</head>
        <body className={`${inter.classname} antialiased text-neutral-900 bg-neutral-100`}>
					<Header />
					<main>{children}</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
