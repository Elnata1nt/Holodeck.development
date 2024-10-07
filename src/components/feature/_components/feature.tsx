import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { BookIcon, CameraIcon, CodeIcon, CodepenIcon, GitGraphIcon, MountainIcon, Music2Icon, NetworkIcon, TypeIcon, WindIcon } from "lucide-react"

export default function FeatureSection() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Jared Palmer</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I'm a software engineer with a passion for building beautiful and functional web applications. I love
                  exploring new technologies and constantly learning to improve my skills.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold">Background</h2>
                <p className="text-muted-foreground">
                  I have a degree in Computer Science and have been working as a software engineer for the past 5 years.
                  I've had the opportunity to work on a variety of projects, from small startups to large enterprise
                  applications.
                </p>
              </div>
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <CodepenIcon className="h-5 w-5" />
                    React
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <NetworkIcon className="h-5 w-5" />
                    Node.js
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <TypeIcon className="h-5 w-5" />
                    TypeScript
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <WindIcon className="h-5 w-5" />
                    Tailwind CSS
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <GitGraphIcon className="h-5 w-5" />
                    Git
                  </div>
                </div>
              </div>
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold">Interests</h2>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <CodeIcon className="h-5 w-5" />
                    Coding
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <BookIcon className="h-5 w-5" />
                    Reading
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <MountainIcon className="h-5 w-5" />
                    Hiking
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <CameraIcon className="h-5 w-5" />
                    Photography
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                    <Music2Icon className="h-5 w-5" />
                    Music
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I'm always excited to connect with new people and explore potential collaborations. Feel free to reach
                  out to me through any of the channels below.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Email
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold">Education</h2>
                <p className="text-muted-foreground">
                  I have a Bachelor's degree in Computer Science from the University of California, Berkeley. I
                  graduated with honors in 2017.
                </p>
              </div>
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold">Work Experience</h2>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-lg font-semibold">Software Engineer, Acme Inc.</h3>
                    <p className="text-muted-foreground">2019 - Present</p>
                    <p className="text-muted-foreground">
                      As a software engineer at Acme Inc., I've had the opportunity to work on a variety of web
                      applications using the latest technologies. I've contributed to the development of our flagship
                      product, as well as several internal tools and services.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-semibold">Intern, Startup X</h3>
                    <p className="text-muted-foreground">Summer 2018</p>
                    <p className="text-muted-foreground">
                      During my internship at Startup X, I worked on building a new web application from the ground up.
                      I gained valuable experience in full-stack development, agile methodologies, and working in a
                      fast-paced startup environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// function BookIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
//     </svg>
//   )
// }


// function CameraIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
//       <circle cx="12" cy="13" r="3" />
//     </svg>
//   )
// }


// function CodeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="16 18 22 12 16 6" />
//       <polyline points="8 6 2 12 8 18" />
//     </svg>
//   )
// }


// function CodepenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
//       <line x1="12" x2="12" y1="22" y2="15.5" />
//       <polyline points="22 8.5 12 15.5 2 8.5" />
//       <polyline points="2 15.5 12 8.5 22 15.5" />
//       <line x1="12" x2="12" y1="2" y2="8.5" />
//     </svg>
//   )
// }


// function GitGraphIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="5" cy="6" r="3" />
//       <path d="M5 9v6" />
//       <circle cx="5" cy="18" r="3" />
//       <path d="M12 3v18" />
//       <circle cx="19" cy="6" r="3" />
//       <path d="M16 15.7A9 9 0 0 0 19 9" />
//     </svg>
//   )
// }


// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }


// function Music2Icon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="8" cy="18" r="4" />
//       <path d="M12 18V2l7 4" />
//     </svg>
//   )
// }


// function NetworkIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="16" y="16" width="6" height="6" rx="1" />
//       <rect x="2" y="16" width="6" height="6" rx="1" />
//       <rect x="9" y="2" width="6" height="6" rx="1" />
//       <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
//       <path d="M12 12V8" />
//     </svg>
//   )
// }


// function TypeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="4 7 4 4 20 4 20 7" />
//       <line x1="9" x2="15" y1="20" y2="20" />
//       <line x1="12" x2="12" y1="4" y2="20" />
//     </svg>
//   )
// }


// function WindIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
//       <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
//       <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
//     </svg>
//   )
// }