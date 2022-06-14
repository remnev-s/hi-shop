import '../styles/globals.scss';
import { Layout } from '../components/layout/layout';
import { MainLayout } from '../components/mainLayout/mainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Layout>
  );
}

export default MyApp;
