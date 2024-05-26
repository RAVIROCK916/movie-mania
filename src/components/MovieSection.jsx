import useFetchMovies from "@/hooks/useFetchMovies";
import MovieCard from "./MovieCard";
import MovieScrollLayout from "./MovieScrollLayout";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef } from "react";

const MovieSection = ({ title, url }) => {
  const movies = useFetchMovies(url);
  const moviesContainerRef = useRef(null);
  const moviesContainer = moviesContainerRef.current;

  const chevronButtonStyle =
    "py-1 rounded-full cursor-pointer bg-neutral-400 bg-opacity-20 text-neutral-600 text-4xl hover:bg-opacity-40";

  const scrollMoviesLeft = () => {
    if (moviesContainer) {
      moviesContainer.scrollLeft -= 224;
      console.log(moviesContainer.scrollLeft);
    }
  };

  const scrollMoviesRight = () => {
    if (moviesContainer) {
      moviesContainer.scrollLeft += 224;
    }
  };

  return (
    <div className="m-8 flex flex-col gap-2">
      <div className="relative flex items-center justify-between">
        <h2 className="text-xl font-bold text-light-primary-100">{title}</h2>
        <div className="flex gap-2">
          <MdChevronLeft
            className={`${chevronButtonStyle}`}
            onClick={scrollMoviesLeft}
          />
          <MdChevronRight
            className={`${chevronButtonStyle}`}
            onClick={scrollMoviesRight}
          />
        </div>
      </div>
      <MovieScrollLayout ref={moviesContainerRef}>
        {movies?.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </MovieScrollLayout>
    </div>
  );
};
export default MovieSection;
