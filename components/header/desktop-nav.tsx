import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "services", label: "Services" },
  { href: "blog", label: "Blog" },
];

const DesktopNav = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 hidden h-[65px] items-center border-b border-white/5 bg-[#09080b] lg:flex">
      <div className="m-auto flex h-[60px] w-full max-w-[1000px] items-center justify-between px-4 xl:px-0">
        <Link
          href="/"
          className={cn(
            "bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent",
          )}
        >
          TL
        </Link>

        <div className={cn("flex items-center gap-6")}>
          <div className={cn("flex items-center justify-center gap-8")}>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn("font-light text-white/80 hover:underline")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={cn("h-[20px] w-[1px] bg-white/20")} />

          <Link
            href="/contact"
            className="rounded-[24px] border border-white/20 px-[3px] py-2 shadow-sm"
          >
            <span className="rounded-[24px] border border-[rgba(255,255,255,0.15)] bg-[rgba(140,69,255,0.4)] px-[18px] py-[6px] text-sm font-medium text-white shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-md">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
