import styles from './gaming-card.styles.module.scss'
import Image from 'next/image'

export function GamingCard (props) {
    return(
        <a href={props.cardUrl} target="__blink" className={styles.GamingCard}>
              <Image width={210} height={180} src={props.srcImage} alt="roma-arcade"/>
              <small>{props.textImage}</small>
        </a>
    )
}