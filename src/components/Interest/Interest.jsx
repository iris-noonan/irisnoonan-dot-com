import styles from "./Interest.module.scss"

//!--- Components
import Book from '../Book/Book'

const Interest = ({emoji, title, description, books}) => {
  return (
    <div className={styles.interest}>
      <h2>{title}</h2>
      <div className={styles.interestEmoji}>{emoji}</div>
      {books.map((book, id) => (
        <Book book={book} key={`${title}-book-${id}`} />
      ))}
      {description.map((paragraph, id) => (
        <p key={`${title}-description-${id}`}>{paragraph}</p>
      ))}
    </div>
  )
}

export default Interest