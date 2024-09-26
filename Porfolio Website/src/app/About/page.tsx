import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex flex-col w-screen">
      {/* <section className=" py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About Me</h1>
                <p className="max-w-[600px]  md:text-xl">
                  I am passionate data analyst, data scientist and developers, dedicated to crafting exceptional digital
                  experiences. Our mission is to help businesses and individuals achieve their goals through innovative
                  and user-centric solutions.
                </p>
              </div>
            </div>
            <Image className="mx-auto aspect-video overflow-hidden tighter rounded-xl object-cover sm:w-3/4 lg:order-last lg:aspect-square " src={"/images/2.png"} height={400} width={400} alt={""}/>
          </div>
        </div>
      </section> */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:gap-80   items-center justify-between lg:pt-16 sm:pt-40 pt-40  overflow-x-hidden h-screen">
  <div className=" max-w-lg ml-20 flex flex-col gap-5">
    <h1>About Me</h1>
    <p>I am passionate data analyst, data scientist and developers, dedicated to crafting exceptional digital
                  experiences. Our mission is to help businesses and individuals achieve their goals through innovative
                  and user-centric solutions.</p>
  </div>
  <Image className="object-contain mr-20 pb-10" src={"/images/2.png"} height={400} width={400} alt={""}/>
</section>

      {/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our team is composed of talented individuals with diverse backgrounds and expertise, working together to
                deliver exceptional results.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-muted-foreground">Co-Founder, Designer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Jane Appleseed</h3>
                  <p className="text-muted-foreground">Co-Founder, Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Sarah Musk</h3>
                  <p className="text-muted-foreground">Lead Designer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">John Bravo</h3>
                  <p className="text-muted-foreground">Senior Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="w-screen py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 flex flex-col items-center pb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl text-center">
                We uphold a set of core values that guide our work and shape our culture.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-sm">
                <RocketIcon className="h-10 w-10 text-primary" />
                <h3 className="text-lg font-semibold">Innovation</h3>
                <p className="text-center text-muted-foreground">
                  We embrace new ideas and technologies to push the boundaries of what&apos;s possible.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-sm">
                <HeartIcon className="h-10 w-10 text-primary" />
                <h3 className="text-lg font-semibold">Passion</h3>
                <p className="text-center text-muted-foreground">
                  We pour our hearts into every project, driven by a genuine love for our craft.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-sm">
                <UsersIcon className="h-10 w-10 text-primary" />
                <h3 className="text-lg font-semibold">Collaboration</h3>
                <p className="text-center text-muted-foreground">
                  We believe in the power of teamwork, fostering a culture of open communication and mutual support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 flex flex-col items-center pb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Achievements</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We are proud of the milestones we have reached and the impact we have made on our clients and the
                industry.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-sm">
                <AwardIcon className="h-10 w-10 text-primary" />
                <h3 className="text-lg font-semibold">Industry Awards</h3>
                <p className="text-center text-muted-foreground">
                  Our work has been recognized with prestigious industry awards, showcasing our commitment to
                  excellence.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-sm">
                <BriefcaseIcon className="h-10 w-10 text-primary" />
                <h3 className="text-lg font-semibold">Satisfied Clients</h3>
                <p className="text-center text-muted-foreground">
                  We have a proven track record of delivering exceptional results and building long-lasting
                  relationships with our clients.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-sm">
                <ScalingIcon className="h-10 w-10 text-primary" />
                <h3 className="text-lg font-semibold">Continuous Growth</h3>
                <p className="text-center text-muted-foreground">
                  Our agency has experienced steady growth, allowing us to expand our services and reach new heights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function AwardIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function BriefcaseIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function HeartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function RocketIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ScalingIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
  )
}


function UsersIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}