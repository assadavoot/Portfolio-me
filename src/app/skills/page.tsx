import { PageShell } from "@/components/PageShell";
import { skills } from "@/data/portfolio";

export default function SkillsPage() {
  return (
    <PageShell
      kicker="// Core Skills"
      title="What I work with"
      description="Front-end, UI systems, back-end APIs, database tools and professional workflows used across production web applications."
    >
      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <article key={skill.title} className="skill-card">
              <div className="card-heading">
                <span>{skill.index}</span>
                <Icon size={22} aria-hidden="true" />
              </div>
              <p>{skill.area}</p>
              <h2>{skill.title}</h2>
              <ul className="tag-list">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </PageShell>
  );
}
