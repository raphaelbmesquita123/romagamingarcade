import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './sticky-menu.module.scss'


export function StickyMenu () {
    const [checked, setChecked] = useState(false)
    
    return(
        <div className={styles.StickyMenu} style={{left: checked ? '0' : '-101vw'}}>
            <ul>
                <div>
                    <a href="#" onClick={() => setChecked(false)}><li>HOME</li></a>
                    <a href="#aboutUs" onClick={() => setChecked(false)}><li>ABOUT US</li></a>
                    <a href="#onlineGaming" onClick={() => setChecked(false)}><li>ONLINE GAMING</li></a>
                    <a href="#"><li>OUR GAMING ARCADE</li></a>
                </div>
                <div>
                    <a href="#"><li>NEW ARRIVALS</li></a>
                    <a href="#"><li>OUR GALLERY</li></a>
                    <a href="#contactUs" onClick={() => setChecked(false)}><li>CONTACT US</li></a>
                </div>

                <div className={styles.arrowMenuInside}>
                    <label htmlFor="burger-shower">
                        <FontAwesomeIcon icon={faChevronLeft} className={styles.arrowLeftRight}  onClick={() => setChecked(!checked)}/>
                    </label>
                </div>

                <div className={styles.arrowMenuOutSide}>
                    <label htmlFor="burger-shower">
                        <FontAwesomeIcon icon={faChevronRight} className={styles.arrowLeftRight}  onClick={() => setChecked(!checked)}/>
                    </label>
                </div>
            </ul>
        </div>

    )
}