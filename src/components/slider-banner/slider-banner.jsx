import styles from './slider-banner.module.scss'
import { useState, useEffect } from 'react'

export function SliderBanner () {
  const [carousel, setCarousel] = useState(0)
  
  useEffect (() => {
    const interval = setInterval (() => {
      setCarousel(carousel => carousel + 100)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  if(carousel >= 400){
    setCarousel(0)
  }

    return(
      <div className={styles.carouselContainer}>
        <div className={styles.carouselImage}>
          <img style={{ right: `${carousel}%`}} src="./top-slider-imagens/roma-min-1.jpg" alt="roma-arcade"/>
          <img style={{ right: `${carousel}%`}} src="./top-slider-imagens/roma-min-2.jpg" alt="roma-arcade"/>
          <img style={{ right: `${carousel}%`}} src="./top-slider-imagens/roma-min-3.jpg" alt="roma-arcade"/>
          <img style={{ right: `${carousel}%`}} src="./top-slider-imagens/roma-min-4.jpg" alt="roma-arcade"/>
        </div>
      </div>
    )
}