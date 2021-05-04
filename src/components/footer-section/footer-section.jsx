import styles from './footer-section.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons' 

export function FooterSection () {
    return(
        <div className={styles.footerSection}>
            <div className={styles.footerInfo}>
                <div className={styles.footerAboutUs}>
                    <h2>About us</h2>
                    <small>Roma Gaming Arcade is one of Limericks main gaming and amusements. It is situated on one of the main streets in Limerick on William street. We have many slot, poker and gaming machines available to you. We also run a daily spin wheel 5 times a day where one lucky customer could win up to €100. So why not pop in and have a go at the slots!</small>
                </div>
                
                <div className={styles.footerFallowContact}>
                    <div>
                        <h2>Fallow us</h2>
                        <FontAwesomeIcon icon={faPenFancy} className={styles.footerIcon}/>
                        <FontAwesomeIcon icon={faPenFancy} className={styles.footerIcon}/>
                        <FontAwesomeIcon icon={faPenFancy} className={styles.footerIcon}/>
                        
                    </div>
                    <div>
                        <h2>Contact us</h2>
                        <small>Roma Gaming Arcade
                        Contact: 061 596864 
                        39 William Street 
                        Limerick City</small>
                    </div>
                </div>
            </div>

            <div className={styles.footerDeveloper}>

                <small>Developed by:</small> <a href="https://www.linkedin.com/in/raphael-mesquita-135996139/" target="__blank">Raphael Mesquita</a>

            </div>
        </div>
    )
}