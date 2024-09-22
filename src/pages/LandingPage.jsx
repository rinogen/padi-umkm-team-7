import { useEffect, useRef, useState } from 'react';
import Banner from '../components/landingPage/Banner';
import Benefit from '../components/landingPage/Benefit';
import Category from '../components/landingPage/Category';
import Request from '../components/landingPage/Request';
import { Layout } from '../components/layout/Layout';
import ModalSplash from '../components/modal/splash/ModalSplash';
import Product from '../components/landingPage/product/Product';
import Promo from '../components/landingPage/Promo';
import ProductTwo from '../components/landingPage/product/ProductTwo';
import ProductThree from '../components/landingPage/product/ProductThree';

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const benefitRef = useRef(null);
  const productRef = useRef(null);

  const handleLearnMore = () => {
    if (benefitRef.current) {
      benefitRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowModal(false);
  };

  const handleStartNow = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth' });
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
          <Category />
          <div ref={productRef} className="splash-langsung-offset">
            <Product />
          </div>
          <Promo />
          <ProductTwo />
          <ProductThree />
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
