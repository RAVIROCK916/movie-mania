import axios from "axios";
import { MOVIE_DETAILS_URL } from "@/constants/api-urls";

const fetchImages = async (id) => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const options = {
    method: "GET",
    url: `${MOVIE_DETAILS_URL}/${id}/images`,
    params: {
      api_key,
      include_image_language: "en,null"
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchImages;
