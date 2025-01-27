import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCopyright}>
        <span>Copyright © 2025 Iris Noonan. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer;