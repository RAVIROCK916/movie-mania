import fetchVideos from "@/utils/fetchVideos";
import { useEffect, useState } from "react";

const useFetchVideos = (id) => {
  const [videos, setVideos] = useState();

  const fetchData = async () => {
    const data = await fetchVideos(id);
    setVideos(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return videos;
};

export default useFetchVideos;
