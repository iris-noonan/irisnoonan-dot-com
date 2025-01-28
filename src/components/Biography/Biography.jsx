import styles from "./Biography.module.scss"

const Biography = () => {
  return (
    <div className={styles.biography}>
      <div className={styles.biographyCopy}>
        <p>Hello, I'm Iris, I'm a junior software engineer.</p>
      </div>
    </div>
  )
}

export default Biography;