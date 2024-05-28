const DescriptionParagraph = ({ children, className }) => {
  return (
    <p
      className={`mb-8 rounded-md bg-dark-primary-900 p-6 font-medium text-light-primary-300 ${className}`}
    >
      {children}
    </p>
  );
};

const AboutUs = () => {
  return (
    <div className="container-section">
      <h2 className="mb-8 text-center text-3xl font-bold text-light-primary-200">
        About Us
      </h2>
      <div>
        <div className="flex gap-6">
          <div>
            <DescriptionParagraph>
              Welcome to our website, where you'll find a vast collection of
              movies from various genres and eras. Our platform is dedicated to
              providing movie enthusiasts with a comprehensive and user-friendly
              experience. Explore our extensive library, read reviews, and
              discover your next favorite film.
            </DescriptionParagraph>
            <DescriptionParagraph>
              Welcome to our website, where you'll find a vast collection of
              movies from various genres and eras. Our platform is dedicated to
              providing movie enthusiasts with a comprehensive and user-friendly
              experience. Explore our extensive library, read reviews, and
              discover your next favorite film.
            </DescriptionParagraph>
          </div>
          <div>
            <img src="/about-us-img.svg" className="h-4/5" alt="" />
          </div>
        </div>
        <DescriptionParagraph>
          Welcome to our website, where you'll find a vast collection of movies
          from various genres and eras. Our platform is dedicated to providing
          movie enthusiasts with a comprehensive and user-friendly experience.
          Explore our extensive library, read reviews, and discover your next
          favorite film. Welcome to our website, where you'll find a vast
          collection of movies from various genres and eras. Our platform is
          dedicated to providing movie enthusiasts with a comprehensive and
          user-friendly experience. Explore our extensive library, read reviews,
          and discover your next favorite film.
        </DescriptionParagraph>
      </div>
    </div>
  );
};
export default AboutUs;
