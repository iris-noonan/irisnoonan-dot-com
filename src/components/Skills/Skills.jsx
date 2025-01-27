import styles from "./Skills.module.scss"

//!--- Components
import Skill from '../Skill/Skill'

const Skills = ({skills, showGrid}) => {
  return (
    <div className={`${styles.skills} ${showGrid ? styles.grid : styles.line}`}>
      {skills.map((skill, id) => (
        <Skill skill={skill} small={!showGrid} key={`skill-${id}`} />
      ))}
    </div>
  )
}

export default Skills;