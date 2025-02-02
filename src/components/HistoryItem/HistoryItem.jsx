import styles from "./HistoryItem.module.scss"

const HistoryItem = ({company, position, startDate, endDate, description}) => {
  return (
    <div className={styles.historyItem}>
      <div className={styles.historyItemContent}>
        <div className={styles.historyItemTitle}>
          <h2 className={styles.historyItemTitleCompany}>{company}</h2>
          <div className={styles.historyItemDateRange}>
            {startDate} → {endDate}
          </div>
        </div>
        <h3 className={styles.historyItemPosition}>{position}</h3>
        <div className={styles.historyItemPoint}>
          <ul className={styles.historyItemDescriptions}>
            {description.map((bullet, id) => (
              <li key={`history-item-${id}`}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HistoryItem