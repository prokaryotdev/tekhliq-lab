"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import T1 from "../../public/t1.svg";
import T2 from "../../public/t2.svg";
import T3 from "../../public/t3.svg";
import T4 from "../../public/t4.svg";
import T5 from "../../public/t5.png";

const trustedImages = [T1, T2, T3, T4, T5];

const Brands = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollAmount = 0;

    const scrollBrands = () => {
      if (container) {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scrollBrands, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-auto max-w-[90%] overflow-hidden pt-8 sm:max-w-[70%] lg:max-w-[800px] lg:pt-16">
      <p className="mb-1 text-center font-light text-white/40">Trusted by</p>
      <div
        ref={scrollContainerRef}
        className="flex items-center justify-start gap-12 overflow-x-hidden whitespace-nowrap p-8"
      >
        {/* Render the brands twice for infinite effect */}
        {[...trustedImages, ...trustedImages].map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Trusted Brand"
            width={150}
            height={150}
            className="w-[90px] opacity-90 brightness-100 grayscale invert filter lg:w-[150px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
