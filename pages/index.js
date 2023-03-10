import Head from "next/head";
import { Navbar } from "./components";
import { Header } from "./container";

export default function Home() {
  return (
    <>
      <Head>
        <title>RakaTrust</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <Navbar />
        <Header />
        {/* <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer /> */}
      </div>
    </>
  );
}
