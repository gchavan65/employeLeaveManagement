import '../styles/globals.css'
import Layout from './Componets/Layout'
import {Provider} from "react-redux"
import Store from './Redux/Store'

function MyApp({ Component, pageProps }) {
  return(
    <>
<Provider store={Store} >
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </Provider>  
    </>
  )
}

export default MyApp
