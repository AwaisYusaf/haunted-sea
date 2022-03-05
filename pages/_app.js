import '../styles/style.css';
import Head from 'next/head';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
    </Head>

    <div className="app">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
        </div>
        </> 
}

export default MyApp
