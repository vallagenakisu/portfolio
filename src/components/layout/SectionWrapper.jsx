import styles from './SectionWrapper.module.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function SectionWrapper({ id, label, children }) {
  const sectionRef = useScrollAnimation()

  return (
    <section id={id} ref={sectionRef} className={`${styles.section} reveal-on-scroll`}>
      <div className={styles.labelCol}>
        <h2>{label}</h2>
      </div>
      <div className={styles.contentCol}>{children}</div>
    </section>
  )
}

export default SectionWrapper
