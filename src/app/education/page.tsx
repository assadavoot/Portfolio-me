import { GraduationCap } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { education } from "@/data/portfolio";

export default function EducationPage() {
  return (
    <PageShell
      kicker="// Education"
      title="Academic background"
      description="Computer engineering foundation that supports practical product development, system design and database thinking."
    >
      <article className="education-panel">
        <GraduationCap size={34} aria-hidden="true" />
        <div>
          <p>{education.period}</p>
          <h2>{education.degree}</h2>
          <strong>{education.school}</strong>
        </div>
      </article>
    </PageShell>
  );
}
