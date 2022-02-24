import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout';
import Navigation from "../components/Navigation";
import { ThemeProvider } from 'next-themes'
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
          <>
            <ThemeProvider attribute="class" enableSystem={false}>
                <Layout>
                    <Navigation/>
                    <Component {...pageProps} />
                    <Footer/>
                </Layout>
            </ThemeProvider>
          </>
        )
}

export default MyApp