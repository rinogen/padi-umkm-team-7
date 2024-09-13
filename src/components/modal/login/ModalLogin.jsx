import { useState } from 'react';
import logoGoogle from '../../../assets/logos/register/logo-google.png';
import { useModal } from '../../../context/RegisterContext';
import Modal from '../Modal';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const ModalLogin = () => {
  const { showLoginModal, closeLoginModal, handleRegisterFromLogin } =
    useModal();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Modal isVisible={showLoginModal}>
      <div className="flex justify-center items-center lg:h-screen bg-login-wrapper relative">
        <div className="max-w-screen-sm w-full bg-white border border-gray-300 shadow-lg rounded-lg lg:flex h-fit overflow-hidden">
          <div className="flex flex-col justify-center items-center h-screen lg:h-full w-full p-10">
            <div className="w-full space-y-3 mb-4">
              <div className="w-full flex justify-end items-center mb-6">
                <button onClick={closeLoginModal} className="text-black">
                  <IoMdClose className="w-8 h-8" />
                </button>
              </div>
              <div className="w-full">
                <div className="text-center text-2xl text-palette Text-primary font-bold">
                  Masuk
                </div>
              </div>
              <div className="w-full">
                <p className="text-center text-md font-normal text-paletteText-primary">
                  Belum Punya Akun?{' '}
                  <button onClick={handleRegisterFromLogin}>
                    <span className="text-[#009ea9] font-semibold cursor-pointer">
                      Daftar
                    </span>
                  </button>
                </p>
              </div>
              <div className="w-full">
                <button className="w-full flex items-center justify-center px-6 py-2 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-gray-200 hover:border-gray-200 transition duration-300">
                  <img
                    src={logoGoogle}
                    alt="Google Logo"
                    width="24"
                    height="24"
                    className="mr-2"
                  />
                  Masuk dengan Google
                </button>
              </div>

              <div className="w-full mb-2">
                <div className="relative flex py-2 items-center justify-center">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="absolute px-2 bg-white text-gray-400">
                    atau
                  </span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>
              </div>
            </div>

            <form className="w-full">
              <div className="w-full space-y-2 mb-4">
                <label className="block text-paletteText-primary text-sm font-semibold">
                  Alamat Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker focus:outline-none false"
                  id="email"
                  type="text"
                  placeholder="john@email.com"
                />
              </div>

              <div className="w-full space-y-2 mb-6">
                <label className="block text-paletteText-primary text-sm font-semibold">
                  Kata Sandi
                </label>
                <div className="relative items-center w-full border border-borderCard-divider text-paletteText-primary rounded-[8px] px-2 leading-tight">
                  <input
                    autoComplete="current-password"
                    className="py-2 text-paletteText-primary text-sm w-full focus:outline-none pr-10"
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Masukkan kata sandi"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer">
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
              </div>

              <div className="w-full mb-8">
                <button
                  type="submit"
                  disabled=""
                  className="w-full flex items-center justify-center px-6 py-2 bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] text-white rounded-lg">
                  Masuk
                </button>
              </div>
            </form>
            <div className="w-full mb-2">
              <p className="text-center text-sm text-palette Text-primary">
                Dengan mendaftar, saya menyetujui{' '}
                <a href="/syarat-dan-ketentuan">
                  <span className="text-[#009ea9] font-light cursor-pointer">
                    Syarat dan Ketentuan
                  </span>
                </a>
                &nbsp;Serta{' '}
                <a href="/kebijakan-privasi">
                  <span className="text-[#009ea9] font-light cursor-pointer">
                    Kebijakan Privasi
                  </span>
                </a>{' '}
                yang Berlaku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLogin;
