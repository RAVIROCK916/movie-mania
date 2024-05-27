import MovieCategoryCards from "@/components/MovieCategoryCards";
import CategorySort from "@/components/CategorySort";
import { PiFilmSlateThin } from "react-icons/pi";
import { descriptionList } from "@/data";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-between bg-opacity-10 bg-main bg-cover bg-no-repeat px-20 text-white">
        <div className="z-10 max-w-sm space-y-4 bg-dark-primary-500/10 bg-opacity-20 p-4">
          <h1 className="text-5xl font-bold">Lets Make Our Own Cinema</h1>
          <p className="text-sm">
            You can enjoy the latest movies and other shows online at a lower
            price
          </p>
          <div className="flex items-center justify-between">
            <button className="w-40 bg-dark-secondary-600 px-10 py-4 text-sm font-semibold">
              Get Started
            </button>
            <button className="w-40 border border-dark-secondary-600 px-10 py-4 text-sm font-semibold">
              More
            </button>
          </div>
        </div>
        <div className="space-y-3 bg-dark-primary-500/10 px-12 py-8 text-dark-primary-400">
          {descriptionList.map((item) => (
            <div className="flex items-center gap-2">
              <span>
                <item.image className="text-7xl text-dark-primary-400" />
              </span>
              <span>
                <p>{item.highlight}</p>
                <p>{item.description}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
      <MovieCategoryCards />
      <CategorySort />
    </div>
  );
}
