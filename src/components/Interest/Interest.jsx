import styles from "./Interest.module.scss"

const Interest = ({title, description}) => {
  return (
    <div className={styles.interest}>
      <h2>{title}</h2>
      {description.map((paragraph, id) => (
        <p key={`${title}-description-${id}`}>{paragraph}</p>
      ))}
    </div>
  )
}

export default Interest