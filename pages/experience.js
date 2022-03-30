import Head from "next/head";
import Header from '../components/Header'
import Experience from "../components/Experience";

export default function MyExperience() {
    return (
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>Amo's Website - Experience</title>
                <Header/>
            </Head>

            <main className="bg-gray-100 dark:bg-gray-700 antialiased">
                <Experience/>
            </main>
        </div>
    )
}