import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './sticky-menu.module.scss'


export function StickyMenu () {
    const [checked, setChecked] = useState(false)
    
    return(
        <div className={styles.StickyMenu} style={{left: checked ? '0' : '-100vw'}}>
            <ul>
                <div>
                    <a href="#"><li>HOME</li></a>
                    <a href="#aboutUs" onClick={() => setChecked(false)}><li>ABOUT US</li></a>
                    <a href="#"><li>ONLINE GAMING</li></a>
                    <a href="#"><li>OUR GAMING ARCADE</li></a>
                </div>
                <div>
                    <a href="#"><li>NEW ARRIVALS</li></a>
                    <a href="#"><li>OUR GALLERY</li></a>
                    <a href="#"><li>CONTACT US</li></a>
                </div>

                <div className={styles.arrowMenuInside}>
                    <input type="checkbox" id="burger-shower" onClick={() => setChecked(!checked)}/>

                    <label htmlFor="burger-shower">
                        <FontAwesomeIcon icon={faChevronLeft} className={styles.arrowLeftRight}/>
                    </label>
                </div>

                <div className={styles.arrowMenuOutSide}>
                    <input type="checkbox" id="burger-shower" onClick={() => setChecked(!checked)}/>
                    <label htmlFor="burger-shower">
                        <FontAwesomeIcon icon={faChevronRight} className={styles.arrowLeftRight}/>
                    </label>
                </div>
            </ul>
        </div>

    )
}