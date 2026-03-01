"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Corner markers - Nothing-style geometric accents */}
      <div className="absolute left-6 top-6 h-16 w-16 border-l border-t border-neutral-800" />
      <div className="absolute right-6 top-6 h-16 w-16 border-r border-t border-neutral-800" />
      <div className="absolute bottom-6 left-6 h-16 w-16 border-b border-l border-neutral-800" />
      <div className="absolute bottom-6 right-6 h-16 w-16 border-b border-r border-neutral-800" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-dot-pulse" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
            Available for work
          </span>
        </motion.div>

        {/* Name - large, stark, monospace */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {personalInfo.name}
          <span className="animate-blink">_</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-6 text-sm text-neutral-500 sm:text-base"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-12 max-w-xl text-xs leading-relaxed text-neutral-600 sm:text-sm"
        >
          {personalInfo.description}
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-20 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Button href="#projects" variant="primary" size="md">
            View Work
            <ArrowDownRight size={12} />
          </Button>
          <Button href={personalInfo.resumeUrl} variant="outline" size="md">
            Resume
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap gap-12 border-t border-neutral-900 pt-8 sm:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </section>
  );
}
