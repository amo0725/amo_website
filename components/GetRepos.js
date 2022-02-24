import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "../lib/getLatestRepos";

const GetRepos = ({ repositories }) =>{
    const [repos, setRepos] = useState([]);
  
    useEffect(async () => {
      // let latestRepos = await getLatestRepos(userData);
      // console.log("latestRepos", latestRepos);
      setRepos(repositories);
    }, []);
    return (
      <section className="bg-gray-300 mt-72 dark:bg-gray-900 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h1 className="text-6xl lg:text-9xl max-w-lg font-bold  text-gray-900 dark:text-gray-500 text-center lg:-mt-20  -mt-8 lg:text-left">
              Latest Code
            </h1>
  
            <a
              href={`https://github.com/amo0725`}
              className="my-10 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700 transition-colors hover:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:bg-yellow-500 focus:bg-yellow-400 focus:ring-4 focus:ring-yellow-500 dark:focus:ring-yellow-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right-square"
                stroke="4"
                strokeWidth="4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                />
              </svg>
              <p>View GitHub</p>
            </a>
          </div>
        </div>
        <div className="flex justify-self-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto gap-y-20 lg:pt-10 items-center px-4">
            {/* Single github Repo */}
    
            {repos &&
              repos.map((latestRepo, idx) => (
                <GithubRepoCard latestRepo={latestRepo} key="idx" />
              ))}
          </div>
        </div>
      </section>
    );
  }
  
  const GithubRepoCard = ({ latestRepo }) => {
    return (
      <div className="github-repo">
        <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
          {latestRepo.name}
        </h1>
        <p className="text-base font-normal my-4 text-gray-500">
          {latestRepo.description}
        </p>
        <a
          href={latestRepo.clone_url}
          className="font-semibold group flex flex-row space-x-2 w-full items-center"
        >
          <p className="transition-colors hover:text-yellow-400 dark:hover:text-yellow-500">View Repository </p>
          <div className="transform  group-hover:translate-x-2 transition duration-300">
            &rarr;
          </div>
        </a>
      </div>
    );
  };

  export default GetRepos;