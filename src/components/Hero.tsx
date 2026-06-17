"use client";
import NodeNetwork from "./NodeNetwork";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <NodeNetwork
        nodeCount={70}
        connectionDistance={170}
        nodeColor="rgba(255,255,255,0.9)"
        lineColor="rgba(255,255,255,0.15)"
      />

      {/* Nav */}
      <nav className={`${styles.nav} fade-up`}>
        <span className={styles.logo}>HM</span>
        <ul className={styles.navLinks}>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:hendrik.metsallik@gmail.com" className={styles.navCta}>
          Contact me
        </a>
      </nav>

      {/* Main content */}
      <div className={styles.content}>
        <p className={`${styles.eyebrow} fade-up fade-up-1`}>
          Available now · Open to opportunities across Australia
        </p>

        <h1 className={styles.headline}>
          <span className={`${styles.lineFull} fade-up fade-up-2`}>FULL</span>
          <span className={`${styles.slash} fade-up fade-up-3`}>/</span>
          <span className={`${styles.lineStack} fade-up fade-up-3`}>STACK</span>
          <span className={`${styles.lineDev} fade-up fade-up-4`}>
            DEVELOPER
            <span className={styles.cursor} aria-hidden="true">_</span>
          </span>
        </h1>

        <p className={`${styles.sub} fade-up fade-up-4`}>
          React · TypeScript · .NET · 4+ years shipping production software
        </p>

        <div className={`${styles.actions} fade-up fade-up-5`}>
          <a href="#experience" className={styles.btnPrimary}>View my work</a>
          <a href="/Hendrik_Metsallik_CV.pdf" className={styles.btnGhost} download="Hendrik_Metsallik_CV.pdf">
            Download CV
          </a>
        </div>
      </div>

      <div className={styles.cornerLabel} aria-hidden="true">
        <span>EST · 2018</span>
        <span>4+ YRS XP</span>
      </div>
    </section>
  );
}
