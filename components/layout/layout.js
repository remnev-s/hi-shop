import { Header } from '../header/header';
import { MainLayout } from '../mainLayout/mainLayout';
import { Footer } from '../footer/footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
