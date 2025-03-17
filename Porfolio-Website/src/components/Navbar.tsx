'use client'
import { ModeToggle } from "./toogle";
import { IoMenuSharp } from "react-icons/io5";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import Image from "next/image";
import myImage from "../../public/images/Rao Hamza Tariq.png" 
import React, { useState } from 'react';

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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Card } from "./ui/card";
 
export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Data Analytics",
    href: "/portfolios?category=Data Analytics",
    description:
      "Data analysts gather, cleanse, analyze historical data, and uncover business insights.",
  },
  {
    title: "Data Science",
    href: "/portfolios?category=Data Science",
    description:
      "Study of data to extract meaningful insights for business.",
  },
  {
    title: "Web Development",
    href: "/portfolios?category=Web Development",
    description: "Process of creating websites or web applications, including the project's design, layout, coding, content creation, and functionality.",
  },
  {
    title: "AI Agents",
    href: "/portfolios?category=AI Agents",
    description:
      "AI Agents are the future of the world, they are the ones who will make the world a better place.",
  },
]



const Navbar = () => {

  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  return (
    <Card className='m-0 z-50 p-0 fixed w-screen border-none rounded-none bg-transparent backdrop-blur-lg'>
    <div className="shadow-sm py-3">
    <div className='block sm:hidden  ml-5'>

<div className="flex justify-between items-center">
<div className="flex items-center">
  <Image
    src="/images/BI Structure/BI Structure.png"
    alt="BI Structure Logo"
    width={80}
    height={80}
    className="dark:hidden"
  />
  <Image
    src="/images/BI Structure/BI Structure white.png"
    alt="BI Structure Logo"
    width={80}
    height={80}
    className="hidden dark:block"
  />
</div>
<div className="mr-5 flex items-center gap-2">
  <div className="flex sm:hidden">
  <ModeToggle/>
  </div>

    <Sheet>
<SheetTrigger asChild>
  <Button variant="outline" className="p-2"><IoMenuSharp/></Button>
</SheetTrigger>
<SheetContent>
  <div className="flex items-center mb-6">
    <Image
      src="/images/BI Structure/BI Structure.png"
      alt="BI Structure Logo"
      width={80}
      height={80}
      className="dark:hidden"
    />
    <Image
      src="/images/BI Structure/BI Structure white.png"
      alt="BI Structure Logo"
      width={80}
      height={80}
      className="hidden dark:block"
    />
  </div>
  <Command className="bg-transparent">
      <CommandList>
        <CommandGroup className="mt-5">
          <Link href={"/"}>
            <CommandItem className="mt-3">Home</CommandItem>
          </Link>
          <Link href={"/ai-agents"}>
            <CommandItem className="mt-3">AI Agents</CommandItem>
          </Link>
          <Link href={"/Services"}>
            <CommandItem className="mt-3">Services</CommandItem>
          </Link>
          <CommandItem className="mt-3" onSelect={toggleCategories}>
            Portfolio {showCategories ? '▲' : '▼'}
          </CommandItem>
          {showCategories && (
            <CommandGroup className="mt-2">
              <Link href={"/portfolios?category=Web Development"}>
                <CommandItem>Web Development</CommandItem>
              </Link>
              <Link href={"/portfolio?category=AI Agents"}>
                <CommandItem>AI Agents</CommandItem>
              </Link>
              <Link href={"/portfolios?category=Data Science"}>
                <CommandItem>Data Science</CommandItem>
              </Link>
              <Link href={"/portfolios?category=Data Analytics"}>
                <CommandItem>Data Analytics</CommandItem>
              </Link>
            </CommandGroup>
          )}
          <Link href={"/Contact"}>
            <CommandItem className="mt-3">Contact</CommandItem>
          </Link>
          <Link href={"/About"}>
            <CommandItem className="mt-3">About</CommandItem>
          </Link>
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
{/* <h1 className="scroll-m-20 text-xl font-semibold tracking-tight flex ml-5">BI Structure</h1> */}
<div className="flex items-center ml-5">
  <Image
    src="/images/BI Structure/BI Structure.png"
    alt="BI Structure Logo"
    width={80}
    height={80}
    className="dark:hidden"
  />
  <Image
    src="/images/BI Structure/BI Structure white.png"
    alt="BI Structure Logo"
    width={80}
    height={80}
    className="hidden dark:block"
  />
</div>

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
    <Link href="/ai-agents" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        AI Agents
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
                Data Analyst | Agentic AI Developer | Full Stack Web Developer
              </p>
            </a>
          </NavigationMenuLink>
        </li>
          <ListItem href="/services/DataAnalyst" title="Data Analyst">
             Transforming your data into useful insights using Python, Power BI and SQL.
          </ListItem>
          <ListItem href="/services/AgenticAI" title="Agentic AI">
              Make your own AI Agent using LangChain, Langgraph and LLM.
          </ListItem>
          <ListItem href="/services/WebDeveloper" title="Web Developer">
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
          <Link href={component.href}>
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
  {/* <NavigationMenuItem>
    <Link href="/Contact" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Contact
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem> */}
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
