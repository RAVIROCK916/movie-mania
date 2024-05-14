import Image from "next/image";
import Link from "next/link";
import { IMG_URL } from "@/constants/api-urls";
import useFetchImages from "@/hooks/useFetchImages";

const MovieHighlightsCard = ({ movie }) => {
  const { id } = movie;
  const [images, setImages] = useFetchImages(id);
  return (
    <div key={movie.id} className="relative inline-block w-full">
      <Link href={`/movie/${movie.id}/${movie.title.replace(/ /g, "-")}`}>
        <Image
          src={IMG_URL + movie.backdrop_path}
          width={1920}
          height={1080}
          alt={movie.title}
          className="h-screen w-screen object-cover object-top"
        />
        <div className="absolute left-0 right-0 max-w-full translate-y-[-100%] bg-opacity-50 bg-gradient-to-t from-neutral-950/70 px-4 text-white">
          {/* <h2 className="mb-2 text-2xl font-bold">{movie.title}</h2> */}
          {images?.logos?.length > 0 &&
            (
            <Image
              src={IMG_URL + images?.logos[0].file_path}
              width={300}
              height={60}
              alt="Movie Images"
              className="mb-4 w-auto h-auto"
            />
          )
          }
          {/* <p className="line-clamp-3 text-wrap text-sm">{movie.overview}</p> */}
        </div>
      </Link>
    </div>
  );
};
export default MovieHighlightsCard;
