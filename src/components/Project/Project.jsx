import { useState } from "react"

//!--- Components
import Skills from '../Skills/Skills'

//!--- SVGs
import Github from '../svgs/Github'
import Linkedin from '../svgs/Linkedin'

import styles from "./Project.module.scss"

const Project = ({swap, name, logo, skills, description, image}) => {
  const [logoSrc, setLogoSrc] = useState('');
  import(`../../assets/logo-${logo}.svg`).then((module) => {
    setLogoSrc(module.default);
  });
  const [imageSrc, setImageSrc] = useState('');
  import(`../../assets/screenshot-${image}.png`).then((module) => {
    setImageSrc(module.default);
  });
  return (
    <div className={`${swap && styles.swap} ${styles.project}`}>
      <div className={styles.projectDetails}>
        <div className={styles.projectHeader}>
          <h2 className={styles.name}>{name}</h2>
          <img className={styles.logo} src={logoSrc} width="80" />
        </div>
        <Skills skills={skills} />
        <div className={styles.projectContent}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.projectButtons}>
          <button className={styles.button} href="https://github.com/iris-noonan/restonauts">
            <div className={styles.buttonIcon}>
              <Github className={styles.buttonIcon} fill="#282f54" width="24" height="24" />
            </div>
            Github
          </button>
          <button className={styles.button} href="https://github.com/iris-noonan/restonauts">
            <div className={styles.buttonIcon}>
              <Linkedin fill="#282f54" width="24" height="24" />
            </div>
            Deployed Site
          </button>
        </div>
      </div>
      <div className={styles.projectScreenshots}>
        <img className={styles.projectScreenshot} src={imageSrc} />
      </div>
    </div>
  )
}

export default Project