import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar';
import Footer from '../Footer';
import Container from '../Container';

const Layout = () => {
  return (
    <>
      <AppBar />

      <Container>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
