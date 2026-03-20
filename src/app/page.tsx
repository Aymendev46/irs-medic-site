import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import PressBar from "@/components/home/PressBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Results from "@/components/home/Results";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar />
      <main>
        <Hero />
        <PressBar />
        <WhyChooseUs />
        <Services />
        <Results />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
