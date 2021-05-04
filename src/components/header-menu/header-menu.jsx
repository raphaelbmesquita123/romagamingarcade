import styles from './header-menu.module.scss'

export function HeaderMenu () {
    return(
        <div className={styles.headContainer}>
          <img  className={styles.headLogo} src="./roma-arcade-logos/roma-arcade.png" alt="roma-arcade"/>
        </div>
    )
}