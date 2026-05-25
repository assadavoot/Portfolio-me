import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SectionLinkProps = {
  href: string;
  label: string;
};

export function SectionLink({ href, label }: SectionLinkProps) {
  return (
    <Link href={href} className="section-link">
      <span>{label}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
