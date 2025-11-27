"use client";

import Link from "next/link";
import Image from "next/image";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Header */}
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

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <Link
            href="/editor"
            className="px-4 py-2 sm:px-6 sm:py-3 border border-black font-semibold rounded hover:bg-black hover:text-white transition text-xs sm:text-sm md:text-base"
          >
            Try the Editor
          </Link>
          <Link
            href="#features"
            className="px-4 py-2 sm:px-6 sm:py-3 border border-black font-semibold rounded hover:bg-black hover:text-white transition text-xs sm:text-sm md:text-base"
          >
            Learn More
          </Link>
        </div>

        <div className="my-10 w-full max-w-lg sm:max-w-xl">
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

      {/* How It Works */}
      <HowItWorks />

      {/* Use Cases */}
      <UseCases />

      <section className="py-20 px-6 bg-white text-center border-t border-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your First AI Workflow?
        </h2>
        <p className="text-gray-700 mb-8">
          Launch the editor and start creating in seconds.
        </p>

        <Link
          href="/editor"
          className="px-8 py-4 border border-black font-semibold rounded hover:bg-black hover:text-white transition"
        >
          Launch Editor
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-black text-sm">
        &copy; {new Date().getFullYear()} 0xDaniiel —{" "}
        <strong>FlowForge AI</strong>
      </footer>
    </div>
  );
}
