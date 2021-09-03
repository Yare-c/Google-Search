import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import loupe from '../public/loupe.svg'
import google from '../public/search.svg'
import weather from '../public/cloudy.svg'
import dollar from '../public/dollar.svg'
import inbox from '../public/mail-inbox-app.svg'
import arrow from '../public/arrow-down-sign-to-navigate.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={google} width={40} height={40} alr={'None'} />
        <h1>Google Search</h1>
      </div>
      <div className={styles.input}>
        <input
          className={styles.placeEnter}
          placeholder="Search"
          type="text"
        />
        <button className={styles.go}>Search</button>
        <div className={styles.widgets}>
          <div className={styles.widget}>
            <Image src={weather} width={35} height={35} />
            <h3 className={styles.inside_img}>+47 °C</h3>
          </div>
          <div className={styles.widget}>
            <Image src={dollar} width={35} height={35} />
            <h3 className={styles.inside_img}>74,5 </h3>
          </div>
          <div className={styles.widget}>
            <Image src={inbox} width={35} height={35} />
            <h3 className={styles.inside_img}>+ 128</h3>
          </div>
        </div>
        <div className={styles.news}>
          <a href="">Open Google News</a>
          <Image src={arrow} width={20} height={20} />
        </div>
        
      </div>
      <h5>Google Inc.</h5>
    </div>
  )
}
