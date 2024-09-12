import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
