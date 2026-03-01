"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const socials = [
    { label: "GitHub", href: personalInfo.socials.github },
    { label: "LinkedIn", href: personalInfo.socials.linkedin },
    { label: "Email", href: `mailto:${personalInfo.email}` },
  ];

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="absolute inset-0 dot-grid-dense opacity-20" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading number="03" title="Contact" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-12 max-w-md text-xs leading-relaxed text-neutral-500">
            Currently open to new opportunities. Send a message or connect
            through socials below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mb-16 max-w-lg space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-neutral-600"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-b border-neutral-800 bg-transparent py-2 text-xs text-white outline-none transition-colors placeholder:text-neutral-700 focus:border-neutral-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-neutral-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border-b border-neutral-800 bg-transparent py-2 text-xs text-white outline-none transition-colors placeholder:text-neutral-700 focus:border-neutral-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-neutral-600"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none border-b border-neutral-800 bg-transparent py-2 text-xs text-white outline-none transition-colors placeholder:text-neutral-700 focus:border-neutral-500"
                placeholder="Your message..."
              />
            </div>
            <Button type="submit" variant="primary" size="md">
              {sent ? "Opening mail..." : "Send Message"}
            </Button>
          </form>

          {/* Social links */}
          <div className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:text-white"
              >
                {social.label}
                <ArrowUpRight
                  size={10}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
