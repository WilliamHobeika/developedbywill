import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="flex md:hidden">
          <MobileNav />
        </div>

        <div className="flex w-full items-center justify-center gap-12 md:justify-start">
          <Link
            aria-label="home link"
            href="/"
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
            aria-label="home link"
            href="/"
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
          <NavItems />
        </div>

        <div className="flex items-center justify-center gap-3">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Header;
