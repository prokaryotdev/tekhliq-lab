import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden border border-white/10 md:border-0">
      <div className="relative z-10 m-auto max-w-[1100px] px-4 py-[110px] text-center md:py-[90px] xl:px-0">
        <Link
          href="/our-conf"
          className={cn(
            "inline-flex rounded-[24px] border-2 border-[rgba(189,52,254,.5)] shadow-sm",
            "bg-[radial-gradient(1686.42%_113.39%_at_83.25%_2.56%,_#bd34fe1a,_#bd34fe00)]",
            "px-[20px] py-[8px] text-sm font-medium",
          )}
        >
          Join Our Conf 2024
        </Link>

        <h1
          className={cn(
            "m-auto mt-8 bg-gradient-to-b from-white to-[rgba(255,255,255,0.64)] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[60%]",
            "bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl xl:text-6xl",
          )}
        >
          Unlock the Power of AI with Tekhliq Labs
        </h1>
        <p
          className={cn(
            "m-auto mb-8 mt-6 font-light text-white/60 sm:w-[50%] lg:w-[40%]",
          )}
        >
          Custom LLM Applications & Intelligent AI Workflows Tailored for Your
          Business
        </p>
        <Link
          href="/waiting-list"
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-[24px] bg-white text-sm font-medium text-black",
            "shadow-sm backdrop-blur-md",
            "px-[20px] py-[8px]",
          )}
        >
          Join Waiting List
          <ChevronRight className="w-5" />
        </Link>
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-0 top-10 h-full w-full opacity-[.5] md:-bottom-5 md:opacity-[.3]",
          "bg-[linear-gradient(179.77deg,_rgba(3,1,6,0)_29.33%,_#361764_89.04%)]",
        )}
      ></div>
    </div>
  );
};

export default Hero;
