import SectionWrapper from '../layout/SectionWrapper'
import { workData } from '../../data/portfolioData'

function Experience() {
  return (
    <SectionWrapper id="work" label="Experience">
      {workData.map((work) => (
        <article key={`${work.company}-${work.period}`} className="timeline-card experience-card">
          <div className="experience-logo-column">
            <img
              src={work.companyLogo}
              alt={`${work.company} logo`}
              className="experience-logo"
              loading="lazy"
            />
          </div>

          <div className="experience-content-column">
            <div className="timeline-top">
              <div>
                <h3 className="experience-title">{work.title}</h3>
                <p className="mono-label">{work.company}</p>
              </div>
              {work.isCurrent ? <span className="status-current">Current</span> : null}
            </div>
            <p className="meta-line">
              {work.period} | {work.location}
            </p>
            <ul className="arrow-list">
              {work.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </SectionWrapper>
  )
}

export default Experience
