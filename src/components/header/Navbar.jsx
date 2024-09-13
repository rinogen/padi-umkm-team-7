import logoBBI from '../../assets/logos/navbar/logo-produk-indo.png';
import logoBUMN from '../../assets/logos/navbar/logo-bumn.png';
import logoPadi from '../../assets/logos/navbar/logo-padi.png';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/RegisterContext';

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const { handleRegisterClick, handleLoginClick } = useModal();
  return (
    <>
      <div className="sticky top-0 w-full z-40">
        <nav className="justify-between bg-bgSecondary z-40 h-9 hidden md:flex">
          <div className="flex px-[22px] z-40 bg-inactive w-full">
            <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
              Mitra padi UMKM
            </div>
            <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
              Menjadi Penjual
            </div>
            <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
              Info
            </div>
            <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
              Pusat Bantuan
            </div>
          </div>
          <div className="flex px-[22px] z-20 bg-inactive space-x-2">
            <div className="flex items-center relative my-2">
              <img
                alt="Logo Bangga Buatan Indonesia"
                loading="lazy"
                width="24"
                height="24"
                src={logoBBI}
              />
            </div>
            <div className="flex items-center relative my-2">
              <img
                alt="logo BUMN"
                loading="lazy"
                width="65"
                height="12"
                src={logoBUMN}
              />
            </div>
          </div>
        </nav>
        <div className="w-full z-40 flex-col flex bg-white border-b-2">
          <div className="flex items-center flex-col sm:flex-row justify-around bg-white py-0 z-30 px-5 w-full h-[60px] md:h-[80px] ">
            <div className="flex items-center justify-between w-full h-full mt-3 sm:mt-0 md:mt-0 lg:mt-0">
              {/* hamburger icon */}
              <div className="relative block md:hidden mr-3">
                <div className="flex-none items-center justify-center h-full w-[100px] max-w-[100px] md:w-[120px] md:max-w-[120px] pr-7"></div>
              </div>
              <div className="flex-none items-center justify-center h-full w-[100px] max-w-[100px] md:w-[120px] md:max-w-[120px] pr-7">
                <Link href="/">
                  <span className="flex items-center justify-center cursor-pointer w-full h-full">
                    <img
                      alt="Logo Padi"
                      loading="lazy"
                      className="w-[80.18px] h-[44.34px] min-w-max md:w-20 md:h-10 lg:w-[98px] lg:h-[55px]"
                      src={logoPadi}
                    />
                  </span>
                </Link>
              </div>
              <nav className="hidden md:flex items-center justify-center h-full">
                <div className="flex items-center justify-start h-full w-[90px] lg:w-[110px]">
                  <div className="flex items-center justify-start h-full lg:mr-3">
                    <img
                      alt="category"
                      loading="lazy"
                      width="16"
                      height="16"
                      className="items-center flex mr-2"
                      src="https://padiumkm.id/_next/static/media/category.ba0a63f9.svg"
                    />
                    <p className="flex items-center text-sm font-medium text-txtBody py-2 cursor-pointer">
                      Kategori
                    </p>
                  </div>

                  {/* category span */}
                  <div></div>
                </div>
              </nav>
              <div className="relative items-center w-full h-10 text-paletteText-primary px-3 leading-tight hidden sm:flex border-2 rounded-[8px]">
                <div className="w-full h-full ">
                  <input
                    type="text"
                    className="w-full h-full focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm"
                    placeholder="Cari produk, jasa, atau vendor"
                  />
                </div>
                {/* button cari */}
                <div className="flex items-center justify-center right-0 pl-2 "></div>
              </div>
              <div className="h-full pl-5 flex items-center justify-center"></div>
            </div>
            <div className="flex items-center w-full sm:w-fit h-full">
              <div className="sm:pl-6 lg:pl-0 hidden sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:mt-0 sm:space-x-5 w-full sm:w-fit">
                <button
                  onClick={handleLoginClick}
                  className="px-6 w-full sm:w-fit h-10 primary-button-white">
                  Masuk
                </button>
                <button
                  onClick={handleRegisterClick}
                  className="px-6 w-full sm:w-fit h-10 primary-button-blue">
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
