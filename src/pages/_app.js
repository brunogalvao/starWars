import Head from "next/head"
import "../styles/global.scss"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head
                lang="pt-BR"></Head>
                
            <Component {...pageProps} />
        </>
    )
  }
  
export default MyApp
