import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { contact } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <PageShell
      kicker="// Contact"
      title="Get in touch"
      description="Reach out for front-end, full-stack, CRM, loyalty platform and back-office web application work."
    >
      <div className="contact-grid">
        {contact.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <Icon size={22} aria-hidden="true" />
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              {item.href ? <ExternalLink size={17} aria-hidden="true" /> : null}
            </>
          );

          return item.href ? (
            <a key={item.label} href={item.href} className="contact-item">
              {content}
            </a>
          ) : (
            <div key={item.label} className="contact-item">
              {content}
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}
