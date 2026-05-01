import SectionWrapper from '../layout/SectionWrapper'
import { projectsData } from '../../data/portfolioData'
import ProjectCard from '../ui/ProjectCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function ProjectItem({ project }) {
  const revealRef = useScrollAnimation()

  return (
    <div ref={revealRef} className="reveal-on-scroll project-list-item">
      <ProjectCard project={project} />
    </div>
  )
}

function Projects() {
  return (
    <SectionWrapper id="projects" label="Projects">
      <div className="projects-list">
        {projectsData.map((project) => (
          <ProjectItem key={`${project.title}-${project.period}`} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Projects
