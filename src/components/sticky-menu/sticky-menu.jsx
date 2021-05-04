import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './sticky-menu.module.scss'


export function StickyMenu () {
    const [checked, setChecked] = useState(false)
    
    return(
        <nav className={styles.StickyMenu} style={{left: checked ? '0px' : '-190px'}}>
            <ul>
              <a href="#"><li>HOME</li></a>
              <a href="#"><li>ABOUT US</li></a>
              <a href="#"><li>ONLINE GAMING</li></a>
              <a href="#"><li>OUR GAMING ARCADE</li></a>
              <a href="#"><li>NEW ARRIVALS</li></a>
              <a href="#"><li>OUR GALLERY</li></a>
              <a href="#"><li>CONTACT US</li></a>
            </ul>

            <div className={styles.arrowMenu}>
                <input type="checkbox" id="burger-shower" onClick={() => setChecked(!checked)}/>

                <label htmlFor="burger-shower">
                    {
                        checked ? <FontAwesomeIcon icon={faChevronLeft} className={styles.arrowDownUp}/> : <FontAwesomeIcon icon={faChevronRight} className={styles.arrowDownUp}/>
                    }

                </label>
            </div>

        </nav>

    )
}