import { SliderBanner } from '../components/slider-banner/slider-banner'


import styles from '../styles/Home.module.scss'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title> Roma Gaming Arcade </title> 
      </Head>

      <section className={styles.bodyContainer}>
        <SliderBanner />


    
      </section>


    </div>
  )
}
