import { getGoogleReviews } from "@/lib/google-reviews";
import TestimonialsAnimated from "./TestimonialsAnimated";

export default async function Testimonials() {
  const data = await getGoogleReviews();
  return <TestimonialsAnimated data={data} />;
}
