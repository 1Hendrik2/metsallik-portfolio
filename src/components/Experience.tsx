import NodeNetwork from "./NodeNetwork";
import styles from "./Experience.module.css";

const JOBS = [
  {
    num: "01",
    title: "Full-Stack Software Developer",
    company: "Net Group OÜ",
    location: "Tallinn, Estonia",
    period: "Jan 2024 — May 2026",
    stack: ["React", "TypeScript", "ASP.NET Core", ".NET", "SQL Server", "GitHub Actions"],
    highlights: [
      "Built and maintained a business portal serving 10,000+ users — React (TypeScript) frontend with ASP.NET Core backend",
      "Integrated third-party payment processing APIs, improving checkout reliability and reducing failed transactions",
      "Delivered 15+ features end-to-end across full stack in 2-week Agile sprints",
      "Set up CI/CD pipelines via GitHub Actions, cutting release cycles from weekly to daily",
      "Conducted code reviews for a team of 5, catching a critical authentication vulnerability before production",
    ],
  },
  {
    num: "02",
    title: "E-Commerce Specialist / Frontend Developer",
    company: "Multon Developments OÜ",
    location: "Estonia",
    period: "Mar 2022 — Dec 2023",
    stack: ["Magento 2", "JavaScript", "HTML/CSS", "PHP", "MySQL"],
    highlights: [
      "Managed Magento 2 e-commerce platforms processing 500+ orders/month with 99.9% uptime",
      "Implemented responsive UI components and UX improvements that reduced mobile bounce rate by 18%",
      "Integrated payment gateways and third-party plugins, expanding checkout methods from 2 to 5",
      "Administered content and configuration across 3 client storefronts simultaneously",
    ],
  },
  {
    num: "03",
    title: "Full-Stack Developer",
    company: "OÜ Abtram29",
    location: "Estonia",
    period: "2021 — Mar 2022",
    stack: ["React.js", "Java", "JavaScript"],
    highlights: [
      "Developed React.js web applications from concept through to deployment for internal business tooling",
      "Built an OTP authentication system in Java, securing accounts for 2,000+ users",
      "Participated in the full feature lifecycle: requirements, coding, unit testing, and release",
    ],
  },
];

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <NodeNetwork
        className={styles.networkBg}
        nodeCount={40}
        connectionDistance={140}
        nodeColor="rgba(74,158,191,0.6)"
        lineColor="rgba(74,158,191,0.2)"
      />
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>03 / Experience</p>
          <h2 className={styles.title}>Where I&apos;ve shipped</h2>
        </div>
        <div className={styles.jobs}>
          {JOBS.map((job, idx) => (
            <article key={idx} className={styles.job}>
              <div className={styles.jobLeft}>
                <span className={styles.jobNum} aria-hidden="true">{job.num}</span>
                <div className={styles.jobMeta}>
                  <p className={styles.jobPeriod}>{job.period}</p>
                  <p className={styles.jobLocation}>{job.location}</p>
                </div>
              </div>
              <div className={styles.jobRight}>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobCompany}>{job.company}</p>
                <ul className={styles.highlights}>
                  {job.highlights.map((h, i) => (
                    <li key={i} className={styles.highlight}>{h}</li>
                  ))}
                </ul>
                <div className={styles.stack}>
                  {job.stack.map((s) => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
