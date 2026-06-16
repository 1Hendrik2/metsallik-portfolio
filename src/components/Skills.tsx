"use client";
import { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const TICKER_PAUSE_MS = 3500;
const TICKER_SNAP_MS = 400;

const BASE_TICKER_SKILLS = [
  "React", "TypeScript", "Next.js", ".NET", "ASP.NET Core",
  "PostgreSQL", "SQL Server", "Java", "Python", "REST APIs",
  "CI/CD", "GitHub Actions", "Agile", "Magento 2", "Node.js",
];

const TICKER_SKILLS = [...BASE_TICKER_SKILLS, ...BASE_TICKER_SKILLS];

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
    items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Schema design", "Query optimisation"],
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
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = tickerRef.current;
    if (!inner) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const items = Array.from(inner.children) as HTMLElement[];
    const stepCount = items.length / 2;

    const getOffset = (step: number) => {
      let offset = 0;
      for (let i = 0; i < step; i++) offset += items[i].offsetWidth;
      return offset;
    };

    let step = 0;
    inner.style.transition = `transform ${TICKER_SNAP_MS}ms ease-in-out`;

    const advance = () => {
      step++;
      if (step > stepCount) {
        inner.style.transition = "none";
        inner.style.transform = "translateX(0)";
        step = 1;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            inner.style.transition = `transform ${TICKER_SNAP_MS}ms ease-in-out`;
            inner.style.transform = `translateX(-${getOffset(step)}px)`;
          });
        });
        return;
      }

      inner.style.transform = `translateX(-${getOffset(step)}px)`;
    };

    const interval = window.setInterval(advance, TICKER_PAUSE_MS);

    const onResize = () => {
      inner.style.transition = "none";
      inner.style.transform = `translateX(-${getOffset(step)}px)`;
      requestAnimationFrame(() => {
        inner.style.transition = `transform ${TICKER_SNAP_MS}ms ease-in-out`;
      });
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className={styles.section} id="skills">
      {/* Ticker */}
      <div className={styles.ticker} aria-hidden="true">
        <div ref={tickerRef} className={styles.tickerInner}>
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
