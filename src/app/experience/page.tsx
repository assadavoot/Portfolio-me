import { PageShell } from "@/components/PageShell";
import { experiences } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <PageShell
      kicker="// Experience"
      title="Where I've worked"
      description="Eight years of experience across CRM, loyalty, internal systems, back-office applications and customer-facing web flows."
    >
      <div className="timeline">
        {experiences.map((job) => (
          <article key={`${job.company}-${job.period}`} className="timeline-item">
            <div className="timeline-date">{job.period}</div>
            <div className="timeline-content">
              <p>{job.company}</p>
              <h2>{job.role}</h2>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
