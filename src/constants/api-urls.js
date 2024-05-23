
// template
const MAIN_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/original"
export const VID_URL = "https://youtube.com/embed"

// movie
export const MOVIE_DETAILS_URL = `${MAIN_URL}/movie`;
export const POPULAR_MOVIES_URL = `${MAIN_URL}/movie/popular`;
export const TOP_RATED_MOVIES_URL = `${MAIN_URL}/movie/top_rated`;
export const NOW_PLAYING_MOVIES_URL = `${MAIN_URL}/movie/now_playing`;
export const LATEST_MOVIES_URL = `${MAIN_URL}/movie/latest`;
export const UPCOMING_MOVIES_URL = `${MAIN_URL}/movie/upcoming`;
export const DISCOVER_MOVIES_URL = `${MAIN_URL}/discover/movie?sort_by=vote_count.desc&language=en-US`;
export const SEARCH_MOVIES_URL = `${MAIN_URL}/search/movie`;

// tv
export const LATEST_TV_URL = `${MAIN_URL}/tv/latest`;