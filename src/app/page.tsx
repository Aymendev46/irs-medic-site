import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import PressBar from "@/components/home/PressBar";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Attorneys from "@/components/home/Attorneys";
import Results from "@/components/home/Results";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PressBar />
        <Services />
        <WhyChooseUs />
        <Attorneys />
        <Results />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
