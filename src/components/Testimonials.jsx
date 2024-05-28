import { testimonials } from "@/data";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="container-section">
      <h2 className="mb-10 text-center text-4xl font-bold text-light-primary-200">
        Testimonials
      </h2>
      <div className="flex flex-wrap justify-between">
        {testimonials.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
