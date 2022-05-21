import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}

export default Document