function ProjectCard({ project }) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      aria-label={`${project.title} on GitHub`}
    >
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="body-copy">{project.description}</p>
      </div>

      <div className="tag-wrap project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="skill-tag">
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

export default ProjectCard
