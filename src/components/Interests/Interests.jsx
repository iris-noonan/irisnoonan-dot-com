import styles from "./Interests.module.scss"

//!--- Components
import Interest from '../Interest/Interest'

const Interests = ({interests}) => {
  return (
    <div className={styles.interests}>
      {interests.map((interest, id) => (
        <Interest emoji={interest.emoji} title={interest.title} description={interest.description} books={[]} key={`interest-${id}`} />
      ))}
    </div>
  )
}

export default Interests;