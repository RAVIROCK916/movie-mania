const axios = require("axios");
import { MOVIE_DETAILS_URL } from "@/constants/api-urls";

const fetchVideos = async (id) => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const options = {
    method: "GET",
    url: `${MOVIE_DETAILS_URL}/${id}/videos`,
    params: {
      api_key,
      language: "en-US",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchVideos;
