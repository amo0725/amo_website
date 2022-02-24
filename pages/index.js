import Head from 'next/head'
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
    <Head>
        <title>Amo's Website</title>
        <link rel="icon" href="/favicon.ico"/>
    </Head>

    <main className="max-w-4xl mx-auto mt-12 antialiased">
        <Main/>
    </main>
    </div>
  )
}