import useFetchMovies from "@/hooks/useFetchMovies";
import { useState, useEffect } from "react";
import MovieHighlightsCard from "./MovieHighlightsCard";

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
          <MovieHighlightsCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default MovieHighlights;
