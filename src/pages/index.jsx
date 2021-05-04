import { SliderBanner } from '../components/slider-banner/slider-banner'


import styles from '../styles/Home.module.scss'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title> Roma Gaming Arcade </title> 
      </Head>

      <section className={styles.HomeBodyContainer}>
        <SliderBanner />

        <section id="aboutUs" className={styles.HomeAboutUs}>

          <div className={styles.HomeAboutUsTitle}>
            <h1>ROMA GAMING ARCADE</h1>
          </div>

          <div className={styles.HomeAboutUsTextImage}>

            <div>
              <small>Roma Gaming Arcade is one of Limericks main gaming and amusement arcades. It is situated on one of the main streets in Limerick on William street. We have many slot, poker and gaming machines available to you. We also run a daily spin wheel where one lucky customer could win up to €100. We also have many slot and poker machines in the casino.
              <br></br>
              <br></br>
              We have been a permanent fixture at the top of William Street for many years and will be for more years to come. We offer loyalty cards to customers who are regular visitors. We are also on facebook so don’t forget to like us to keep up to date with news and special offers available at Roma Gaming Arcade.
              <br></br>
              <br></br>
              So why not drop in sometime when you are passing and feel the experience for yourself. 
              </small>
            </div>

            <div>
              <img src="./content/roma-casino-6.png" alt=""/>
            </div>

          </div>
        </section>

    
      </section>


    </div>
  )
}
