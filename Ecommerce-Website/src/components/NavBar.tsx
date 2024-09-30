import React from "react";
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
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { ModeToggle } from "./ui/ModeToogle";
import { Input } from "./ui/input";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { ProductCategory } from "@/app/data";


async function FetchProductCategories(): Promise<ProductCategory[]> {
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
}

const NavBar = async () => {


  const productCategories: ProductCategory[] = await FetchProductCategories();

  return (
    <main className="z-10 border-b-2 dark:border  bg-transparent backdrop-blur-md w-screen fixed mt-0">
      <div className="w-screen px-10 flex justify-between items-center min-h-16 max-h-20">
        <div>
          <h3 className="text-4xl pb-5">LOGO</h3>
        </div>
        <div className="md:block hidden">
          <NavigationMenu className="mt-0 md:">
            <NavigationMenuList>
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
                <NavigationMenuTrigger className="bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <Link
                      href={`/products/all`}
                      className="dark:text-white text-black no-underline"
                    >
                      <li className="list-none" key={868}>
                        All
                      </li>
                    </Link>

                    {productCategories.length > 0 && (
                      productCategories.map((category: ProductCategory) => (
                        <Link
                          href={`/products/${category.slug}`}
                          key={category.name}
                          className="dark:text-white text-black no-underline"
                        >
                          <li className="list-none ">{category.name}
                          </li>
                        </Link>
                      ))
                    )}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/profile" legacyBehavior passHref className="">
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
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center gap-3">
            <Input type="SearchBar" placeholder="Search" />
            <div className="w-16">
              <ModeToggle />
            </div>
            <Button variant={"outline"}>Register</Button>
            <Link href={"/cart"}><MdOutlineShoppingBag className="text-2xl text-gray-700 dark:text-white/85" /></Link>
            </div>
          </div>
        
        <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline"><CiMenuBurger/></Button>
          </SheetTrigger>
          <SheetContent >
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
                <Link href="/profile" legacyBehavior passHref className="">
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

                    {productCategories.length > 0 && (
                      productCategories.map((category: ProductCategory) => (
                        <Link
                          href={`/products/${category.slug}`}
                          key={category.name}
                          className="dark:text-white text-black no-underline"
                        >
                          <li className="list-none " >
                            {category.name}
                          </li>
                        </Link>
                      ))
                    )}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-3">
              <ModeToggle />
            <Button variant={"outline"}>Register</Button>
            <Button><MdOutlineShoppingBag /></Button>
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
