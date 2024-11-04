import { cn } from "@/lib/utils";

const servicesList = [
  {
    service: "Custom LLM Applications",
    description:
      "Tailored LLM apps to enhance engagement and generate content.",
  },
  {
    service: "AI Agent Workflows",
    description: "AI agents that automate tasks and boost productivity.",
  },
  {
    service: "Natural Language",
    description: "Use NLP to analyze text and extract insights.",
  },
  {
    service: "Predictive Analytics",
    description: "Models to forecast trends for data-driven decisions.",
  },
  {
    service: "AI Integration Services",
    description: "Integrate AI solutions into your systems seamlessly.",
  },
  {
    service: "Training & Support",
    description: "Training and support to empower your AI tool usage.",
  },
];

function Services() {
  return (
    <div className="m-auto mt-16 w-[95%] px-6 sm:w-[90%] lg:mt-28 lg:max-w-[900px] lg:text-left xl:px-0">
      <h2
        className={cn(
          "mt-8 text-3xl font-bold leading-tight text-transparent lg:text-4xl",
          "bg-gradient-to-b from-white to-[rgba(255,255,255,0.31)] bg-clip-text",
        )}
      >
        Services
      </h2>
      <div className="mt-8 flex flex-wrap justify-between gap-x-4 gap-y-8 lg:mt-16 lg:gap-y-12">
        {servicesList.map((card, index) => (
          <div
            key={index}
            className={cn(
              "cursor-pointer overflow-hidden sm:w-[45%] lg:w-[250px]",
            )}
          >
            <div className="text-xl font-bold text-violet-500">
              0{index + 1}
            </div>
            <div>
              <div
                className={cn("mt-3 text-lg font-medium lg:mt-5 lg:text-xl")}
              >
                {card.service}
              </div>
              <p className={cn("mt-2 line-clamp-2 text-sm text-gray-400")}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
