import SectionWrapper from '../layout/SectionWrapper'
import { skillsData } from '../../data/portfolioData'

function Skills() {
  return (
    <SectionWrapper id="skills" label="Skills">
      <div className="group-list">
        {skillsData.map((group) => (
          <article key={group.category} className="skill-group">
            <p className="mono-label skill-category">{group.category}</p>
            <div className="tag-wrap">
              {group.items.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills
