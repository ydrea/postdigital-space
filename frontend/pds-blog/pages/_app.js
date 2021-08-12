import '../styles/index.scss'
import Nav from '../components/Nav'
function MyApp({ Component, pageProps }) {
  return (
    <>
  <Nav />
<div className="container" >
  <Component {...pageProps} />
  </div>
  </>
  )
}

export default MyApp
