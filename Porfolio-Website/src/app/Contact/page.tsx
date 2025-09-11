// import { Card, CardContent } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import contactusPic from "../../../public/images/contact-us.png"

// export default function Component() {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-center py-32 gap-11 container mx-auto">
//       <Card>
//         <CardContent>
//           <div className="space-y-8">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-semibold mt-5 text-primary">Contact Us</h2>
//               <p className="text-zinc-500 dark:text-zinc-400">
//                 {"Fill out the form below and we'll get back to you as soon as possible."}
//               </p>
//             </div>
//             <div className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                     <Label htmlFor="first-name">First name</Label>
//                   <Input id="first-name" placeholder="Enter your first name" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="last-name">Last name</Label>
//                   <Input id="last-name" placeholder="Enter your last name" />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" placeholder="Enter your email" type="email" />
//               </div>
//               <div className="space-y-2">
//                 <Label>Pronoun</Label>
//                 <Select>
//                   <SelectTrigger aria-label="Pronoun">
//                     <SelectValue placeholder="Select your pronoun" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       <SelectLabel>Pronouns</SelectLabel>
//                       <SelectItem value="he/him">He/Him</SelectItem>
//                       <SelectItem value="she/her">She/Her</SelectItem>
//                       <SelectItem value="they/them">They/Them</SelectItem>
//                       <SelectItem value="prefer not to say">Prefer not to say</SelectItem>
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
//               </div>
//               <Button type="submit">
//                 Send message
//               </Button>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//       <div className="">
//         <Image className=" w-fit h-auto" src={contactusPic} alt={""} width={400} height={400}/>
//       </div>
//     </div>
//   )
// }


import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import contactusPic from "../../../public/images/contact-us.png"

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-24 gap-16 container mx-auto">
      {/* Contact Info Card */}
      <Card className="shadow-lg border-0 lg:w-1/2">
        <CardContent className="p-10">
          <div className="space-y-6">
            {/* Heading */}
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                We’d love to hear from you! Get in touch with us using the details below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:shadow-md transition">
                <Mail className="w-6 h-6 text-primary" />
                <a
                  href="mailto:bistructure9211@gmail.com"
                  className="text-lg font-medium text-primary hover:underline"
                >
                  bistructure9211@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:shadow-md transition">
                <Phone className="w-6 h-6 text-primary" />
                <a
                  href="tel:+923363304433"
                  className="text-lg font-medium text-primary hover:underline"
                >
                  +92 336 3304433
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          className="rounded-xl shadow-md"
          src={contactusPic}
          alt="Contact Us Illustration"
          width={450}
          height={450}
        />
      </div>
    </div>
  )
}
