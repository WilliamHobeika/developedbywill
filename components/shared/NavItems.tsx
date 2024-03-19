"use client";

import { usePathname } from "next/navigation";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { headerLinks } from "@/constant";
import Link from "next/link";
import Image from "next/image";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="gap-7">
        {headerLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <NavigationMenuItem key={link.label}>
              {!link.subLinks ? (
                <NavigationMenuLink
                  asChild
                  className={`navigation-item ${isActive && "!text-foreground"}`}
                >
                  <Link href={link.route} aria-label={`${link.label + "link"}`}>
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              ) : (
                <>
                  <NavigationMenuTrigger
                    className={`navigation-item ${isActive && "!text-foreground"}`}
                  >
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {link.label === "Getting started" && (
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              aria-label="home link"
                              href="/"
                              className="navItems-homeLink"
                            >
                              <Image
                                src="/assets/images/w-light.svg"
                                alt="w logo light"
                                width={30}
                                height={30}
                                className="block dark:hidden"
                              />
                              <Image
                                src="/assets/images/w-dark.svg"
                                alt="w logo dark"
                                width={30}
                                height={30}
                                className="hidden dark:block"
                              />
                              <div className="mb-2 mt-4 text-base font-medium">
                                Developed By Will
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Crafting engaging websites with meticulous
                                attention to detail. User-friendly. Tailor-made.
                                Your digital vision brought to life.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )}
                      {link.subLinks.map((sublink) => (
                        <NavigationMenuLink asChild key={sublink.title}>
                          <Link
                            aria-label={`${sublink.title + "link"}`}
                            href={sublink.route}
                            className="navItems-sublink"
                          >
                            <div className="text-sm font-medium leading-none">
                              {sublink.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {sublink.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavItems;
