import logoBUMN from '../../../assets/logos/navbar/logo-bumn.png';
import logoPadi from '../../../assets/logos/navbar/logo-padi.png';
import illustration from '../../../assets/images/modal/splash-illustration.png';
import Modal from '../Modal';

// eslint-disable-next-line react/prop-types
const ModalSplash = ({ isVisible, onLearnMore, onClose, onStartNow }) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        {/* Illustration positioned absolutely */}
        <div className="absolute left-[-90px] bottom-[-80px]">
          <img
            alt="Illustration"
            src={illustration}
            className="w-[150px] h-auto"
          />
        </div>

        {/* Modal Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-4">
            Selamat Datang di Padi UMKM!
          </h1>
          <p className="mb-6">
            Di sini, UMKM bisa memperluas pasar ke industri BUMN dan BUMN bisa
            mendapatkan barang yang dibutuhkan dari UMKM terbaik. Yuk daftarkan
            dan rasakan manfaatnya!
          </p>

          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <img alt="Logo BUMN" width="128" height="20" src={logoBUMN} />
              <img alt="Logo Padi" width="61" height="33" src={logoPadi} />
            </div>

            {/* Adding margin-left to create space between logos and buttons */}
            <div className="flex space-x-4 ml-8">
              <button
                className="bg-white text-brPrimary px-6 py-3 rounded-lg border border-brPrimary shadow hover:bg-brPrimary hover:text-white transition duration-200"
                onClick={onLearnMore}>
                Pelajari Lebih Lanjut
              </button>
              <button
                className="text-white px-6 py-3 rounded-lg shadow bg-[#0092AC] hover:bg-opacity-70 transition duration-200"
                onClick={onStartNow}>
                Langsung Mulai
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSplash;
