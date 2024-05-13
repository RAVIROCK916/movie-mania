import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieScrollLayout = ({ children }) => {
  const chevronButtonStyle = "absolute top-2/4 py-1 z-[1] translate-y-[-50%] cursor-pointer bg-neutral-400 bg-opacity-50 text-4xl hover:bg-opacity-100";
  return (
    <div className="relative overflow-x-scroll scroll-smooth">
      <MdChevronLeft className={`${chevronButtonStyle} left-0 rounded-r-lg`} />
      {/* <ChevronButton /> */}
      <div className="flex w-fit gap-4">{children}</div>
      <MdChevronRight className={`${chevronButtonStyle} right-0 rounded-l-lg`} />
    </div>
  );
};
export default MovieScrollLayout;
