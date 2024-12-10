


"use client";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CiMenuBurger } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/ModeToogle";
import { Input } from "./ui/input";
import Link from "next/link";
import { RiShoppingCart2Fill   } from "react-icons/ri";
import { ProductCategory } from "@/app/data";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useCart } from "./ContextForCart";
import { useRouter } from "next/navigation";

// Function to fetch product categories
const FetchProductCategories = async (): Promise<ProductCategory[]> => {
  try {
    const apiResponse = await fetch(
      "https://dummyjson.com/products/categories"
    );
    if (!apiResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const data: ProductCategory[] = await apiResponse.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

const NavBar = () => {
  const [productCategories, setProductCategories] = useState<ProductCategory[]>(
    []
  );

  const {cart} = useCart();
  const router = useRouter()
  

  // Fetch product categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await FetchProductCategories();
      setProductCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <main className="z-10 border-b-2 dark:border bg-transparent backdrop-blur-md w-screen fixed mt-0">
      <div className="w-screen px-10 flex justify-between items-center max-h-16">
        <div onClick={()=>router.push("/")}>
          {/* <h3 className="text-4xl pb-5">LOGO</h3> */}
          <Image src={"/BI Structure Images/BI Structure.png"} width={125} height={125} alt="" className="dark:hidden"/>
          <Image src={"/BI Structure Images/BI Structure white.png"} width={125} height={125} alt="" className="hidden dark:!block"/>
        </div>
        <div className="md:!block hidden">
          <NavigationMenu className="mt-0 ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref className="">
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()}  hover:text-primary no-underline text-black dark:text-white bg-transparent`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-primary bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <Link
                      href={`/products/all`}
                      className="dark:text-white text-black no-underline"
                    >
                      <li className="list-none" key={868}>
                        All
                      </li>
                    </Link>

                    {productCategories.length > 0 &&
                      productCategories.map((category: ProductCategory) => (
                        <Link
                          href={`/products/${category.slug}`}
                          key={category.name}
                          className="dark:text-white text-black no-underline"
                        >
                          <li className="list-none">{category.name}</li>
                        </Link>
                      ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/profile" legacyBehavior passHref className="">
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} hover:text-primary no-underline text-black dark:text-white bg-transparent`}
                  >
                    Profile
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref className="">
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} hover:text-primary no-underline text-black dark:text-white bg-transparent`}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="md:!block hidden">
          <div className="flex items-center gap-3">
            <Input type="SearchBar" className="bg-[#f5f5f5]" placeholder="Search..." />
            <div className="w-16">
              <ModeToggle />
            </div>
            
            <Link href={"/cart"} className="relative">
              <RiShoppingCart2Fill  className="text-3xl text-gray-700 dark:text-white/85" />
              {
                cart.length>0 && <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                {cart.length}
              </span>
              }
              
            </Link>
            <Button className="text-white">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </Button>
          </div>
        </div>

        <div className="flex md:hidden gap-3 items-center">
        <Button variant={"ghost"} className="p-0">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="p-3">
                <CiMenuBurger />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-center justify-center">
                <NavigationMenu className="mt-0 md:">
                  <NavigationMenuList className="flex flex-col">
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref className="">
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} no-underline text-black dark:text-white bg-transparent`}
                        >
                          Home
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link
                        href="/profile"
                        legacyBehavior
                        passHref
                        className=""
                      >
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} no-underline text-black dark:text-white bg-transparent`}
                        >
                          Profile
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/about" legacyBehavior passHref className="">
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} no-underline text-black dark:text-white bg-transparent`}
                        >
                          About
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent">
                        Products
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-36 gap-3 p-4 grid-cols-1">
                          <Link
                            href={`/products/all`}
                            className="dark:text-white text-black no-underline"
                          >
                            <li className="list-none" key={868}>
                              All
                            </li>
                          </Link>

                          {productCategories.length > 0 &&
                            productCategories.map(
                              (category: ProductCategory) => (
                                <Link
                                  href={`/products/${category.slug}`}
                                  key={category.name}
                                  className="dark:text-white text-black no-underline"
                                >
                                  <li className="list-none">{category.name}</li>
                                </Link>
                              )
                            )}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-3">
                  <ModeToggle />
                  <Button variant={"outline"}>Register</Button>
                  <Button>
                    <RiShoppingCart2Fill  />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </main>
  );
};

export default NavBar;
