import '../styles/globals.scss';
import { Layout } from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main className="main">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
