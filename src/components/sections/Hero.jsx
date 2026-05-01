import { personalInfo } from '../../data/portfolioData'
import heroPortrait from '../../../assets/Turzo_CSE.jpg'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Portfolio</p>
          <h1>{personalInfo.name}</h1>
          <p className={styles.tagline}>{personalInfo.tagline}</p>

          <div className={styles.badges}>
            <span className={styles.badgeSuccess}>{personalInfo.availability}</span>
          </div>

          <div className={styles.ctaRow}>
            <a href="#projects" className={styles.primaryCta}>
              View Work
            </a>
            <a href="#contact" className={styles.ghostCta}>
              Contact Me
            </a>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <img
            className={styles.heroPortrait}
            src={heroPortrait}
            alt={`${personalInfo.name} portrait`}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
