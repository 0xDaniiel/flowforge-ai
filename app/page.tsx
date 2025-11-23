"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Hero */}
      <header className="py-8 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">FlowForge AI</h1>
        <nav>
          <Link
            href="/editor"
            className="px-4 py-2 border border-black font-semibold rounded hover:bg-black hover:text-white transition"
          >
            Open Editor
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Visual AI Workflow Builder
        </h2>
        <p className="max-w-xl text-gray-700">
          Build, connect, and simulate AI workflows in real time. Drag-and-drop
          nodes, define AI agent steps, and visualize processes instantly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/editor"
            className="px-6 py-3 border border-black font-semibold rounded hover:bg-black hover:text-white transition"
          >
            Try the Editor
          </Link>
          <Link
            href="#features"
            className="px-6 py-3 border border-black font-semibold rounded hover:bg-black hover:text-white transition"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-12">
          <Image
            src="/illustration.svg"
            alt="AI Workflow Illustration"
            width={600}
            height={400}
            className="mx-auto"
          />
        </div>
      </main>

      <footer className="py-6 text-center border-t border-black text-sm">
        © 2025 0xDaniiel — FlowForge AI. All rights reserved.
      </footer>
    </div>
  );
}
