import NodeNetwork from "./NodeNetwork";
import styles from "./Experience.module.css";

const JOBS = [
  {
    num: "01",
    title: "Full-Stack Software Developer",
    company: "Net Group OÜ",
    location: "Tallinn, Estonia",
    period: "Jan 2024 — Feb 2026",
    stack: ["React", "TypeScript", "ASP.NET Core", ".NET", "SQL Server", "GitHub Actions"],
    highlights: [
      "Developed and maintained a customer-facing business portal using React (TypeScript) and ASP.NET Core, achieving sub-200ms API response times",
      "Designed and integrated third-party payment processing APIs (Stripe, Montonio), reducing failed transactions by standardising input validation and error handling flows",
      "Delivered 15+ product features end-to-end across full stack — from UI design to backend APIs to database migrations — in 2-week Agile sprints",
      "Set up and maintained CI/CD pipelines (GitHub Actions) for automated testing and deployment, cutting release cycle from weekly to daily",
      "Developed frontend features for a separate Next.js application, building reusable components and integrating with backend REST APIs",
      "Conducted code reviews for a team of 5 developers; identified and resolved critical security vulnerability in authentication flow",
      "Collaborated with product managers, designers, and QA engineers in daily standups, sprint planning, and retrospectives"
    ],
  },
  {
    num: "02",
    title: "E-Commerce Specialist / Frontend Developer",
    company: "Multon Developments OÜ",
    location: "Estonia",
    period: "Jun 2022 — Mar 2024",
    stack: ["Magento 2", "JavaScript", "HTML/CSS", "PHP", "MySQL"],
    highlights: [
      "Managed and enhanced Magento 2 e-commerce platforms processing 500+ orders per month, maintaining 99.9% uptime",
      "Implemented responsive frontend components and UI/UX improvements to enhance the mobile user experience",
      "Integrated third-party plugins and payment gateways, expanding available checkout methods",
      "Performed website administration, content management, and performance optimisation across 3 client storefronts",
    ],
  },
  {
    num: "03",
    title: "Full-Stack Developer",
    company: "OÜ Abtram29",
    location: "Estonia",
    period: "Jun 2021 — Oct 2021",
    stack: ["React.js", "Java", "JavaScript"],
    highlights: [
      "Built React.js web applications from concept to deployment for internal business tooling",
      "Developed a one-time password (OTP) authentication system in Java to enhance account security",
      "Participated in full feature development lifecycle: requirements gathering, coding, unit testing, and deployment",
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
          <h2 className={styles.title}>Where I&apos;ve worked</h2>
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
