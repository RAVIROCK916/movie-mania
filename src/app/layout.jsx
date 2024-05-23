import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const inter = Inter({
  displayName: "Inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  displayName: "Montserrat",
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
        <body
          className={`${montserrat.className} bg-neutral-100 text-neutral-900 antialiased`}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
