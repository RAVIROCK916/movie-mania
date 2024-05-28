import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({
  testimonial: { name, title, image, rating, quote },
}) => {
  return (
    <div className="flex h-64 w-80 flex-col justify-between rounded-md bg-dark-primary-900 p-6 shadow-lg shadow-black">
      <div className="flex items-start justify-between gap-4 text-sm font-semibold text-light-primary-400">
        <p className="flex-1">{title}</p>
        <span className="h-16 w-16 overflow-hidden rounded-full">
          <img
            src={image}
            className="w-full object-cover object-top"
            alt="image"
          />
        </span>
        <span className="flex flex-1 items-center justify-end gap-1">
          {rating} <FaStar className="text-lg text-dark-secondary-600" />
        </span>
      </div>
      <h3 className="text-center text-lg font-semibold">{name}</h3>
      <p className="line-clamp-5 break-all text-sm font-semibold text-dark-primary-400">
        {quote}
      </p>
    </div>
  );
};
export default TestimonialCard;
