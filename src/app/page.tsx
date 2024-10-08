import ContactSection from "@/components/contect/_components/contact";
import Footer from "../components/footer/_components/footer";
import Header from "../components/header/_components/header";
import HeroData from "../components/hero/_components/hero";
import HeroTag from "../components/herosec/_components/herosec";
import ProjectsSection from "@/components/projects/_components/projects";


export default function Home() {
  return (
    <>
    <Header />
    <HeroData />
    <HeroTag />
    <ProjectsSection />
    <ContactSection />
    <Footer />
    </>
  );
}