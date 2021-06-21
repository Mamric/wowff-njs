import Head from "next/head";
import { TestimonyLister } from "../components/TestimonyLister";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="h-100 bg-gray-800">
      <div className="flex flex-col bg-gray-800 text-gray-400 h-screen">
        <Head>
          <title>WoW Friend Finder</title>
          <meta
            name="description"
            content="The Most Powerful friend-finding tool for World of Warcraft"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="flex-grow">
          <TestimonyLister />
        </div>
        <Footer />
      </div>
    </div>
  );
}
