import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}

          {process.env.NODE_ENV === 'production' ? (
            <>
              <script
                async
                src='https://www.googletagmanager.com/gtag/js?id=G-TPK48WPM2K'
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-TPK48WPM2K');
                  `,
                }}
              />
            </>
          ) : (
            <>
              <script
                async
                src='https://www.googletagmanager.com/gtag/js?id=G-DY9QW1H4XX'
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-DY9QW1H4XX');
                  `,
                }}
              />
            </>
          )}

          <link
            rel='preload'
            href='/fonts/fredoka-one.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='/favicon/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/favicon/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/favicon/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/favicon/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/favicon/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/favicon/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/favicon/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/favicon/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/favicon/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/favicon/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicon/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-TileImage'
            content='/favicon/ms-icon-144x144.png'
          />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
