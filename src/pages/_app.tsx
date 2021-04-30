import '../styles/global.scss';
import { ApplicationContextProvider } from '../contexts/application-context'


function MyApp({ Component, pageProps }) {
  return (
    <ApplicationContextProvider>
      <div className="bodyContainer">
          <Component {...pageProps} />
      </div>
    </ApplicationContextProvider>
  )
}

export default MyApp
