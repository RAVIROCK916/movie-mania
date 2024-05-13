import { MdOutlineStar } from "react-icons/md";

const StarRating = ({ rating }) => {
  const ratingRounded = Math.floor(rating);
  const ratingRoundedDecimal = Math.round((rating - ratingRounded) * 10) / 10;
  const ratingRemDecimalPercentage = (10 - ratingRoundedDecimal * 10) * 10;

  console.log(ratingRoundedDecimal, ratingRemDecimalPercentage);
  return (
    <div className="mb-2 flex items-center">
      <div className="flex rounded-full">
        {new Array(ratingRounded).fill().map((_, i) => (
          <MdOutlineStar key={i} className="h-4 w-4 text-yellow-500" />
        ))}
        {ratingRoundedDecimal > 0 && (
          <MdOutlineStar
            className="h-4 w-4 text-yellow-500"
            style={{
              clipPath: `inset(0 ${ratingRemDecimalPercentage}% 0 0)`,
            }}
          />
        )}
      </div>
      <span className="ml-1 text-sm text-yellow-500">{rating.toFixed(1)}</span>
    </div>
  );
};
export default StarRating;
