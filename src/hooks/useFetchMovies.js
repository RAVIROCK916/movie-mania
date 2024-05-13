"use client"

import fetchMovies from "@/utils/fetchMovies";
import { useEffect, useState } from "react";

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const data = await fetchMovies(url);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return movies;
};

export default useFetchMovies;
