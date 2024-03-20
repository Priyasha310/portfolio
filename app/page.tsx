import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import UsedTech from "@/components/UsedTech/UsedTech";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Contact />
      <UsedTech />
      <Footer />
    </main>
  );
}
