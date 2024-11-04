import Image from "next/image";
import { cn } from "@/lib/utils";

import C1 from "../../public/i1.svg";
import C2 from "../../public/i2.svg";
import C3 from "../../public/i3.svg";
import C4 from "../../public/i4.svg";

const cards = [
  {
    id: 1,
    title: "Project Evaluation",
    description:
      "In-depth analysis to optimize project performance and outcomes.",
    image: C1,
  },
  {
    id: 2,
    title: "Market Research",
    description:
      "Gather insights to understand market trends and customer needs.",
    image: C2,
  },
  {
    id: 3,
    title: "Data Analysis",
    description: "Transform data into actionable strategies for growth.",
    image: C3,
  },
  {
    id: 4,
    title: "Consulting Services",
    description: "Expert guidance to enhance your business operations.",
    image: C4,
  },
];

const Info = () => {
  return (
    <div className="m-auto max-w-[900px] px-4 pt-8 sm:w-[95%] lg:pt-16 xl:px-0">
      <div className="flex flex-wrap justify-center gap-7 lg:justify-between lg:gap-5">
        {cards.map((card, index) => {
          const isWideCard = index === 1 || index === 2;

          return (
            <div
              key={card.id}
              className={cn(
                "relative h-[300px] w-[95%] cursor-pointer overflow-hidden rounded-[16px] p-6 sm:w-[45%] lg:w-[300px]",
                "border-[2px] border-white/5 bg-[#0c0c0e]",
                isWideCard && "lg:w-[545px] xl:w-[580px]",
              )}
            >
              <div className="flex items-center justify-center p-2">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  className={cn(
                    "w-[130px]",
                    isWideCard && "absolute bottom-2 top-4 m-auto w-[90%]",
                    index === 2 && "top-10",
                  )}
                />
              </div>
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-end rounded-[16px] p-6",
                  isWideCard &&
                    "bg-[linear-gradient(179.77deg,_rgba(3,1,6,0)_29.33%,_#361764_89.04%)]",
                )}
              >
                <div
                  className={cn(
                    "mt-6 line-clamp-1 text-lg font-medium",
                    isWideCard && "relative z-10 lg:w-[50%]",
                  )}
                >
                  {card.title}
                </div>
                <p
                  className={cn(
                    "mt-2 line-clamp-3 text-sm font-light text-gray-400",
                    isWideCard && "relative z-10 lg:w-[40%]",
                  )}
                >
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
