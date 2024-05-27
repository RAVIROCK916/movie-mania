"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { MOVIE_DETAILS_URL, IMG_URL } from "@/constants/api-urls";
import StarRating from "@/components/StarRating";
import GenreBadge from "@/components/GenreBadge";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { MdOutlineDonutLarge } from "react-icons/md";

const Movie = ({ params: { id, name } }) => {
  const [movie, setMovie] = useState(null);
  const [movieLogo, setMovieLogo] = useState(null);

  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const router = useRouter();
  const pathName = usePathname();

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `${MOVIE_DETAILS_URL}/${id}?api_key=${api_key}`,
      );
      const logoResponse = await axios.get(
        `${MOVIE_DETAILS_URL}/${id}/images?api_key=${api_key}&include_image_language=en,null`,
      );
      const data = response.data;
      const logoData = logoResponse.data;
      setMovieLogo(logoData.logos[0].file_path);
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex items-center justify-center rounded-md py-2 pl-3 pr-5 font-semibold text-light">
          <MdOutlineDonutLarge className="mr-3 h-5 w-5 animate-spin" />
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="h-3/4 w-full">
      <div className="relative bg-white shadow-md">
        <Image
          src={IMG_URL + movie.backdrop_path}
          alt={movie.title}
          width={1920}
          height={1080}
          className="h-screen w-screen object-cover object-center"
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 p-8 text-neutral-50">
          <Image
            src={`${IMG_URL}${movieLogo}`}
            width={500}
            height={200}
            blurDataURL={`${IMG_URL}${movieLogo}`}
            className="mb-4 w-2/6"
            alt="Movie Logo"
            priority={true}
          />
          <p>{movie.year}</p>
          <p className="text-md mb-2 w-1/2 leading-snug text-neutral-100">
            {movie.overview}
          </p>
          <StarRating rating={movie.vote_average / 2} />
          <div className="mb-4 flex items-center">
            {movie.genres.map((genre) => (
              <GenreBadge key={genre.id} genre={genre.name} />
            ))}
            <span className="mr-2 text-gray-600">{movie.imdbRating}</span>
          </div>
          <button
            className="bg-dark-secondary-600 text-light-primary-100 rounded-sm px-16 py-3 font-bold shadow-lg"
            onClick={() => router.push(`${pathName}/watch`)}
          >
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
