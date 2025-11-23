"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to FlowForge AI</h1>
      <Link
        href="/editor"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Editor
      </Link>
    </div>
  );
}
