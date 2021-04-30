import { SliderBanner } from '../components/slider-banner/slider-banner'

import styles from '../styles/Home.module.scss'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
        <title> Roma Gaming Arcade </title> 
      </Head>

      <body className={styles.bodyContainer}>

        <div className={styles.headContainer}>
          <nav>
            <ul>
              <a href="#"><li>HOME</li></a>
              <a href="#"><li>ABOUT US</li></a>
              <a href="#"><li>ONLINE GAMING</li></a>
              <a href="#"><li>OUR GAMING ARCADE</li></a>
              <a href="#"><li>NEW ARRIVALS</li></a>
              <a href="#"><li>OUR GALLERY</li></a>
              <a href="#"><li>CONTACT US</li></a>
            </ul>
          </nav>

          <h1>ROMA</h1>
        </div>
 
        <div className={styles.sliderContainer}>
          <SliderBanner />
        </div>
    
      </body>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </div>
  )
}
