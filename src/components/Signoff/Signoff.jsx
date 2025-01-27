import styles from "./Signoff.module.scss"
import variables from '../../variables.module.scss';

//!--- SVGs
import Email from '../svgs/Email'
import Linkedin from '../svgs/Linkedin'
import Github from '../svgs/Github'
import socialEmail from '../../assets/social-email.svg';
import socialLinkedin from '../../assets/social-linkedin.svg';
import socialGithub from '../../assets/social-github.svg';

import me from '../../assets/me.jpg';

const Signoff = () => {
  console.log(variables)
  return (
    <div className={styles.signoff}>
      <div className={styles.signoffContent}>
        <img className={styles.signoffMe} src={me} width="140" height="140" />
        <div>
          <p className={styles.signoffCopy}>
            After over 10 years in the food industry, I’m seeking a career change into tech. I’ve completed a bootcamp Software Engineering course to allow me to learn the latest methodologies in the field. Having strong management and organisational skills has allowed me to learn a new area and research skills have supported me on the learning journey and problem solving.
          </p>
          <a className={styles.signoffSocial} href="mailto:morais.iris@gmail.com">
            <Email className={styles.buttonIcon} fill={variables.pink} width="36" height="36" />
          </a>
          <a className={styles.signoffSocial} href="https://www.linkedin.com/in/iris-morais-noonan/" target="_blank">
            <Linkedin className={styles.buttonIcon} fill={variables.pink} width="36" height="36" />
          </a>
          <a className={styles.signoffSocial} href="https://github.com/iris-noonan/irisnoonan-dot-com/" target="_blank">
            <Github className={styles.buttonIcon} fill={variables.pink} width="36" height="36" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Signoff;