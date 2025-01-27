// src/App.jsx

//!--- SCSS
import styles from "./App.module.scss"

//!--- Components
import Header from './components/Header/Header';
import Biography from './components/Biography/Biography';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import History from './components/History/History';
import Interests from './components/Interests/Interests';
import Signoff from './components/Signoff/Signoff';
import Footer from './components/Footer/Footer';

//!--- Data
import { projects } from './data/projects';
import { skills } from './data/skills';
import { experience }  from './data/experience';
import { education }  from './data/education';
import { interests }  from './data/interests';

//!--- Render
const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appContent}>
        <h2 id="about" className={styles.appTitle}>About</h2>
        <Biography />
        <h2 id="skills" className={styles.appTitle}>Skills</h2>
        <Skills skills={skills} showGrid />
        <h2 id="projects" className={styles.appTitle}>Projects</h2>
        <Projects projects={projects} />
        <h2 id="experience" className={styles.appTitle}>Experience</h2>
        <History history={experience} />
        <h2 id="education" className={styles.appTitle}>Education</h2>
        <History history={education} />
        <h2 id="interest" className={styles.appTitle}>Interest</h2>
        <Interests interests={interests} />
        <h2 id="contact" className={styles.appTitle}>Contact</h2>
        <Signoff />
      </div>
      <Footer />
    </div>
  );
};

export default App;
