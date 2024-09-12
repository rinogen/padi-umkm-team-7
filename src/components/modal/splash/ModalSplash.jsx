import logoBUMN from '../../../assets/logos/navbar/logo-bumn.png';
import logoPadi from '../../../assets/logos/navbar/logo-padi.png';
import Modal from '../Modal';

// eslint-disable-next-line react/prop-types
const ModalSplash = ({ isVisible, onLearnMore, onClose, onStartNow }) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Selamat Datang di Padi UMKM!
        </h1>
        <p className="mb-6">
          Di sini, UMKM bisa memperluas pasar ke industri BUMN dan BUMN bisa
          mendapatkan barang yang dibutuhkan dari UMKM terbaik. Yuk daftarkan
          dan rasakan manfaatnya!
        </p>
        <div className="flex items-center justify-between ">
          <div className="flex space-x-4">
            <img alt="Logo BUMN" width="128" height="20" src={logoBUMN} />
            <img alt="Logo Padi" width="61" height="33" src={logoPadi} />
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-white text-brPrimary px-6 py-3 rounded-lg border border-brPrimary shadow hover:bg-brPrimary hover:text-white transition duration-200"
              onClick={onLearnMore}>
              Pelajari Lebih Lanjut
            </button>
            <button
              className=" text-white px-6 py-3 rounded-lg shadow bg-[#0092AC] hover:bg-opacity-70 transition duration-200"
              onClick={onStartNow}>
              Langsung Mulai
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSplash;
