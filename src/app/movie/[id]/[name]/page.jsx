"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { MOVIE_DETAILS_URL, IMG_URL } from "@/constants/api-urls";
import { MdOutlineStar } from "react-icons/md";
import StarRating from "@/components/StarRating";
import GenreBadge from "@/components/GenreBadge";

const Movie = ({ params: { id, name } }) => {
  const [movie, setMovie] = useState(null);
  const [movieLogo, setMovieLogo] = useState(null);

  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `${MOVIE_DETAILS_URL}/${id}?api_key=${api_key}`,
      );
      const logoResponse = await axios.get(
        `${MOVIE_DETAILS_URL}/${id}/images?api_key=${api_key}&include_image_language=en,null`,
      );
      const data = response.data;
      console.log(data);
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
        Loading...
      </div>
    );
  }

  return (
    <div className="h-3/4 w-full">
      <div className="relative bg-white shadow-md">
        <img
          src={IMG_URL + movie.backdrop_path}
          alt={movie.title}
          className="w-full object-cover"
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 p-8 text-neutral-50">
          <img src={IMG_URL + "/" + movieLogo} className="w-2/6 mb-4" alt="" />
          <p className="mb-4 text-sm text-neutral-300">{movie.overview}</p>
          <StarRating rating={movie.vote_average/2} />
          <div className="mb-4 flex items-center">
            {movie.genres.map((genre) => (
              <GenreBadge key={genre.id} genre={genre.name} />
            ))}
            <span className="mr-2 text-gray-600">{movie.imdbRating}</span>
          </div>
          <button className="rounded-sm bg-light px-16 py-3 font-bold text-dark shadow-lg">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
