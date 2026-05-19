

export default function App({ Component, pageProps }) {
  console.log("APP DZIAŁA");

  return (
    <>
      <Component {...pageProps} />
      
    </>
  );
}