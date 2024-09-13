import { useEffect, useRef, useState } from 'react';
import Banner from '../components/landingPage/Banner';
import Benefit from '../components/landingPage/Benefit';
import Category from '../components/landingPage/Category';
import Request from '../components/landingPage/Request';
import { Layout } from '../components/layout/Layout';
import ModalSplash from '../components/modal/splash/ModalSplash';

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const benefitRef = useRef(null);
  const categoryRef = useRef(null);

  const handleLearnMore = () => {
    if (benefitRef.current) {
      benefitRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowModal(false);
  };

  const handleStartNow = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowModal(false);
  };

  useEffect(() => {
    const hasShownModal = localStorage.getItem('hasShownModal');

    if (!hasShownModal) {
      setShowModal(true);
      localStorage.setItem('hasShownModal', 'true');
    }
  }, []);

  return (
    <>
      <Layout>
        <div className="mt-0">
          <Banner />
          <Request />
          <div ref={categoryRef} className="splash-langsung-offset">
            <Category />
          </div>
          <div ref={benefitRef} className="splash-pelajari-offset">
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
    </>
  );
};

export default LandingPage;
