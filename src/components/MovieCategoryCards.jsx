import { movieCategories } from "@/data";
import { FaArrowRightLong } from "react-icons/fa6";

const MovieCategoryCards = () => {
  return (
    <div className="container-section flex flex-wrap items-center justify-between gap-10">
      {movieCategories.map((category) => (
        <div className="flex w-64 items-center gap-4 rounded-md bg-dark-primary-900 p-4 pr-6 shadow-xl">
          <div className="rounded-md bg-dark-primary-950 p-3 text-sm">
            <category.image className="size-8 text-dark-secondary-600" />
          </div>
          <div className="flex-1">
            <h6 className=" font-bold text-light-primary-200">
              {category.name}
            </h6>
            <span className="flex items-center justify-between text-xs font-semibold text-light-primary-500">
              {category.description}
              <FaArrowRightLong className="cursor-pointer text-dark-secondary-600 transition-transform hover:scale-125" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieCategoryCards;
