import Head from "next/head";
export default function Custom404() {
    return (
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>Amo's Website</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="max-w-4xl mx-auto mt-12 antialiased">
                <div className="container mx-auto px-4">
                    <div className="font-mono flex space-x-2 justify-center items-center font-bold text-xs h-96">
                        <span className="align-middle">
                            404
                        </span>
                        <span className="align-middle text-gray-700 dark:text-gray-400">|</span>
                        <span className="align-middle">This page could not be found.</span>
                    </div>
                </div>
            </main>
        </div>
    )
}