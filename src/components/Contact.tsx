import NodeNetwork from "./NodeNetwork";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <NodeNetwork
        nodeCount={50}
        connectionDistance={150}
        nodeColor="rgba(255,255,255,0.7)"
        lineColor="rgba(255,255,255,0.1)"
      />
      <div className={styles.inner}>
        <p className={styles.label}>04 / Contact</p>
        <h2 className={styles.title}>
          Let&apos;s build
          <br />
          <span className={styles.titleAccent}>something.</span>
        </h2>
        <p className={styles.sub}>
          Actively looking for mid-level full-stack roles in Australia.
          On a 417 Working Holiday Visa — available to start immediately,
          open to 482 sponsorship.
        </p>
        <div className={styles.actions}>
          <a href="mailto:hendrik.metsallik@gmail.com" className={styles.emailBtn}>
            hendrik.metsallik@gmail.com
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.links}>
          <a href="https://linkedin.com/in/hendrik-metsallik-8641a8235" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn ↗</a>
          <a href="https://github.com/hendrik-metsallik" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub ↗</a>
          <a href="tel:+61493540525" className={styles.link}>+61 493 540 525</a>
        </div>
      </div>
      <footer className={styles.footer}>
        <span className={styles.footerName}>Hendrik Metsallik</span>
        <span className={styles.footerNote}>Built with Next.js · Sydney, Australia · {new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
