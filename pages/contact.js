import Head from "next/head";
import Contact from "../components/Contact";

export default function MyContact(){
    return(
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>Amo's Website - Contact</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="bg-gray-100 dark:bg-gray-700 font-mono pb-60 antialiased">
                <Contact/>
            </main>
        </div>
    )
}