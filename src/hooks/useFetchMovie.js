"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const useFetchMovie = (movieURL, id) => {
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    try {
      console.log(movieURL+`/${id}`)
      const response = await axios.get(movieURL+`/${id}`);
      const data = response.data;
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return movie;
};

export default useFetchMovie;
