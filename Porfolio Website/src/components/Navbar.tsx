import { ModeToggle } from "./toogle";
import { IoMenuSharp } from "react-icons/io5";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Image from "next/image";
import myImage from "../../public/images/Rao Hamza Tariq.png" 
import React, { Component } from 'react';

import Link from "next/link"
 
import { cn } from "../lib/utils"
// import { Icons } from "./components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Card } from "./ui/card";
 
export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Data Analyst",
    href: "/",
    description:
      "Data analysts gather, cleanse, analyze historical data, and uncover business insights.",
  },
  {
    title: "Data Science",
    href: "/",
    description:
      "Study of data to extract meaningful insights for business.",
  },
  {
    title: "Web Development",
    href: "/",
    description: "Process of creating websites or web applications, including the project's design, layout, coding, content creation, and functionality.",
  },
  {
    title: "All",
    href: "/",
    description:
      "All the projects i have created ever in different field using various tools",
  },
]



const Navbar = () => {
  return (
    <Card className='m-0 z-10 p-0 fixed w-screen border-none rounded-none bg-transparent backdrop-blur-lg'>
    <div className="shadow-sm py-3">
    <div className='block sm:hidden  ml-5'>

<div className="flex justify-between items-center">
<h3 className="">BI Structure</h3>
<div className="mr-5">
    <Sheet>
<SheetTrigger asChild>
  <Button variant="outline" className="p-2"><IoMenuSharp/></Button>
</SheetTrigger>
<SheetContent>
  <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">BI Structure</h1>
  <Command> 
<CommandList>
<CommandGroup className="mt-5">
<Link href={"/"}><CommandItem className="mt-3">Home</CommandItem></Link>
<Link href={"/Services"}><CommandItem className="mt-3">Services</CommandItem></Link>
<Link href={"/Portfolio/All"}><CommandItem className="mt-3">Portfolio</CommandItem></Link>
<Link href={"/Contact"}><CommandItem className="mt-3">Contact</CommandItem></Link>
<Link href={"/About"}><CommandItem className="mt-3">About</CommandItem></Link>
</CommandGroup>
</CommandList>
</Command>

</SheetContent>
</Sheet>
</div>


</div>
</div>

    <div className='hidden sm:block mr-28 '>

<div className=' flex justify-between items-center'>
<h1 className="scroll-m-20 text-xl font-semibold tracking-tight flex ml-5">BI Structure</h1>

<NavigationMenu>
<NavigationMenuList>
<NavigationMenuItem>
    <Link href="/" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Home
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <li className="row-span-3">
          <NavigationMenuLink asChild>
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href="/"
            >
              {/* <Icons.logo className="h-6 w-6" /> */}
              <Image
                      src={myImage}
                      height={250}
                      width={250} alt={""} />
              <div className="mb-2 mt-4 text-lg font-medium">
                Rao Hamza Tariq
              </div>
              <p className="text-sm leading-tight text-muted-foreground">
                Data Analyst | Junior Data Scientist | Full Stack Web Developer
              </p>
            </a>
          </NavigationMenuLink>
        </li>
          <ListItem href="/docs" title="Data Analyst">
             Transforming your data into useful insights using Python, Power BI and SQL.
          </ListItem>
          <ListItem href="/docs/installation" title="Data Scientist">
              Make your own predictive model using Machine Learning.
          </ListItem>
          <ListItem href="/docs/primitives/typography" title="Web Developer">
              Build your modern website using Next JS, Tailwind CSS and Shadcn UI.
          </ListItem>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {components.map((component) => (
          <Link href={`/Portfolio/${component.title.replace(/\s+/g,"")}`} key={component.title}>
          <ListItem
            title={component.title}
          >
            {component.description}
          </ListItem>
          </Link>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Link href="/Contact" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Contact
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Link href="/About" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        About
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>
<ModeToggle/>
</div>


</div>
    </div>
    
    </Card>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"




export default Navbar;
