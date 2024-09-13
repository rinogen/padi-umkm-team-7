import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import ModalRegisterAs from '../../components/modal/register/register-as/ModalRegisterAs';
import ModalRegisterPembeli from '../../components/modal/register/register-pembeli/ModalRegisterPembeli';
import ModalLogin from '../../components/modal/login/ModalLogin';

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="mt-0">{children}</div>
      <Footer />
      <ModalRegisterAs />
      <ModalRegisterPembeli />
      <ModalLogin />
    </>
  );
};
