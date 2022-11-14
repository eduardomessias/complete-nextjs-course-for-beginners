import '../styles/globals.css'
import NavBar from "./posts/navbar"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
