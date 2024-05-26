import {
  FaRobot,
  FaVideo,
  FaSkull,
  FaMusic,
  FaHeart,
  FaFaceLaughSquint,
  FaQuestion,
} from "react-icons/fa6";
import { PiKnifeFill } from "react-icons/pi";

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
