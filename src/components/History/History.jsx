import styles from "./History.module.scss"

//!--- Components
import HistoryItem from '../HistoryItem/HistoryItem'

const History = ({history}) => {
  return (
    <div className={styles.history}>
      {history.map((historyItem, id) => (
        <HistoryItem
          company={historyItem.company}
          position={historyItem.position}
          startDate={historyItem.startDate}
          endDate={historyItem.endDate}
          description={historyItem.description}
          key={`historyItem-${id}`}
        />
      ))}
    </div>
  )
}

export default History;