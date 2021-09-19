import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = 'Book best hotels for your holiday' }) => {
  return (
    <div>
      {/* <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head> */}
      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
