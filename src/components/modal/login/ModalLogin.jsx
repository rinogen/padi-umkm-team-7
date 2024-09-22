/* eslint-disable no-unused-vars */
import { useState } from 'react';
import logoGoogle from '../../../assets/logos/register/logo-google.png';
import { useModal } from '../../../context/RegisterContext';
import Modal from '../Modal';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import {
  IoIosInformationCircle,
  IoIosWarning,
  IoMdClose,
  IoMdCloseCircle,
} from 'react-icons/io';
import { useAuth } from '../../../context/AuthContext';

const ModalLogin = () => {
  const { showLoginModal, closeLoginModal, handleRegisterFromLogin } =
    useModal();
  const { login, loginWithGoogle } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setUsername(emailValue);
    console.log(emailValue);
    if (emailValue === '') {
      setEmailError('Alamat wajib diisi');
      setIsEmailValid(false);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+[a-zA-Z]+$/.test(emailValue)) {
      setEmailError('Email tidak lengkap');
      setIsEmailValid(false);
    } else {
      setEmailError('');
      setIsEmailValid(true);
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    console.log(passwordValue);
    if (passwordValue === '') {
      setPasswordError('Kata sandi wajib diisi');
      setIsPasswordValid(false);
    } else if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        passwordValue
      )
    ) {
      setPasswordError(
        'Password harus terdiri dari minimal 8 karakter dan mengandung huruf, angka, dan simbol.'
      );
      setIsPasswordValid(false);
    } else {
      setPasswordError('');
      setIsPasswordValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      setUsername('');
      setPassword('');
      setError('');
      closeLoginModal();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError('Silahkan periksa kembali email dan kata sandi Anda');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLoginClick = async () => {
    try {
      await loginWithGoogle();
      closeLoginModal();
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Gagal masuk dengan Google');
    }
  };

  return (
    <Modal isVisible={showLoginModal}>
      <div className="flex justify-center items-center lg:h-screen h-full bg-login-wrapper relative p-4">
        <div className="max-w-screen-sm w-full bg-white border border-gray-300 shadow-lg rounded-lg lg:flex h-fit max-h-[90vh] overflow-y-auto">
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
                <button
                  onClick={handleGoogleLoginClick}
                  className="w-full flex items-center justify-center px-6 py-2 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-gray-200 hover:border-gray-200 transition duration-300">
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

            {error && (
              <div className="w-full mb-6">
                <div className="bg-red-100 bg-opacity-50 h-full w-full flex items-center justify-between py-4 px-3 rounded-xl space-x-2">
                  <IoIosInformationCircle className="text-red-400" />
                  <p className="text-xs text-left text-paletteText-primary w-full">
                    {error}
                  </p>
                  <IoMdCloseCircle className="text-red-400" />
                </div>
              </div>
            )}
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full space-y-2 mb-4">
                <label className="block text-paletteText-primary text-sm font-semibold">
                  Alamat Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker focus:outline-none false"
                  id="email"
                  type="email"
                  value={username}
                  onChange={handleEmailChange}
                  placeholder="john@email.com"
                />
                {emailError && (
                  <span className="text-xs text-accent-error-70 flex gap-1 items-center">
                    <IoIosWarning className="text-red-400" />
                    <span className="text-red-400">{emailError}</span>
                  </span>
                )}
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
                    value={password}
                    required
                    onChange={handlePasswordChange}
                    placeholder="Masukkan kata sandi"
                  />

                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer">
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
                {passwordError && (
                  <span className="text-xs text-accent-error-70 flex gap-1 items-center">
                    <IoIosWarning className="text-red-400" />
                    <span className="text-red-400">{passwordError}</span>
                  </span>
                )}
              </div>

              <div className="w-full mb-8">
                <button
                  type="submit"
                  disabled={!isEmailValid || !isPasswordValid}
                  className={`w-full flex items-center justify-center px-6 py-2 rounded-lg ${
                    !username || !password
                      ? 'bg-gray-100 text-gray-400' // Warna abu dan kursor disabled
                      : 'bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] text-white' // Warna normal ketika enabled
                  }`}>
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
