import { personalInfo } from '../../data/portfolioData'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright 2026 {personalInfo.name}. Built with React.
      </p>
    </footer>
  )
}

export default Footer
