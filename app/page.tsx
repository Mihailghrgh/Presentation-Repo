"use client";

import ClientCarousel from "@/components/homepage/client-carousel";
import JobListings from "@/components/homepage/job-listings";
import NewsInsights from "@/components/homepage/news-insights";
import TestimonialsSection from "@/components/homepage/testimonials";
import AccordionDemo from "@/components/homepage/accordion";
import SpecialtiesSection from "@/components/homepage/WhyChooseUs";
import ExpertiseSection from "@/components/homepage/ExpertiseSection";

export default function Home() {
  return (
    <>
      <TestimonialsSection />
      <JobListings />
      <AccordionDemo />
      <ExpertiseSection />
      <SpecialtiesSection />
      <ClientCarousel />
      <NewsInsights />
    </>
  );
}
