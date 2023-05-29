import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
      <GoToTop />
      <Features />
      <Testimonials text="" name="" image=""   />
      <Footer />
    </main>
  );
}
