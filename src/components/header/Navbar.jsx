import logoBBI from '../../assets/logos/navbar/logo-produk-indo.png';
import logoBUMN from '../../assets/logos/navbar/logo-bumn.png';
import logoPadi from '../../assets/logos/navbar/logo-padi.png';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/RegisterContext';
import { IoSearchSharp } from 'react-icons/io5';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiCircleQuestion } from 'react-icons/ci';

const Navbar = () => {
  const { handleRegisterClick, handleLoginClick } = useModal();
  const { isAuthenticated, username, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
          {/* isi hamburger menu */}
          <div
            className={`w-full flex md:hidden items-start justify-start transition duration-500 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } bg-white flex-col absolute inset-0 md:py-0 z-[1000] h-screen`}>
            {!isAuthenticated ? (
              <>
                <div className="flex justify-between md:justify-end w-full p-4">
                  <div
                    onClick={toggleMenu}
                    className="text-sm self-center text-[#6b7280] cursor-pointer">
                    Tutup
                  </div>
                </div>
                <div className="flex justify-between flex-col p-4 w-full h-full">
                  <div>
                    <button
                      onClick={handleLoginClick}
                      className="py-2 px-4 rounded-lg border-2 border-[#0092ac] text-[#0092ac] text-lg font-semibold mb-4 w-full">
                      Masuk
                    </button>
                    <button
                      onClick={handleRegisterClick}
                      className="py-2 px-4 rounded-lg border-2 border-[#0092ac] text-white bg-[#0092ac] text-lg font-semibold mb-4 w-full">
                      Daftar
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* username display */}
                <div className="flex justify-between w-full p-4">
                  <div className="flex items-center justify-center h-full space-x-3">
                    <div className="relative w-10 h-10 overflow-hidden text-sm rounded-full">
                      <img
                        alt="User Icon"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="100vw"
                        style={{
                          position: 'absolute',
                          height: '100%',
                          width: '100%',
                          inset: '0px',
                          objectFit: 'contain',
                          color: 'transparent',
                        }}
                        src={
                          'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.e4246cbc.svg&w=3840&q=25'
                        }
                      />
                    </div>
                    <div className="flex flex-col ">
                      <div className="max-w-[120px] truncate text-sm text-paletteText-primary">
                        {' '}
                        {username || 'User Name'}
                      </div>
                      <div className="text-xs text-paletteText-inactive whitespace-nowrap">
                        Buyer Retail
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={toggleMenu}
                    className="text-sm self-center text-[#6b7280] cursor-pointer">
                    Tutup
                  </div>
                </div>

                {/* wallet display */}
                <div className="px-4 py-2 w-full">
                  <div className='class="border border-[#DEE3ED] p-2 bg-[#F6F9FC] mt-3 rounded-lg font-ubuntu"'>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3  cursor-pointer hover:opacity-75">
                        <img
                          alt="Icon Wallet"
                          width={36}
                          height={36}
                          loading="lazy"
                          decoding="async"
                          data-nimg="1"
                          sizes="100vw"
                          style={{
                            color: 'transparent',
                          }}
                          src={
                            'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwallet.48eac4b6.svg&w=96&q=75'
                          }
                        />
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-1">
                            <span className="text-paletteText-secondary">
                              Saldo Refund
                            </span>
                            <CiCircleQuestion />
                          </div>
                          <span className="font-bold text-brPrimary">Rp0</span>
                        </div>
                      </div>
                      <div
                        className="py-2 px-3 border border-secondary-70 rounded font-medium text-secondary-70 text-sm hover:text-white hover:bg-secondary-70 disabled:bg-[#DDE1EC] disabled:border-[#DDE1EC] disabled:cursor-default disabled:opacity-100 disabled:text-[#9BA3BA]"
                        disabled>
                        Tarik
                      </div>
                    </div>
                  </div>
                </div>

                {/* divider */}
                <div className="flex flex-col w-full divide-y-4 border-[#e5e7eb] py-1">
                  <div></div>
                  <div></div>
                </div>

                {/* pembayaran */}
                <div
                  className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer"
                  role="menuitem"
                  id="menu-item-0">
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Payment Icon"
                      loading="lazy"
                      decoding="async"
                      width={24}
                      height={24}
                      data-nimg="1"
                      style={{
                        color: 'transparent',
                      }}
                      src={
                        'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcredit-card.302fcbef.svg&w=48&q=75'
                      }
                    />
                    <div>Metode Pembayaran</div>
                  </div>
                </div>

                {/* daftar transaksi */}
                <div
                  className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer"
                  role="menuitem"
                  id="menu-item-0">
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Payment Icon"
                      loading="lazy"
                      decoding="async"
                      width={24}
                      height={24}
                      data-nimg="1"
                      style={{
                        color: 'transparent',
                      }}
                      src={
                        'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransaction.29de8020.svg&w=48&q=75'
                      }
                    />
                    <div>Daftar Transaksi</div>
                  </div>
                </div>

                {/* alamat pengiriman */}
                <div
                  className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer"
                  role="menuitem"
                  id="menu-item-0">
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Payment Icon"
                      loading="lazy"
                      decoding="async"
                      width={24}
                      height={24}
                      data-nimg="1"
                      style={{
                        color: 'transparent',
                      }}
                      src={
                        'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.9caaf192.svg&w=48&q=75'
                      }
                    />
                    <div>Alamat Pengiriman</div>
                  </div>
                </div>

                {/* divider */}
                <div className="flex flex-col w-full divide-y-4 border-[#e5e7eb] py-1">
                  <div></div>
                  <div></div>
                </div>

                {/* keluar akun */}
                <div className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer">
                  <div
                    onClick={handleLogout}
                    className="flex items-center space-x-4">
                    <img
                      alt="Log Out Icon"
                      loading="lazy"
                      decoding="async"
                      width="24"
                      height="24"
                      data-nimg="1"
                      style={{
                        color: 'transparent',
                      }}
                      src="https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flog-out.5649f1b6.svg&w=32&q=75"
                    />
                    <div>Keluar</div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center flex-col sm:flex-row justify-around bg-white py-0 z-30 px-5 w-full h-[60px] md:h-[80px]">
            <div className="flex items-center justify-between w-full h-full mt-3 sm:mt-0 md:mt-0 lg:mt-0">
              {/* hamburger icon */}
              <div className="relative block md:hidden mr-3">
                <GiHamburgerMenu
                  className="cursor-pointer"
                  style={{ color: 'rgb(68, 75, 85)' }}
                  onClick={toggleMenu}
                />
              </div>

              {/* logo padi */}
              <div className="flex-none items-center justify-center h-full w-[100px] max-w-[100px] md:w-[120px] md:max-w-[120px] pr-7">
                <Link to="/">
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
                </div>
              </nav>

              <div className="relative items-center w-full h-10 text-paletteText-primary px-3 leading-tight hidden sm:flex border-2 rounded-[8px]">
                <div className="w-full h-full">
                  <input
                    type="text"
                    className="w-full h-full focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm"
                    placeholder="Cari produk, jasa, atau vendor"
                  />
                </div>
                <div className="flex items-center justify-center right-0 pl-2">
                  <IoSearchSharp className="text-[#8F95B2]" />
                </div>
              </div>
              <div className="h-full pl-5 flex items-center justify-center"></div>

              {!isAuthenticated ? (
                <></>
              ) : (
                <div className="h-full pl-5 flex items-center justify-center">
                  <Link href="#">
                    <div className="flex items-center justify-center cursor-pointer h-full w-full text-paletteText-inactive px-2">
                      <div className="flex items-center justify-center hover:bg-[#F3F5FC] hover:rounded-md p-[5px] w-[38px] h-[38px]">
                        <img
                          className="w-[38px] h-[38px]"
                          src="https://padiumkm.id/_next/static/media/notification-new.1a139baf.svg"
                          alt="notification"
                        />
                      </div>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="flex items-center justify-center w-full h-full">
                      <div className="relative flex items-center justify-center cursor-pointer h-full w-full text-paletteText-inactive min-w-[60px]">
                        <div className="flex items-center justify-center hover:bg-[#F3F5FC] hover:rounded-md py-[5px] px-[6px] w-[40px] h-[40px]">
                          <img
                            className="w-[38px] h-[38px]"
                            src="https://padiumkm.id/_next/static/media/shopping-cart.6c56e62a.svg"
                            alt="ShoppingCart"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <span className="relative core-chat">
                    <Link href="#">
                      <div className="flex items-center justify-center w-full h-full px-2">
                        <div className="flex items-center justify-center cursor-pointer h-full w-full text-paletteText-inactive min-w-[60px]">
                          <div className="flex items-center justify-center hover:bg-[#F3F5FC] hover:rounded-md py-[5px] px-[6px] w-[40px] h-[40px]">
                            <img
                              className="text-paletteText-inactive w-[38px] h-[38px]"
                              src="https://padiumkm.id/_next/static/media/message-text.bbbd88d5.svg"
                              alt="message"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </span>
                </div>
              )}
            </div>

            {/* User Name Display */}
            <div className="h-full pl-5 flex items-center justify-center">
              {!isAuthenticated ? (
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
              ) : (
                <div className="flex items-center w-full sm:w-fit h-full">
                  <div className="items-center justify-center pl-4 hidden sm:flex space-x-5 h-full">
                    <div
                      className="h-full relative text-left cursor-pointer"
                      onClick={toggleDropdown}>
                      <div className="flex items-center justify-center h-full space-x-3">
                        <div className="relative w-10 h-10 overflow-hidden text-sm rounded-full">
                          <img
                            alt="User Icon"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            sizes="100vw"
                            style={{
                              position: 'absolute',
                              height: '100%',
                              width: '100%',
                              inset: '0px',
                              objectFit: 'contain',
                              color: 'transparent',
                            }}
                            src={
                              'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.e4246cbc.svg&w=3840&q=25'
                            }
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="max-w-[120px] truncate text-sm text-paletteText-primary">
                            {username || 'User Name'}
                          </div>
                          <div className="text-xs text-paletteText-inactive whitespace-nowrap">
                            Buyer Retail
                          </div>
                        </div>
                      </div>

                      {/* droppdown username display */}
                      {isOpen && (
                        <div
                          className={`overflow-hidden font-ubuntu right-0 origin-top-right absolute rounded-lg shadow-lg bg-white focus:outline-none cursor-default z-50 w-[396px] !mt-[0] top-[60px] pt-4 ${
                            isOpen ? 'block' : 'hidden'
                          }`}
                          style={{ style: 'z-index: 1' }}>
                          <div className="py-0" role="">
                            <div
                              className="text-gray-700 font-ubuntu block px-4 py-2 text-sm"
                              role="menuitem"
                              id="menu-item-0">
                              {/* user name display */}
                              <div className="flex items-center justify-between space-x-3">
                                <div>
                                  <div className="relative w-8 h-8 text-sm rounded-full overflow-hidden">
                                    <img
                                      alt="User Icon"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      sizes="100vw"
                                      style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        inset: '0px',
                                        objectFit: 'contain',
                                        color: 'transparent',
                                      }}
                                      src={
                                        'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.e4246cbc.svg&w=3840&q=25'
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col w-full overflow-hidden false">
                                  <div className="flex gap-1 items-center truncate whitespace-nowrap text-sm text-paletteText-primary">
                                    {username || 'username'}
                                  </div>
                                  <div className='class="text-xs text-paletteText-inactive whitespace-nowrap"'>
                                    Buyer Retail
                                  </div>
                                </div>
                                <button className="whitespace-nowrap p-1 border rounded-md text-white bg-brPrimary hover:bg-secondary-40 text-xs font-bold">
                                  Lihat Profile
                                </button>
                              </div>

                              {/* wallet display */}
                              <div className='class="border border-[#DEE3ED] p-2 bg-[#F6F9FC] mt-3 rounded-lg font-ubuntu"'>
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center space-x-3  cursor-pointer hover:opacity-75">
                                    <img
                                      alt="Icon Wallet"
                                      width={36}
                                      height={36}
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="1"
                                      sizes="100vw"
                                      style={{
                                        color: 'transparent',
                                      }}
                                      src={
                                        'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwallet.48eac4b6.svg&w=96&q=75'
                                      }
                                    />
                                    <div className="flex flex-col">
                                      <div className="flex items-center space-x-1">
                                        <span className="text-paletteText-secondary">
                                          Saldo Refund
                                        </span>
                                        <CiCircleQuestion />
                                      </div>
                                      <span className="font-bold text-brPrimary">
                                        Rp0
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className="py-2 px-3 border border-secondary-70 rounded font-medium text-secondary-70 text-sm hover:text-white hover:bg-secondary-70 disabled:bg-[#DDE1EC] disabled:border-[#DDE1EC] disabled:cursor-default disabled:opacity-100 disabled:text-[#9BA3BA]"
                                    disabled>
                                    Tarik
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* divider */}
                            <div className="flex flex-col w-full divide-y-4 border-[#e5e7eb] px-4 py-1">
                              <div></div>
                              <div></div>
                            </div>

                            {/* pembayaran */}
                            <div
                              className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer"
                              role="menuitem"
                              id="menu-item-0">
                              <div className="flex items-center space-x-4">
                                <img
                                  alt="Payment Icon"
                                  loading="lazy"
                                  decoding="async"
                                  width={24}
                                  height={24}
                                  data-nimg="1"
                                  style={{
                                    color: 'transparent',
                                  }}
                                  src={
                                    'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcredit-card.302fcbef.svg&w=48&q=75'
                                  }
                                />
                                <div>Metode Pembayaran</div>
                              </div>
                            </div>

                            {/* daftar transaksi */}
                            <div
                              className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer"
                              role="menuitem"
                              id="menu-item-0">
                              <div className="flex items-center space-x-4">
                                <img
                                  alt="Payment Icon"
                                  loading="lazy"
                                  decoding="async"
                                  width={24}
                                  height={24}
                                  data-nimg="1"
                                  style={{
                                    color: 'transparent',
                                  }}
                                  src={
                                    'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransaction.29de8020.svg&w=48&q=75'
                                  }
                                />
                                <div>Daftar Transaksi</div>
                              </div>
                            </div>

                            {/* alamat pengiriman */}
                            <div
                              className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer"
                              role="menuitem"
                              id="menu-item-0">
                              <div className="flex items-center space-x-4">
                                <img
                                  alt="Payment Icon"
                                  loading="lazy"
                                  decoding="async"
                                  width={24}
                                  height={24}
                                  data-nimg="1"
                                  style={{
                                    color: 'transparent',
                                  }}
                                  src={
                                    'https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.9caaf192.svg&w=48&q=75'
                                  }
                                />
                                <div>Alamat Pengiriman</div>
                              </div>
                            </div>

                            {/* divider */}
                            <div className="flex flex-col w-full divide-y-4 border-[#e5e7eb] px-4 py-1">
                              <div></div>
                              <div></div>
                            </div>

                            {/* keluar akun */}
                            <div
                              className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer"
                              role="menuitem"
                              id="menu-item-0"
                              onClick={handleLogout}>
                              <div className="flex items-center space-x-4">
                                <img
                                  alt="Log Out Icon"
                                  loading="lazy"
                                  decoding="async"
                                  width="24"
                                  height="24"
                                  data-nimg="1"
                                  style={{
                                    color: 'transparent',
                                  }}
                                  src="https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flog-out.5649f1b6.svg&w=32&q=75"
                                />
                                <div>Keluar</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* search di layar diperkecil */}
          <div className="relative items-center border-b bg-white sm:hidden ">
            <div className="relative items-center h-10 text-paletteText-primary px-3 my-2 leading-tight flex mx-[22px] border-2 rounded-[8px]">
              <div className="w-full h-full">
                <input
                  type="text"
                  className="w-full h-full focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm"
                  placeholder="Cari produk, jasa, atau vendor"
                />
              </div>
              <div className="flex items-center justify-center right-0 pl-2">
                <IoSearchSharp className="text-[#8F95B2]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
