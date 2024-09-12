import { useRef, useState } from 'react';
import Banner from '../components/landingPage/Banner';
import Benefit from '../components/landingPage/Benefit';
import Category from '../components/landingPage/Category';
import Request from '../components/landingPage/Request';
import { Layout } from '../components/layout/Layout';
import ModalSplash from '../components/modal/splash/ModalSplash';
import ModalRegisterAs from '../components/modal/register/register-as/ModalRegisterAs';
import ModalRegisterPembeli from '../components/modal/register/register-pembeli/ModalRegisterPembeli';
import ModalLogin from '../components/modal/login/ModalLogin';

const LandingPage = () => {
  const [showModal, setShowModal] = useState(true);

  const benefitRef = useRef(null);
  const categoryRef = useRef(null);

  // Function to scroll to Benefit
  const handleLearnMore = () => {
    if (benefitRef.current) {
      benefitRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowModal(false);
  };

  // Function to scroll to Category
  const handleStartNow = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowModal(false);
  };

  return (
    <>
      <Layout>
        <div className="mt-0">
          <Banner />
          <Request />
          <div ref={categoryRef}>
            <Category />
          </div>
          <div ref={benefitRef}>
            <Benefit />
          </div>
        </div>
      </Layout>
      <ModalSplash
        isVisible={showModal}
        onLearnMore={handleLearnMore}
        onStartNow={handleStartNow}
        onClose={() => setShowModal(false)}
      />
      <ModalRegisterAs />
      <ModalRegisterPembeli />
      <ModalLogin />
    </>
  );
};

export default LandingPage;
