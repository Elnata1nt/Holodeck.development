import Footer from "../components/footer/_components/footer";
import Header from "../components/header/_components/header";
import HeroTag from "../components/(herocomponents)/herosec/_components/herosec";
import ProjectsSection from "@/components/(herocomponents)/projects/_components/projects";
import Chat from "@/components/chat/_components/chat";
import HeroData from "@/components/(herocomponents)/hero/_components/hero";
import ComuniationSection from "@/components/(herocomponents)/comunication/_components/comunication";

export default function Home() {
  return (
    <>
      <Header />
      <HeroData />
      <ComuniationSection />
      <HeroTag />
      <ProjectsSection />
      <Footer />
      <Chat />
    </>
  );
}
