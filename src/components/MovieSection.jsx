import useFetchMovies from "@/hooks/useFetchMovies";
import MovieCard from "./MovieCard";
import MovieScrollLayout from "./MovieScrollLayout";

const MovieSection = ({ title, url }) => {
  const movies = useFetchMovies(url);

  return (
    <div className="m-8 flex flex-col gap-4">
      <h2 className="font-bold text-light-1">{title}</h2>
      <MovieScrollLayout>
        {movies?.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </MovieScrollLayout>
    </div>
  );
};
export default MovieSection;
