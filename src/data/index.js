import {
  FaRobot,
  FaVideo,
  FaSkull,
  FaMusic,
  FaHeart,
  FaFaceLaughSquint,
  FaQuestion,
  FaSort,
  FaFire,
  FaStar,
  FaCalendar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { PiFilmSlateThin, PiKnifeFill } from "react-icons/pi";
import { GiFilmProjector, GiFilmStrip } from "react-icons/gi";

export const descriptionList = [
  {
    highlight: "10,000+",
    description: "Movie Choices",
    image: PiFilmSlateThin,
  },
  {
    description: "High Quality",
    image: GiFilmStrip,
  },
  {
    highlight: "100+",
    description: "Original",
    image: GiFilmProjector,
  },
];

export const movieCategories = [
  {
    name: "Classic",
    description: "750+ Movies",
    image: FaVideo,
  },
  {
    name: "Comedy",
    description: "700+ Movies",
    image: FaFaceLaughSquint,
  },
  {
    name: "Science Fiction",
    description: "800+ Movies",
    image: FaRobot,
  },
  {
    name: "Horror",
    description: "680+ Movies",
    image: FaSkull,
  },
  {
    name: "Mystery",
    description: "730+ Movies",
    image: FaQuestion,
  },
  {
    name: "Musical",
    description: "550+ Movies",
    image: FaMusic,
  },
  {
    name: "Romance",
    description: "920+ Movies",
    image: FaHeart,
  },
  {
    name: "Thriller",
    description: "1000+ Movies",
    image: PiKnifeFill,
  },
];
export const sortCategories = [
  {
    name: "Name",
    description: "Sort by Name",
    image: FaSort,
  },
  {
    name: "Popularity",
    description: "Sort by Popularity",
    image: FaFire,
  },
  {
    name: "Rating",
    description: "Sort by Rating",
    image: FaStar,
  },
  {
    name: "Release Date",
    description: "Sort by Year",
    image: FaCalendar,
  },
];

export const socials = [
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/newurl",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/newurl",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/newurl/",
  },
];
