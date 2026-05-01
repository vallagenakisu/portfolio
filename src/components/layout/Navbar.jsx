import { personalInfo, sectionNav } from '../../data/portfolioData'
import styles from './Navbar.module.css'

function Navbar({ activeSection }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand}>
          {personalInfo.name}
        </a>

        <input id="menu-toggle" className={styles.menuToggle} type="checkbox" />
        <label htmlFor="menu-toggle" className={styles.menuButton}>
          Menu
        </label>

        <nav className={styles.links} aria-label="Primary navigation">
          {sectionNav.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`${styles.link} ${isActive ? styles.active : ''}`.trim()}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
