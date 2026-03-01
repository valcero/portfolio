import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-700">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-800">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
