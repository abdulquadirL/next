import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        Lana creative thouughts agency All right reserved.
      </div>
       
    </div>
  )
}

export default Footer