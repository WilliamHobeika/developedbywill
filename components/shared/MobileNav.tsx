"use client";

import React from "react";
import { CgMenuLeft } from "react-icons/cg";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { headerLinks } from "@/constant";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <CgMenuLeft className="h-6 w-6" aria-label="open menu" />
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col gap-6 md:hidden">
          <div className="flex items-center justify-start dark:hidden">
            <Image
              src="/assets/images/w-light.svg"
              alt="w logo light"
              width={30}
              height={30}
            />
          </div>
          <div className="hidden items-center justify-start dark:flex">
            <Image
              src="/assets/images/w-dark.svg"
              alt="w logo dark"
              width={30}
              height={30}
            />
          </div>
          <Accordion type="single" collapsible className="mt-5 w-full">
            {headerLinks.map((link) => {
              const isActive = pathname === link.route;

              return (
                <AccordionItem
                  key={link.label}
                  value={link.label}
                  className={`mobile-navItem ${isActive && "!text-foreground"}`}
                >
                  {!link.subLinks ? (
                    <Link
                      href={link.route}
                      aria-label={`${link.label + "link"}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <>
                      <AccordionTrigger>{link.label}</AccordionTrigger>
                      <AccordionContent className="ml-3 mt-4 flex flex-col gap-5">
                        {link.subLinks.map((sublink) => (
                          <Link
                            aria-label={`${sublink.title + "link"}`}
                            href={sublink.route}
                            key={sublink.title}
                            className="flex flex-col gap-1"
                          >
                            <div className="text-sm font-medium leading-none text-foreground">
                              {sublink.title}
                            </div>
                            <p className="text-sm leading-snug text-grey-light dark:text-grey-dark">
                              {sublink.description}
                            </p>
                          </Link>
                        ))}
                      </AccordionContent>
                    </>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
