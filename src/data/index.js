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

export const testimonials = [
  {
    name: "Jane Smith",
    title: "Film Critic",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: "8 / 10",
    quote:
      "As a professional film critic, I have high standards when it comes to movie websites. This platform exceeds my expectations in every way. The comprehensive database of films, both classic and contemporary, is truly remarkable. The detailed reviews and analysis provided by fellow critics and cinephiles are invaluable resources for my work. The website's design is sleek and visually appealing, making it a pleasure to navigate. Overall, this is an indispensable tool for anyone serious about movies.",
  },
  {
    name: "John Doe",
    title: "Movie Enthusiast",
    image: "https://images.unsplash.com/photo-1600603405959-6d623e92445c",
    rating: "9.5 / 10",
    quote:
      "This movie website is a true gem for cinephiles like myself. The vast collection of films from various genres and eras is truly impressive. The user-friendly interface makes it easy to browse and discover new movies. The detailed information provided for each film, including plot summaries, cast, and ratings, helps me make informed decisions. I particularly appreciate the personalized recommendations based on my viewing history. Overall, this website has become my go-to destination for all things movies.",
  },
  {
    name: "Michael Johnson",
    title: "Aspiring Filmmaker",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919",
    rating: "10 / 10",
    quote:
      "As an aspiring filmmaker, this movie website has been an invaluable resource for me. The wealth of information on filmmaking techniques, cinematography, and directing styles has been instrumental in my learning journey. The ability to watch and study classic films from various eras and genres has broadened my understanding of the art form. The community forums and discussions have also provided me with valuable insights and feedback from experienced filmmakers and enthusiasts. This website is a true treasure trove for anyone passionate about the art of filmmaking.",
  },
];
