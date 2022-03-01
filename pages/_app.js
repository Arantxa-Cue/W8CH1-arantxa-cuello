import "../styles/globals.css";
import Layout from "./components/layout";
import Navigation from "./navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
