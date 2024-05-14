import fetchImages from "@/utils/fetchImages";
import { useEffect, useState } from "react";

const useFetchImages = (id) => {
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    const data = await fetchImages(id);
    setImages(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return [images, setImages];
};

export default useFetchImages;
