"use client";

import Terminal from "@/components/statefull/Terminal";
import Footer from "@/components/stateless/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-canvas min-h-screen flex flex-col justify-center">
        <Terminal />
      </main>
      <Footer />
    </>
  );
}
