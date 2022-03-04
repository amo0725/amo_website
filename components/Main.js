import React from "react"
import Image from "next/image"
import Link from "next/link"
import profile from "../public/profile.jpg"

const Main = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="font-mono lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-6">
                    <p className="font-bold text-lg">THIS IS ME</p>
                    <h1 className="text-6xl font-bold text-gray-900 lg:text-8xl dark:text-white">
                        <p className="leading-relaxed">
                            Amo Feng
                        </p>
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-gray-100">
                        <p className="mb-4 text-lg">
                            I'm a Full-Stack Developer with a bachelor of science in Computer Science & Information Engineering from <a href="https://www.tku.edu.tw/" className="rounded-md px-2 py-0.5 bg-yellow-400 dark:bg-yellow-500 font-semibold text-white">Tamkang University</a>.
                            Currently working at <a href="https://www.idct.com.tw" className="rounded-md px-2 py-0.5 bg-yellow-400 dark:bg-yellow-500 font-semibold text-white">IDCtech</a> in Taiwan.
                        </p>
                    </div>
                    <br/>
                    <Link href="/contact">
                        <button type="button" 
                                className="text-gray-900 bg-gray-100 border border-gray-300 hover:bg-yellow-400 hover:border-yellow-500 
                                            focus:ring-4 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
                                            dark:bg-white dark:text-gray-900 dark:border-gray-600 dark:hover:bg-yellow-500 dark:hover:border-yellow-600 dark:focus:ring-yellow-600"
                        >Contact Me</button>
                    </Link>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={300}
                        height={300}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default Main;