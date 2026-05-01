import SectionWrapper from '../layout/SectionWrapper'
import { educationData } from '../../data/portfolioData'

function Education() {
  return (
    <SectionWrapper id="education" label="Education">
      {educationData.map((education) => (
        <article
          key={`${education.institution}-${education.period}`}
          className="timeline-card"
        >
          <h3>{education.degree}</h3>
          <p className="mono-label">{education.institution}</p>
          <p className="meta-line">
            {education.period} | {education.location}
          </p>
        </article>
      ))}
    </SectionWrapper>
  )
}

export default Education
