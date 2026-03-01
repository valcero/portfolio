"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ number, title, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-16 flex items-center gap-4", className)}
    >
      <span className="text-[10px] uppercase tracking-widest text-neutral-600">
        ({number})
      </span>
      <h2 className="text-sm uppercase tracking-[0.3em] text-white">{title}</h2>
      <div className="hidden h-px flex-1 bg-neutral-800 sm:block" />
    </motion.div>
  );
}
