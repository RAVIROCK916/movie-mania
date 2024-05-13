import { IMG_URL } from "@/constants/api-urls";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  const title = movie.title.replace(/ /g, "-");
  return (
    <Link href={`/movie/${movie.id}/${title}`}>
      <div className="group relative aspect-[2/3] w-52 cursor-pointer overflow-hidden rounded-md bg-transparent shadow-lg transition-all duration-200 ease-in-out hover:shadow-xl">
        <img
          src={IMG_URL + movie.poster_path}
          className="w-full object-cover group-hover:brightness-75"
        />
        <div className="invisible absolute bottom-0 w-full from-black via-neutral-900 via-40% p-4 transition-all group-hover:visible group-hover:bg-gradient-to-t group-hover:opacity-95">
          <h1 className="text-md mb-1 line-clamp-2 font-bold tracking-tight text-neutral-50">
            {movie.title}
          </h1>
          <p className="line-clamp-2 text-xs text-neutral-200">
            {movie.overview}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
