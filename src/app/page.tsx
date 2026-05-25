import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Mail, Sparkles } from "lucide-react";
import { profile, projectSignals, skills } from "@/data/portfolio";
import { SectionLink } from "@/components/SectionLink";

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-copy">
          <p className="availability">
            <Sparkles size={17} aria-hidden="true" />
            {profile.availability}
          </p>
          <h1>
            {profile.firstName}
            <span>{profile.lastName}</span>
          </h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Link href="/contact" className="primary-action">
              <Mail size={18} aria-hidden="true" />
              Get in touch
            </Link>
            <Link href="/projects" className="secondary-action">
              View projects
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="orbit-panel" aria-label="Portfolio focus">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core">
            <BriefcaseBusiness size={30} aria-hidden="true" />
            <span>{profile.role}</span>
          </div>
        </div>
      </div>

      <div className="stats-strip">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <section className="overview-grid" aria-label="Portfolio overview">
        <article className="overview-main">
          <p className="kicker">{"// Core Skills"}</p>
          <h2>What I work with</h2>
          <div className="skill-preview-grid">
            {skills.slice(0, 3).map((skill) => {
              const Icon = skill.icon;

              return (
                <div key={skill.title} className="compact-card">
                  <Icon size={20} aria-hidden="true" />
                  <span>{skill.area}</span>
                  <strong>{skill.title}</strong>
                </div>
              );
            })}
          </div>
          <SectionLink href="/skills" label="Explore skills" />
        </article>

        <aside className="signal-list" aria-label="Working signals">
          {projectSignals.map((item) => (
            <div key={item.label} className="signal-row">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </aside>
      </section>
    </section>
  );
}
