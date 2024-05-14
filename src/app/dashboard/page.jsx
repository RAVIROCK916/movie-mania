"use client";

import {
  POPULAR_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  LATEST_MOVIES_URL,
  UPCOMING_MOVIES_URL,
  DISCOVER_MOVIES_URL,
  LATEST_TV_URL
} from "@/constants/api-urls";
import MovieSection from "../../components/MovieSection";
import MovieHighlights from "../../components/MovieHighlights";

const page = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <MovieHighlights url={DISCOVER_MOVIES_URL} />
      <MovieSection title="Popular Movies" url={POPULAR_MOVIES_URL} />
      <MovieSection title="Top Rated Movies" url={TOP_RATED_MOVIES_URL} />
      <MovieSection title="Upcoming Movies" url={UPCOMING_MOVIES_URL} />
      <MovieSection title="Latest TV Series" url={LATEST_TV_URL} />
    </>
  );
};
export default page;
