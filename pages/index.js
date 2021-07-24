import Head from "next/head";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}
