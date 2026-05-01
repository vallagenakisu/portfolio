import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard'

const PAGE_SIZE = 1

function ProjectsCarousel({ projects }) {
  const [pageIndex, setPageIndex] = useState(0)
  const total = projects.length

  if (total === 0) return null

  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const safeIndex = pageIndex % pageCount
  const canNavigate = total > PAGE_SIZE

  const visibleProjects = useMemo(() => {
    if (total <= PAGE_SIZE) return projects

    const start = safeIndex * PAGE_SIZE
    const end = start + PAGE_SIZE

    if (end <= total) return projects.slice(start, end)

    const first = projects.slice(start)
    const rest = projects.slice(0, end - total)
    return [...first, ...rest]
  }, [projects, safeIndex, total])

  const handlePrev = () => {
    if (!canNavigate) return
    setPageIndex((previous) => (previous - 1 + pageCount) % pageCount)
  }

  const handleNext = () => {
    if (!canNavigate) return
    setPageIndex((previous) => (previous + 1) % pageCount)
  }

  const handleKeyDown = (event) => {
    if (!canNavigate) return
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault()
      handleNext()
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault()
      handlePrev()
    }
  }

  return (
    <div
      className="project-carousel"
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Project carousel"
      tabIndex={0}
    >
      <div className="project-controls" aria-hidden={!canNavigate}>
        <button
          type="button"
          className="project-control"
          onClick={handlePrev}
          aria-label="Show previous projects"
          disabled={!canNavigate}
        >
          <span aria-hidden="true">&larr;</span>
        </button>
        <button
          type="button"
          className="project-control"
          onClick={handleNext}
          aria-label="Show next projects"
          disabled={!canNavigate}
        >
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
      <div className="project-track">
        {visibleProjects.map((project) => (
          <ProjectCard key={`${project.title}-${project.period}`} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsCarousel
