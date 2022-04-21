import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <AppBar />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
