import { useEffect, useRef, useState } from 'react'
import SectionWrapper from '../layout/SectionWrapper'
import { aboutStats, personalInfo } from '../../data/portfolioData'

function About() {
  const firstStatRef = useRef(null)
  const [count, setCount] = useState(0)

  const firstStatTarget = Number.parseInt(aboutStats[0]?.value ?? '0', 10)

  useEffect(() => {
    const node = firstStatRef.current
    if (!node || !firstStatTarget) return undefined

    let rafId = 0
    let hasAnimated = false

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting || hasAnimated) return

        hasAnimated = true
        const duration = 1400
        const start = window.performance.now()

        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const nextValue = Math.floor(progress * firstStatTarget)
          setCount(nextValue)

          if (progress < 1) {
            rafId = window.requestAnimationFrame(step)
          }
        }

        rafId = window.requestAnimationFrame(step)
        observer.disconnect()
      },
      { threshold: 0.4 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [firstStatTarget])

  return (
    <SectionWrapper id="about" label="About">
      <div className="stack-md">
        {personalInfo.about.map((line) => (
          <p key={line} className="body-copy">
            {line}
          </p>
        ))}
      </div>
{/* 
      <div className="stat-grid">
        {aboutStats.map((item, index) => (
          <article
            key={item.label}
            className="stat-pill"
            ref={index === 0 ? firstStatRef : undefined}
          >
            <p className="stat-value">
              {index === 0 ? `${count}+` : item.value}
            </p>
            <p className="stat-label">{item.label}</p>
          </article>
        ))}
      </div> */}
    </SectionWrapper>
  )
}

export default About
