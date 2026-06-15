"use client";
import styles from "./Skills.module.css";

const TICKER_SKILLS = [
  "React", "TypeScript", "Next.js", ".NET", "ASP.NET Core",
  "PostgreSQL", "SQL Server", "Java", "Python", "REST APIs",
  "CI/CD", "GitHub Actions", "Agile", "Magento 2", "Node.js",
  "React", "TypeScript", "Next.js", ".NET", "ASP.NET Core",
  "PostgreSQL", "SQL Server", "Java", "Python", "REST APIs",
  "CI/CD", "GitHub Actions", "Agile", "Magento 2", "Node.js",
];

const SKILL_GROUPS = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Next.js", "JavaScript", "HTML5 / CSS3", "Magento 2"],
  },
  {
    label: "Backend",
    items: ["ASP.NET Core", ".NET / C#", "Java", "Node.js", "Python", "REST API design"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "SQL Server", "MySQL", "Schema design", "Query optimisation"],
  },
  {
    label: "DevOps & Tools",
    items: ["Git / GitHub", "GitHub Actions", "Docker (basics)", "Jira", "VS Code", "CI/CD pipelines"],
  },
  {
    label: "Practices",
    items: ["Agile / Scrum", "Code reviews", "Unit testing", "TDD basics", "AI-assisted dev"],
  },
];

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      {/* Ticker */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerInner}>
          {TICKER_SKILLS.map((s, i) => (
            <span key={i} className={styles.tickerItem}>
              {s} <span className={styles.tickerDot}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>02 / Skills</p>
          <h2 className={styles.title}>What I build with</h2>
        </div>

        <div className={styles.grid}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.groupItems}>
                {group.items.map((item) => (
                  <li key={item} className={styles.groupItem}>
                    <span className={styles.dot} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
