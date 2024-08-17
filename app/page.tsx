import LandingHeader from "@/components/Landing-header";
import { Button } from "@/components/ui/button";
import { BrainCogIcon, GlobeIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF documents",
    description: "Chat with your pdf anytime anywhere",
    icon: GlobeIcon,
  },

  {
    name: "Blazing Fast Responses",
    description: "Experience lightning-fast answers to your queries",
    icon: ZapIcon,
  },

  {
    name: "Chat Memorization",
    description: "Our intelligent chatbot remembers previous interactions with you, providing a seamless and personalized experience",
    icon: BrainCogIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-cyan-600 dark:from-gray-900 dark:to-cyan-900">
      <div className="bg-white dark:bg-gray-800 py-24 sm:py-16 rounded-md drop-shadow-xl">
        <div className="-mt-12">
        <LandingHeader />
        </div>
        <div className="mt-10 flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h4 className="text-base font-semibold leading-7 text-cyan-600 dark:text-cyan-400">
              Your Interactive Document Companion
            </h4>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              Transform Your PDFs into Interactive Conversations
            </p>
            <p className="mt-10 text-lg leading-8 text-gray-600 dark:text-gray-300 justify-self-center">
              Introducing{" "}
              <span className="font-bold text-cyan-600 dark:text-cyan-400">
                Chat with PDF.
              </span>
              <br />
              <br />
              Upload your documents, and our chatbot will answer all your questions and summarize content. Ideal for Everyone.{" "}
              <span className="text-cyan-600 dark:text-cyan-400">
                Chat with PDF
              </span>
              {" "}
              turns static documents into {""}
              <span className="font-bold">dynamic conversations</span>, enhancing productivity 10x fold effortlessly.
            </p>
          </div>
          <Button asChild className="mt-4 bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <Image
              alt="App Screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-gray-100/20"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 dark:from-gray-800/95 pt-[5%]"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-6xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9 text-justify">
                <dt className="inline font-semibold text-gray-900 dark:text-gray-100">
                  <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </dt>
                <dd>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <footer className="text-gray-600 dark:text-gray-300 text-center mt-10">
          www.chatpdf.com
        </footer>
      </div>
    </main>
  );
}
