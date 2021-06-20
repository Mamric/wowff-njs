import Head from "next/head";
import { TestimonyLister } from "../components/TestimonyLister";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-800 text-gray-400">
      <Head>
        <title>WoW Friend Finder</title>
        <meta
          name="description"
          content="The Most Powerful friend-finding tool for World of Warcraft"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TestimonyLister />
      <Footer />
    </div>
  );
}
