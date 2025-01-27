import { useState } from "react"

import styles from "./Skill.module.scss"

const Skill = ({skill, small}) => {
  const [logoSrc, setLogoSrc] = useState('');
  import(`../../assets/skill-${skill.toLowerCase()}.svg`).then((module) => {
    setLogoSrc(module.default);
  });
  return (
    <div className={`${styles.skill} ${small ? styles.small : ''}`}>
      <img className={styles.skillLogo} src={logoSrc} width={small ? 22 : 42} />
      <span className={styles.skillName}>{skill}</span>
    </div>
  )
}

export default Skill