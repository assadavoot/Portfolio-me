import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StarField } from "@/components/StarField";
import { TopNav } from "@/components/TopNav";
import { footer } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assadavoot Anukool | Front-end / Full Stack Developer",
  description:
    "Portfolio of Assadavoot Anukool, Front-end Developer and Full Stack Developer focused on React.js, Next.js, TypeScript and Node.js.",
  metadataBase: new URL("https://portfolio-assadavoot.vercel.app")
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const FooterIcon = footer.icon;

  return (
    <html lang="en">
      <body>
        <StarField />
        <div className="site-noise" aria-hidden="true" />
        <TopNav />
        <main>{children}</main>
        <footer className="site-footer">
          <FooterIcon size={16} aria-hidden="true" />
          <span>© 2026 Assadavoot Anukool</span>
          <span>{footer.text}</span>
          <span>{footer.motto}</span>
        </footer>
      </body>
    </html>
  );
}
