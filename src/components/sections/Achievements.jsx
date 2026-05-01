import SectionWrapper from '../layout/SectionWrapper'
import { achievementsData } from '../../data/portfolioData'

function Achievements() {
  return (
    <SectionWrapper id="achievements" label="Achievements">
      <ul className="dot-list">
        {achievementsData.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </SectionWrapper>
  )
}

export default Achievements
