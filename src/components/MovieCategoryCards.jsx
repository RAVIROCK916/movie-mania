import { motion, useInView } from "framer-motion";
import { movieCategories } from "@/data";
import { FaArrowRightLong } from "react-icons/fa6";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/animation/variants";

const MovieCategoryCards = () => {
  const { ref, isInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="container-section">
      <h2 className="mb-10 text-center text-4xl font-bold text-light-primary-200">
        Genres
      </h2>
      <motion.div
        className="flex flex-wrap items-center justify-between gap-10"
        ref={ref}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {movieCategories.map((category) => (
          <motion.div
            key={category.name}
            className="flex w-64 items-center gap-4 rounded-md bg-dark-primary-900 p-4 pr-6 shadow-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default MovieCategoryCards;
