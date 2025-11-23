"use client";

import Link from "next/link";
import Image from "next/image";
import Features from "@/components/Features";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Hero */}
      <header className="py-6 px-4 md:px-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">FlowForge AI</h1>
        <nav>
          <Link
            href="/editor"
            className="px-4 py-2 border border-black font-semibold rounded hover:bg-black hover:text-white transition text-sm md:text-base"
          >
            Open Editor
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Visual AI Workflow Builder
        </h2>
        <p className="max-w-md md:max-w-xl text-gray-700 text-base sm:text-lg">
          Build, connect, and simulate AI workflows in real time. Drag-and-drop
          nodes, define AI agent steps, and visualize processes instantly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/editor"
            className="px-6 py-3 border border-black font-semibold rounded hover:bg-black hover:text-white transition text-sm sm:text-base"
          >
            Try the Editor
          </Link>
          <Link
            href="#features"
            className="px-6 py-3 border border-black font-semibold rounded hover:bg-black hover:text-white transition text-sm sm:text-base"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-8 w-full max-w-lg sm:max-w-xl">
          <Image
            src="/images/illustration.svg"
            alt="AI Workflow Illustration"
            width={600}
            height={400}
            className="mx-auto w-full h-auto"
          />
        </div>
      </main>

      <Features />

      <footer className="py-6 text-center border-t border-black text-sm">
        © {new Date().getFullYear()} 0xDaniiel — FlowForge AI. All rights
        reserved.
      </footer>
    </div>
  );
}
