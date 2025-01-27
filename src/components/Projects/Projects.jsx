import styles from "./Projects.module.scss"

//!--- Components
import Project from '../Project/Project'

const Projects = ({projects}) => {
  return (
    <div className={styles.projects}>
      {projects.map((project, id) => (
        <Project
          swap={id % 2 ? 'swap' : ''}
          name={project.name}
          logo={project.logo}
          skills={project.skills}
          description={project.description}
          image={project.image}
          key={`project-${id}`}
        />
      ))}
    </div>
  )
}

export default Projects;