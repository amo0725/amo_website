import Head from 'next/head'
import About from '../components/About'

export default function AboutMe() {
    return (
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>Amo's Website - About</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="bg-gray-100 dark:bg-gray-700 antialiased">
                <About/>
            </main>
        </div>
    )
}

