import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harness AI with Custom LLM Applications | Tekhliq Labs",
  description:
    "Tekhliq Labs helps organizations harness the power of artificial intelligence through custom LLM applications and AI agent workflows. Discover tailored solutions for your business.",
  keywords:
    "artificial intelligence, AI applications, custom LLM, AI workflows, Tekhliq Labs",
  openGraph: {
    title: "Harness AI with Custom LLM Applications | Tekhliq Labs",
    description:
      "Unlock the potential of AI with Tekhliq Labs. We specialize in custom LLM applications and AI agent workflows tailored to your organization's needs.",
    url: "https://tekhliqlab.vercel.app/",
    siteName: "Tekhliq Labs",
    images: [
      {
        url: "/og.png",
        alt: "Tekhliq Labs AI Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          ` ${poppins.className} antialiased`,
          "bg-[#09080b] text-white",
        )}
      >
        <Header />
        <main className="pt-[60px] md:pt-[65px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
