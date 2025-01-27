import styles from "./Header.module.scss"

import iris from '../../assets/iris.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <img className={styles.headerLogoImage} src={iris} width="80" />
      </div>
      <ul className={styles.headerMenu}>
        <li className={styles.headerMenuItem}>
          <a href="#about">
            About
          </a>
        </li>
        <li className={styles.headerMenuItem}>
          <a href="#skills">
            Skills
          </a>
        </li>
        <li className={styles.headerMenuItem}>
          <a href="#projects">
            Projects
          </a>
        </li>
        <li className={styles.headerMenuItem}>
          <a href="#experience">
            Experience
          </a>
        </li>
        <li className={styles.headerMenuItem}>
          <a href="#education">
            Education
          </a>
        </li>
        <li className={styles.headerMenuItem}>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header;