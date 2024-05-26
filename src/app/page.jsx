import Image from "next/image";
import MovieCategoryCards from "@/components/MovieCategoryCards";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-between bg-main bg-cover bg-no-repeat px-20 text-white">
        <div className="z-10 max-w-sm space-y-4 bg-dark-primary-500 bg-opacity-10 p-4">
          <h1 className="text-5xl font-bold">Lets Make Our Own Cinema</h1>
          <p>
            You can enjoy the latest movies and other shows online at a lower
            price
          </p>
          <div className="flex items-center justify-between">
            <button className="w-40 bg-dark-secondary-500 px-10 py-4 text-xs font-semibold">
              Get Started
            </button>
            <button className="w-40 border border-dark-secondary-500 px-10 py-4 text-xs font-semibold">
              More
            </button>
          </div>
        </div>
        <div>Best Movies</div>
      </div>
      <MovieCategoryCards />
    </div>
  );
}
