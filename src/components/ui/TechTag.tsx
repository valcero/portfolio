import { cn } from "@/lib/utils";

interface TechTagProps {
  label: string;
  className?: string;
}

export default function TechTag({ label, className }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-block border border-neutral-800 px-2 py-0.5 text-[10px] uppercase tracking-widest text-neutral-500 transition-colors hover:border-neutral-600 hover:text-neutral-300",
        className
      )}
    >
      {label}
    </span>
  );
}
