import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/feed/Feed";
import Header from "../components/header/Header";
import Login from '../components/login/Login'
import Sidebar from "../components/sidebar/Sidebar";
import Widgets from "../components/widgets/Widgets";

export default function Home({ session }) {
  
  if(!session) return <Login />
  // console.log(session)
  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props:{
      session,
    }
  }
  
}