import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Realisations from "@/components/Realisations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getGoogleReviews } from "@/lib/google-reviews";

export default async function Home() {
  const reviewsData = await getGoogleReviews();
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Realisations />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer reviewCount={reviewsData.totalRatings || 85} />
    </main>
  );
}
