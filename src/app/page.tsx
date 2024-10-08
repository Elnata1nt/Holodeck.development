import ContactSection from "@/components/contect/_components/contact";
import Footer from "../components/footer/_components/footer";
import Header from "../components/header/_components/header";
import HeroData from "../components/hero/_components/hero";
import HeroTag from "../components/herosec/_components/herosec";
import ProjectsSection from "@/components/projects/_components/projects";
import ComuniationSection from "@/components/comunication/_components/comunication";
import Chat from "@/components/chat/_components/chat";


export default function Home() {
  return (
    <>
    <Header />
    <HeroData />
    <ComuniationSection />
    <HeroTag />
    <ProjectsSection />
    <ContactSection />
    <Footer />
    <Chat />
    </>
  );
}