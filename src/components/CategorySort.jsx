import { sortCategories } from "@/data";
import { FaChevronDown } from "react-icons/fa6";

const CategorySort = () => {
  return (
    <div className="container-section flex items-center justify-evenly rounded-md bg-dark-primary-900 p-4 py-6">
      {sortCategories.map((category) => (
        <span
          key={category.name}
          className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-3 text-light-primary-300 shadow-[rgb(12,10,9)_0px_5px_30px_rgb(12,10,9)_1px_0px_30px] shadow-dark-primary-950 transition-transform hover:scale-105"
        >
          {<category.image className="text-2xl text-dark-secondary-600" />}
          <p className="text-sm font-semibold">{category.description}</p>
          <FaChevronDown className="ml-2 text-light-primary-500" />
        </span>
      ))}
    </div>
  );
};
export default CategorySort;
