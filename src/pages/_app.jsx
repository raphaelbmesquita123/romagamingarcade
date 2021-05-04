import '../styles/global.scss';

import { HeaderMenu } from '../components/header-menu/header-menu';
import { StickyMenu } from '../components/sticky-menu/sticky-menu'
import { FooterSection } from '../components/footer-section/footer-section'


function MyApp({ Component, pageProps }) {
  return (
      <div className="App">
        <section className="appHeader">
          <StickyMenu />
          <HeaderMenu />
        </section>
          <Component {...pageProps} />
        
        <section className="appFooter">
          <FooterSection />
        </section>
      </div>
  )
}

export default MyApp
