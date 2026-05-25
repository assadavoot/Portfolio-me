import type { ReactNode } from "react";

type PageShellProps = {
  kicker: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ kicker, title, description, children }: PageShellProps) {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}
