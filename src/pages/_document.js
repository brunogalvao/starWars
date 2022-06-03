import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>
            <body style={{
                background: "url('/images/img-bg.png') repeat center center",
                backgroundSize: "100vh",
            }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}