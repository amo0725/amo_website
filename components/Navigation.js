import Link from "next/link"
import React from "react"
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-gray-100 font-mono md:py-6 dark:bg-slate-700">
            <div className="container px-4 mx-auto lg:max-w-4xl flex flex-wrap md:space-x-4 items-center justify-between">
                <div className="flex flex-col">
                    <Link href="/">
                        <a>
                            <h1 className="font-semibold text-xl tracking-wider text-gray-900 dark:text-white">
                                Amo Feng
                            </h1>
                            <p className="text-base font-extralight text-gray-600 dark:text-gray-200">
                                Full-Stack Developer
                            </p>
                        </a>
                    </Link>
                </div>
                <div className="md:space-x-4 lg:space-x-8 hidden md:block">
                    <Link href="/">
                        <a className="text-base text-gray-600 font-normal dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500">
                            Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="text-base text-gray-600 font-normal dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500">
                            About
                        </a>
                    </Link>
                    <Link href="/experience">
                        <a className="text-base text-gray-600 font-normal dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500">
                            Experience
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-base text-gray-600 font-normal dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500">
                            Contact
                        </a>
                    </Link>
                </div>
                <div className="ml-auto space-x-4 flex items-center justify-between">
                    <div className="space-x-4 flex flex-row">
                        <a
                            href="https://github.com/amo0725/"
                            className="text-base font-normal text-gray-600 dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-github h-5 w-5"
                                viewBox="0 0 24 24"
                            >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/amo-feng/"
                            className="text-base font-normal text-gray-600 dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-linkedin h-5 w-5"
                                viewBox="0 0 16 16"
                            >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:amo880725@gmail.com"
                            className="text-base font-normal text-gray-600 dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500"
                        >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor"
                            className="bi bi-email h-5 w-5"
                            viewBox="0 0 24 24"
                        >
                        <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
                        </svg>
                        </a>
                    </div>
                    <div className="w-2 md:w-4"></div>
                    <ThemeSwitch/>
                </div>
            </div>
            <div className="flex flex-wrap justify-between container px-4 mx-auto space-x-2 md:space-x-8 md:hidden mt-4">
                <div>
                    <Link href="/">
                        <a className="truncate text-base text-gray-600 font-normal dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500">
                            Home
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/about">
                        <a className="truncate text-base text-gray-600 font-normal dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500">
                            About
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/experience">
                        <a className="truncate text-base text-gray-600 font-normal dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500">
                            Experience
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/contact">
                        <a className="truncate text-base text-gray-600 font-normal dark:text-gray-200 transition-colors hover:text-yellow-400 dark:hover:text-yellow-500">
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;