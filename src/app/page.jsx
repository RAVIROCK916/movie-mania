"use client";

import MovieCategoryCards from "@/components/MovieCategoryCards";
import CategorySort from "@/components/CategorySort";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <MovieCategoryCards />
      <CategorySort />
      <Testimonials />
    </div>
  );
}
