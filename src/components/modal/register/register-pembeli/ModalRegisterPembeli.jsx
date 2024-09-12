import { useModalRegister } from '../../../../context/RegisterContext';
import Modal from '../../Modal';
import logoGoogle from '../../../../assets/logos/register/logo-google.png';

const ModalRegisterPembeli = () => {
  const { showRegisterPembeliModal, closeRegisterPembeliModal } =
    useModalRegister();

  return (
    <Modal
      isVisible={showRegisterPembeliModal}
      onClose={closeRegisterPembeliModal}>
      <div className="flex justify-center items-center lg:h-screen bg-login-wrapper relative">
        <div className="max-w-screen-sm w-full bg-white border border-gray-300 shadow-lg rounded-lg lg:flex h-fit overflow-hidden">
          <div className="flex flex-col justify-center items-center h-screen lg:h-full w-[625px] p-10">
            <div className="w-full space-y-3 mb-4">
              <div className="w-full">
                <div className="text-center text-2xl text-palette Text-primary font-bold">
                  Daftar Sebagai Pembeli
                </div>
              </div>
              <div className="w-full">
                <p className="text-center text-md font-normal text-paletteText-primary">
                  Sudah punya akun PaDi UMKM?{' '}
                  <a href="/login">
                    <span className="text-[#009ea9] font-semibold cursor-pointer">
                      Masuk
                    </span>
                  </a>
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
                  Nomor Telepon
                </label>
                <div className="md:col-span-3 xl:col-span-5">
                  <div className="relative items-center w-full border border-borderCard-divider text-paletteText-primary rounded-[8px] px-2 leading-tight sm:flex false">
                    <div className="flex items-center relative w-full">
                      <div className="flex items-center justify-center pr-2 mr-2 border-r border-borderCard-divider text-paletteText-primary text-sm h-1/2">
                        +62
                      </div>
                      <div className="w-full h-full">
                        <input
                          autoComplete="none"
                          className="py-2 text-paletteText-primary text-sm w-full focus:outline-none"
                          id="phonenumber"
                          name="phonenumber"
                          type="text"
                          placeholder="8123456789"
                          pattern="^[0-9]*$"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full space-y-2 mb-4">
                <label className="block text-paletteText-primary text-sm font-semibold">
                  Kode Referal{' '}
                  <label className="font-medium bg-gray-200 p-[2px] px-2 ml-1 rounded-md border-2 border-gray-300">
                    Optional
                  </label>
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker focus:outline-none false"
                  id="referralCode"
                  type="text"
                  placeholder="Masukkan kode referal"
                />
              </div>
              <div className="w-full mb-8">
                <button
                  type="submit"
                  disabled=""
                  className="w-full flex items-center justify-center px-6 py-2 bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] text-white rounded-lg">
                  Daftar
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

export default ModalRegisterPembeli;
