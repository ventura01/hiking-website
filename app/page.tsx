import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
      <Features />
      <Testimonials text="" name="" image=""   />
      <Footer />
    </main>
  );
}
