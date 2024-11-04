"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex flex-col bg-[#09080b] lg:hidden">
      <div className="m-auto flex h-[60px] w-full items-center justify-between border-b border-white/5 px-6 sm:px-12 xl:px-0">
        <Link
          href="/"
          className={cn(
            "bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-2xl font-extrabold text-transparent",
          )}
        >
          TL
        </Link>

        <button onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</button>
      </div>

      {isOpen && (
        <nav className="flex h-[95vh] w-full flex-col items-center overflow-scroll px-6 py-24 sm:px-12">
          <div className="mb-12 flex w-full flex-col p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b border-white/10 py-[14px] font-light text-white/80",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="rounded-[24px] border border-white/20 px-[3px] py-2 shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            <span className="rounded-[24px] border border-[rgba(255,255,255,0.15)] bg-[rgba(140,69,255,0.4)] px-[18px] py-[6px] text-sm font-medium text-white shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-md">
              Contact Us
            </span>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
