import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useRouter } from "next/router";
import { useAmp } from "next/amp";
export const config = { amp: "hybrid" };
export default function Document() {
  const isAmp = useAmp();
  let isDealer;
  const router = useRouter();
  if (typeof window !== "undefined") {
    isDealer = localStorage.getItem("isDealer");
  }

  console.log(isDealer);
  console.log(typeof isDealer);
  return (
    <Html>
      <Head>
        {/* <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                /> */}

        {isAmp ? (
          " "
        ) : (
          <>
            {/* <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                crossOrigin="anonymous"
            /> */}
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0&display=swap"
            />
            {/* <!-- Font Awesome Icons --> */}
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            {/* <!-- Google fonts --> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            {/* <link
                     href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                 /> */}

            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
              rel="stylesheet"
            ></link>
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
              async
            ></script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins:wght@400;500;600;700&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {/* {
                isDealer === "true" ?  <>
                <link rel="icon" href="/b2b_scott_favicon.ico" />
                </> : <>
                <link rel="icon" href="/sns_favicon.ico" />
                </>
                } */}
        {/* <link rel="icon" href="/sns_favicon.ico" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
