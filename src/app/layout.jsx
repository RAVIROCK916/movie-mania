import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { dark } from "@clerk/themes";

const inter = Inter({
  displayName: "Inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  displayName: "Raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "Movie Mania",
  description: "A place to discover the best movies",
  keywords: "nextjs, clerk, next-auth, tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={`${raleway.className} antialiased`}>
          <Header />
          <main className="flex min-h-screen flex-col justify-center overflow-hidden">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
