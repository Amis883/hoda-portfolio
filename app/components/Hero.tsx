"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen flex items-center px-6 bg-[#0B0F19] text-white">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          Hoda Kakhki
        </motion.h1>

        <p className="mt-4 text-lg text-gray-400">Frontend Developer</p>

        <p className="mt-6 text-xl text-gray-300 leading-relaxed">
          I build fast, scalable web interfaces with a focus on clean
          architecture and user experience.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="https://github.com/Amis883"
            target="_blank"
            className="px-5 py-2.5 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/hoda-kakhki"
            target="_blank"
            className="px-5 py-2.5 rounded-lg border border-gray-600 text-gray-300 hover:border-white hover:text-white transition"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
