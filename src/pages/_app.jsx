import '../styles/global.scss';
import { ApplicationContextProvider } from '../contexts/application-context'
import { HeaderMenu } from '../components/header-menu/header-menu';
import { StickyMenu } from '../components/sticky-menu/sticky-menu'


function MyApp({ Component, pageProps }) {
  return (
    <ApplicationContextProvider>
      <div className="App">
        <section className="appHeader">
          <StickyMenu />
          <HeaderMenu />
        </section>
          <Component {...pageProps} />

      </div>
    </ApplicationContextProvider>
  )
}

export default MyApp
