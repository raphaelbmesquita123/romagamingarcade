import { SliderBanner } from '../components/slider-banner/slider-banner'
import { HeaderMenu } from '../components/header-menu/header-menu';
import { StickyMenu } from '../components/sticky-menu/sticky-menu'
import { FooterSection } from '../components/footer-section/footer-section'
import { GamingCard } from '../components/gaming-card/gaming-card'


import styles from '../styles/Home.module.scss'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title> Roma Gaming Arcade </title> 
      </Head>

      <section className={styles.HomeBodyContainer}>
        <StickyMenu />

        <section className={styles.HeadContainer}>
          <HeaderMenu />
        </section>
        <SliderBanner />
        
        <section id="aboutUs" className={styles.HomeAboutUs}>
          <div className={styles.HomeAboutUsTitle}>
            <h1>ROMA GAMING ARCADE</h1>
          </div>
          <div className={styles.HomeAboutUsTextImage}>
            <div>
              <img src="./content/roma-casino-6.png" alt=""/>
            </div>

            <div>
              <small>Roma Gaming Arcade is one of Limericks main gaming and amusement arcades. It is situated on one of the main streets in Limerick on William street. We have many slot, poker and gaming machines available to you. We also run a daily spin wheel where one lucky customer could win up to €100. We also have many slot and poker machines in the casino.
              <br></br>
              <br></br>
              We have been a permanent fixture at the top of William Street for many years and will be for more years to come. We offer loyalty cards to customers who are regular visitors. We are also on facebook so don’t forget to like us to keep up to date with news and special offers available at Roma Gaming Arcade.
              <br></br>
              <br></br>
              So why not drop in sometime when you are passing and feel the experience for yourself. 
              </small>
            </div>
          </div>
        </section>

        <section className={styles.onlineGaming}>
          <div className={styles.onlineGamingTitle}>
            <h1>ONLINE GAMING</h1>
          </div>
          <div className={styles.onlineGamingGames}>

            <GamingCard cardUrl="https://cdn02.cdn.amatic.com/gmsl/mphome/amarent/admiral.html?hash=freeplay&curr=EUR&lang=en&uselang=en&exit=https%3A%2F%2Fwww.multiwincasino.com%2Fen%2Fregister%26affId%3D179%26trackerId%3D3%0A&config=0021" srcImage="/online-gaming/online-gaming-1.png" textImage="Come aboard the famous HMS Victory and join Horatio Nelson in the legendary battle of Trafalgar"/>

            <GamingCard cardUrl="https://cdn02.cdn.amatic.com/gmsl/mphome/amarent/allwaysfruits.html?hash=freeplay&curr=EUR&lang=en&uselang=en&exit=https%3A%2F%2Fwww.multiwincasino.com%2Fen%2Fregister%26affId%3D179%26trackerId%3D3%0A&config=0021" srcImage="/online-gaming/online-gaming-2.png" textImage="Winning fruits everywhere!This exciting fruit game, is played over 5 reels and 3 rows and offers 243 winways."/>

            <GamingCard cardUrl="https://cdn02.cdn.amatic.com/gmsl/mphome/amarent/hotscatter.html?hash=freeplay&curr=EUR&lang=en&uselang=en&exit=https%3A%2F%2Fwww.multiwincasino.com%2Fen%2Fregister%26affId%3D179%26trackerId%3D3%0A&config=0021" srcImage="/online-gaming/online-gaming-3.png" textImage="It is getting HOT with Hot Scatter 3, 4 or 5 Star symbols in any position win 15 Bonus Spins and all Bonus wins are multiplied by 3"/>

            <GamingCard cardUrl="https://cdn02.cdn.amatic.com/gmsl/mphome/amarent/diamondcats.html?hash=freeplay&curr=EUR&lang=en&uselang=en&exit=https%3A%2F%2Fwww.multiwincasino.com%2Fen%2Fregister%26affId%3D179%26trackerId%3D3%0A&config=0021" srcImage="/online-gaming/online-gaming-4.png" textImage="Meow!
            This new 20-liner 5-reel game will dive you to the world of reaching cats. Three or more bonus symbols will trigger 10 bonus spins."/>

            <GamingCard cardUrl="https://cdn02.cdn.amatic.com/gmsl/mpp/amarent/hotfruits100.html?hash=freeplay&curr=EUR&lang=en&exit=https%3A%2F%2Fwww.multiwincasino.com%2Fen%2Fregister%26affId%3D179%26trackerId%3D3%0A&config=0021" srcImage="/online-gaming/online-gaming-5.png" textImage="Juicy wins are waiting for you.
            The ultimate fruit game has arrived in the form of Hot Fruits 100. It offers a total of 100 possible win lines"/>

            <GamingCard cardUrl="https://cdn02.cdn.amatic.com/gmsl/mpp/amarent/luckyjoker5.html?hash=freeplay&curr=EUR&lang=en&exit=https%3A%2F%2Fwww.multiwincasino.com%2Fen%2Fregister%26affId%3D179%26trackerId%3D3%0A&config=0021" srcImage="/online-gaming/online-gaming-6.png" textImage="The Lady Joker can charm you to your winnings!
            This 5 reel game with 50 winlines offers even more Wild card chances"/>

          </div>
        </section>

        <FooterSection />
      </section>


    </div>
  )
}
