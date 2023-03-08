import getConfig from "next/config";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const contextPath = getConfig().publicRuntimeConfig.contextPath;
  return (
    <Html lang="en">
      <Head>
        {" "}
        <link
          id="theme-css"
          href={`${contextPath}/themes/lara-light-indigo/theme.css`}
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
