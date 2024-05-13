import { IMG_URL } from "@/constants/api-urls";
import useFetchMovies from "@/hooks/useFetchMovies";
import Link from "next/link";
import { useState, useEffect } from "react";

const MovieHighlights = ({ url }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = useFetchMovies(url);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, movies.length]);

  return (
    <div className="relative overflow-x-hidden">
      <div
        className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="relative inline-block w-full">
            <Link href={`/movie/${movie.id}/${movie.title.replace(/ /g, "-")}`}>
              <img
                src={IMG_URL + movie.backdrop_path}
                alt={movie.title}
                className="h-[65vh] w-screen object-cover object-top"
              />
              <div className="absolute left-0 right-0 max-w-full translate-y-[-100%] bg-opacity-50 bg-gradient-to-t from-neutral-950/70 px-4 text-white">
                <h2 className="mb-2 text-2xl font-bold">{movie.title}</h2>
                {/* <p className="line-clamp-3 text-wrap text-sm">{movie.overview}</p> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieHighlights;
