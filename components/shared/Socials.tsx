import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Link
        href="https://instagram.com/williamhobeika"
        aria-label="visit my instagram"
        className="social-link"
      >
        <FaInstagram aria-label="instagram icon" />
      </Link>
      <Image
        src="/assets/images/separator.svg"
        alt="separator"
        width={20}
        height={20}
        className="-rotate-45"
      />
      <Link
        href="https://www.linkedin.com/in/william-hobeika"
        aria-label="visit my linkedin"
        className="social-link"
      >
        <FaLinkedin aria-label="linkedin icon" />
      </Link>
    </div>
  );
};

export default Socials;
