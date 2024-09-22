import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import ModalRegisterAs from '../../components/modal/register/register-as/ModalRegisterAs';
import ModalRegisterPembeli from '../../components/modal/register/register-pembeli/ModalRegisterPembeli';
import ModalLogin from '../../components/modal/login/ModalLogin';
import { Link } from 'react-router-dom';

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
      <Link
        to="https://wa.me/6281290007820"
        target="_blank"
        rel="noopener noreferrer">
        <button
          className="flex items-center fixed space-x-2.5 rounded-2xl font-ubuntu bottom-6 right-5 z-[30] bg-white px-3 py-3.5 lg:mb-0"
          style={{
            boxShadow: '0px 0px 3px 0px #0000001A, 0px 4px 20px 0px #00000026',
          }}>
          <img
            alt="Customer Care"
            loading="lazy"
            width={36}
            height={36}
            decoding="async"
            data-img="1"
            style={{ color: 'trasnparent' }}
            src="https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustomer-care.f88118e4.svg&w=48&q=25"
          />
          <span className="font-medium text-brPrimary text-sm">
            {' '}
            Customer Care
          </span>
        </button>
      </Link>
    </>
  );
};
