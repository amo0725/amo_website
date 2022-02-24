import Head from 'next/head'
import Main from "../components/Main";
import GetRepos from '../components/GetRepos';
import getLatestRepos from "../lib/getLatestRepos";

export default function Home({repositories}) {
  return (
    <div>
      <Head>
          <title>Amo's Website</title>
          <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="className=space-y-14 lg:space-y-24">
        <main className="max-w-4xl mx-auto mt-12 antialiased">
            <Main/>
        </main>
      </div>
      <GetRepos repositories={repositories} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const repositories = await getLatestRepos();

  return {
    props: {
      repositories,
    },
  };
};