import Footer from "@/components/footer/_components/footer";
import PageChatsection from "@/components/pagechat/_components/pagechat";
import Header from "@/components/header/_components/header";
import Chat from "@/components/chat/_components/chat";

// npx shadcn@latest add "https://magicui.design/r/animated-beam"
// import { AnimatedBeam } from "@/components/magicui/animated-beam";



export default function PageChat() {

    return <>
    <Header />
    <PageChatsection />
    <Chat />
    <Footer />
    </>
}