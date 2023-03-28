import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        <meta property="og:title" content="Carlos Valladarez Portfolio" key="title" />
        <meta
          name="description"
          content="FrontEnd Developer specialized in React and Next.js with skills in JavaScript, SQL and NoSQL databases, and knowledge in Java, Python, and PHP. Currently pursuing a degree in Software "
        />
        <link rel="shortcut icon" href="https://i.imgur.com/FjqhO9z.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
