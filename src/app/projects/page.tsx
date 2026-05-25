import { PageShell } from "@/components/PageShell";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <PageShell
      kicker="// Projects"
      title="Selected project directions"
      description="A project category added from the work history: practical systems built around loyalty, CRM, operations and internal workflows."
    >
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <p>{project.type}</p>
            <h2>{project.title}</h2>
            <span>{project.description}</span>
            <ul className="tag-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
