import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="Flutter Developer, Software developer, React Native developer,FULL Developer,Freelancer"
        />
        <meta
          name="keywords"
          content="Flutter Developer, Software developer, React Native developer, FULL stack developer"
        />
      </Head>
      <body className="bg-blue-400 bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
