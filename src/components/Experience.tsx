"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import TechTag from "./ui/TechTag";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="absolute inset-0 dot-grid-dense opacity-20" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading number="01" title="Experience" />

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-neutral-900 py-8 first:border-t-0 md:py-10"
            >
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                {/* Left: date & meta */}
                <div className="flex-shrink-0 md:w-48">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    {exp.dateRange}
                  </p>
                  <div className="mt-2 inline-block border border-neutral-800 px-2 py-0.5 text-[9px] uppercase tracking-widest text-neutral-600">
                    {exp.type}
                  </div>
                </div>

                {/* Right: content */}
                <div className="flex-1">
                  <h3 className="mb-1 text-sm font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="mb-4 text-xs text-neutral-500">{exp.company}</p>

                  <ul className="mb-5 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs leading-relaxed text-neutral-500"
                      >
                        <span className="mt-1.5 h-px w-3 flex-shrink-0 bg-neutral-700" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <TechTag key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
