import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socials from "./Socials";
import { footerLinks } from "@/constant";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="links-container">
          <div className="col-span-full flex items-center justify-between lg:items-start">
            <Link
              href="/"
              aria-label="home link"
              className="flex items-center justify-center dark:hidden"
            >
              <Image
                src="/assets/images/w-light.svg"
                alt="w logo light"
                priority
                width={30}
                height={30}
              />
              <Image
                src="/assets/images/separator.svg"
                alt="separator"
                width={28}
                height={28}
                className="hidden -rotate-12 sm:block"
              />
              <Image
                src="/assets/images/dbw-light.svg"
                alt="developed by will logo light"
                priority
                width={180}
                height={120}
                className="hidden sm:block"
              />
            </Link>
            <Link
              href="/"
              aria-label="home link"
              className="hidden items-center justify-center dark:flex"
            >
              <Image
                src="/assets/images/w-dark.svg"
                alt="w logo dark"
                priority
                width={30}
                height={30}
              />
              <Image
                src="/assets/images/separator.svg"
                alt="separator"
                width={28}
                height={28}
                className="hidden -rotate-12 sm:block"
              />
              <Image
                src="/assets/images/dbw-dark.svg"
                alt="developed by will logo dark"
                priority
                width={180}
                height={120}
                className="hidden sm:block"
              />
            </Link>
            <div className="flex lg:hidden">
              <Socials />
            </div>
          </div>
          {/* footer links */}
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="mt-2 flex flex-col items-start gap-3 text-sm"
            >
              <h4 className="font-medium text-foreground">{link.title}</h4>
              <div className="flex flex-col gap-2">
                {link.links.map((sublink) => (
                  <Link
                    href={sublink.url}
                    key={sublink.label}
                    className="footer-sublink"
                  >
                    {sublink.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <p className="text-xs text-grey-light dark:text-grey-dark">
            &copy; Developed By Will 2024, inc. All rights reserved.
          </p>
          <div className="hidden lg:block">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
