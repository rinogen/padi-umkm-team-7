import { useModalRegister } from '../../../../context/RegisterContext';
import ModalFragment from '../../Modal';

// eslint-disable-next-line react/prop-types
const Modal = () => {
  const { showRegisterModal, closeRegisterModal, handleRegisterPembeliClick } =
    useModalRegister();
  return (
    <ModalFragment isVisible={showRegisterModal} onClose={closeRegisterModal}>
      <div className=" flex flex-col">
        <div className="flex-1 bg-white lg:flex overflow-hidden rounded-2xl">
          <div className="flex flex-col justify-center items-center w-full p-10">
            <div className="w-full mb-8">
              <div className="flex justify-between items-center">
                <div className="text-2xl text-paletteText-primary font-bold">
                  Daftar Sebagai
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <button onClick={handleRegisterPembeliClick}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 w-full bg-inactive rounded-lg py-3 px-5 sm:space-x-5 cursor-pointer bg-gray-200 hover:bg-opacity-50 transition duration-300 mb-4">
                  <div className="flex justify-center items-center">
                    <div className="relative w-16 h-16">
                      <img
                        alt="Pembeli"
                        className="w-full h-full"
                        width="16"
                        height="16"
                        src="https://padiumkm.id/_next/static/media/buyer.18a44b13.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center text-paletteText-primary space-y-1">
                    <div className="font-bold text-lg text-paletteText-primary text-center sm:text-left">
                      Pembeli
                    </div>
                    <div className="text-base text-paletteText-primary text-center sm:text-left">
                      Diskon & Promo Setiap hari
                    </div>
                  </div>
                </div>
              </button>
              <a target="_blank" href="https://seller.padiumkm.id/register">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 w-full bg-inactive rounded-lg py-3 px-5 sm:space-x-5 cursor-pointer bg-gray-200 hover:bg-opacity-50 transition duration-300 mb-4">
                  <div className="flex justify-center items-center">
                    <div className="relative w-16 h-16">
                      <img
                        alt="Penjual"
                        className="w-full h-full"
                        width="16"
                        height="16"
                        src="https://padiumkm.id/_next/static/media/seller.3c2c3760.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center text-paletteText-primary space-y-1">
                    <div className="font-bold text-lg text-paletteText-primary text-center sm:text-left">
                      Penjual
                    </div>
                    <div className="text-base text-paletteText-primary text-center sm:text-left">
                      Jual Produk Ke BUMN atau Retail!!
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ModalFragment>
  );
};

export default Modal;
