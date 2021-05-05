import styles from './header-menu.module.scss'
import Image from 'next/image'

export function HeaderMenu () {
    return(
        <div className={styles.headContainer}>
          <Image width={300} height={100} className={styles.headLogo} src="/roma-arcade-logos/roma-arcade.png" alt="roma-arcade"/>
        </div>
    )
}