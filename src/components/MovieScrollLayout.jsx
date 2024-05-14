import { forwardRef } from "react";

const MovieScrollLayout = forwardRef(({ children }, ref) => {
  return (
    <div className="relative overflow-x-scroll scroll-smooth" ref={ref}>
      {/* <ChevronButton /> */}
      <div className="flex w-fit gap-4">{children}</div>
    </div>
  );
});
export default MovieScrollLayout;
