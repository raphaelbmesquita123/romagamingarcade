import styles from './header-menu.module.scss'

export function HeaderMenu () {
    return(
        <div className={styles.headContainer}>
          <img  className={styles.headLogo} src="https://s-fe.grandx.com/ads/img/162/logo.png" alt="roma-arcade"/>
        </div>
    )
}