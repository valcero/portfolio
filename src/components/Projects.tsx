"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import TechTag from "./ui/TechTag";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading number="02" title="Work" />

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-neutral-900 py-8 transition-colors hover:bg-white/[0.01] md:py-10"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <h3 className="text-sm font-bold text-white">
                      {project.title}
                    </h3>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-neutral-600 transition-colors hover:text-white"
                        aria-label="View project"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>

                  <p className="mb-5 max-w-2xl text-xs leading-relaxed text-neutral-500">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechTag key={t} label={t} />
                    ))}
                  </div>
                </div>

                {/* Decorative project number */}
                <div className="hidden flex-shrink-0 md:block">
                  <span className="text-6xl font-bold text-neutral-900 transition-colors group-hover:text-neutral-800">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t border-neutral-900" />
      </div>
    </section>
  );
}
