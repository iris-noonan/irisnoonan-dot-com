import { useState } from "react"

//!--- Components
import Skills from '../Skills/Skills'

//!--- SVGs
import Github from '../svgs/Github'
import Open from '../svgs/Open'

import styles from "./Project.module.scss"

const Project = ({swap, name, logo, skills, description, image, github, live}) => {
  const [logoSrc, setLogoSrc] = useState('');
  import(`../../assets/logo-${logo}.svg`).then((module) => {
    setLogoSrc(module.default);
  });
  const [imageSrc, setImageSrc] = useState('');
  import(`../../assets/screenshot-${image}.png`).then((module) => {
    setImageSrc(module.default);
  });
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
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
          <button className={styles.button} onClick={() => openInNewTab(github)}>
            <div className={styles.buttonIcon}>
              <Github className={styles.buttonIcon} fill="#282f54" width="24" height="24" />
            </div>
            Github
          </button>
          <button className={styles.button} onClick={() => openInNewTab(live)}>
            <div className={styles.buttonIcon}>
              <Open fill="#282f54" width="24" height="24" />
            </div>
            Demo Site
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