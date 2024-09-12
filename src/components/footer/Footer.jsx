import { paymentLinks, socialLinks } from '../../data/footer';

const Footer = () => {
  return (
    <footer className="bg-bgSecondary text-palette text-primary flex flex-col items-center ">
      <div className="container-layout text-center space-y-5 xl:flex xl:text-left xl:space-y-0 py-14 xl:px-5 mt-5">
        <div className="flex flex-col space-y-6 text-center md:space-y-0 md:text-left md:flex-row xl:pr-[100px] xl:space-y-0 xl:text-left">
          <div className="w-full flex flex-col space-y-5 text-center xl:text-left xl:w-fit">
            <div className="text-xl font-bold text-palette Text-primary">
              PaDi UMKM
            </div>
            <div className="text-palette Text-inactive space-y-3 whitespace-nowrap">
              <a target="_blank" href="https://info.padiumkm.id/">
                <div className="cursor-pointer hover:text-secondary-70 text-sm">
                  Tentang Padi UMKM
                </div>
              </a>
              <a
                target="_blank"
                href="https://padiumkm.id/syarat-dan-ketentuan">
                <div className="cursor-pointer hover:text-secondary-70 text-sm">
                  Syarat & Ketentuan
                </div>
              </a>
              <a target="_blank" href="https://padiumkm.id/kebijakan-privasi">
                <div className="cursor-pointer hover:text-secondary-70 text-sm">
                  Kebijakan Privasi
                </div>
              </a>
              <a
                target="_blank"
                href="https://padiumkm.id/landing-page/landing-finance">
                <div className="cursor-pointer hover:text-secondary-70 text-sm">
                  Finance
                </div>
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-5 text-center xl:text-left xl:ml-[100px] xl:w-fit">
            <div className="text-palette Text-inactive space-y-3 whitespace-nowrap">
              <div className="text-xl font-bold text-palette Text-primary">
                Informasi
              </div>
              <div className="text-palette Text-inactive space-y-3 whitespace-nowrap">
                <a target="_blank" href="https://info.padiumkm.id/">
                  <div className="cursor-pointer hover:text-secondary-70 text-sm">
                    FAQ (Tanya Jawab)
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-5 text-center xl:text-left xl:ml-[100px] xl:w-fit">
            <div className="text-palette Text-inactive space-y-3 whitespace-nowrap">
              <div className="text-xl font-bold text-palette Text-primary">
                Penjual
              </div>
              <div className="text-paletteText-inactive space-y-3 whitespace-nowrap">
                <a target="_blank" href="https://seller.padiumkm.id/">
                  <div className="cursor-pointer hover:text-secondary-70 text-sm">
                    Panduan Penjual
                  </div>
                </a>
                <a target="" href="https://padiumkm.id/">
                  <div className="cursor-pointer hover:text-secondary-70 text-sm">
                    Marketplace
                  </div>
                </a>
                <a target="_blank" href="https://tender.padiumkm.id/">
                  <div className="cursor-pointer hover:text-secondary-70 text-sm">
                    Tender
                  </div>
                </a>
                <a target="_blank" href="https://control.padiumkm.id/login">
                  <div className="cursor-pointer hover:text-secondary-70 text-sm">
                    Control Tower
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-full flex flex-col space-y-5 overflow-hidden">
          <div className="text-xl font-bold text-paletteText-primary">
            Hubungi Kami
          </div>
          <div className="text-paletteText-inactive space-y-2">
            <div className="text-sm">
              Gedung Telkom Divisi Digital Business & Technology
            </div>
            <div className="text-sm">
              Jl. Prof. DR. Soepomo No.139, RT.13/RW.2, Tebet Barat, Tebet,
              Jakarta Selatan, Jakarta 12810, Indonesia
            </div>
            <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
              <div className="pr-4 text-sm">Senin - Jumat</div>
              <div className="flex items-center pl-4 space-x-4 text-sm">
                <div>08:00 - 17:00 WIB</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 mb-0 justify-center xl:justify-start">
              {socialLinks.map((socialLink, index) => (
                <div key={index} className="cursor-pointer">
                  <a
                    className="w-full h-full"
                    href={socialLink.url}
                    target="_blank">
                    <img
                      src={socialLink.img}
                      alt={socialLink.name}
                      width="24"
                      height="24"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="text-palette Text-inactive space-y-2">
            <div className="text-sm font-semibold">
              Layanan Pengaduan Konsumen
            </div>
            <div className="text-sm font-semibold">Padi UMKM</div>
            <div className="flex divide-x-[1px] divide-palette Text-inactive justify-center xl:justify-start">
              <div className="flex items-center space-x-1 text-sm">
                <img
                  src="https://www.svgrepo.com/show/474042/email.svg"
                  alt="Email CS"
                  width="20"
                  height="20"
                />
                <div className="text-sm">cs@padiumkm.id</div>
              </div>
            </div>
          </div>
          <div className="text-palette Text-inactive space-y-2">
            <div className="text-sm font-semibold">
              Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
              Kementerian Perdagangan RI
            </div>
            <div className="flex divide-x-[1px] divide-palette Text-inactive justify-center xl:justify-start">
              <div className="flex items-center pr-4 text-sm">
                <img
                  src="https://www.svgrepo.com/show/513060/whatsapp-128.svg"
                  alt="WA CS"
                  width="20"
                  height="20"
                />
                <div className="pl-1">+62 853 1111 1010</div>
              </div>
              <div className="flex items-center pl-4 space-x-1 text-sm">
                <img
                  src="https://www.svgrepo.com/show/474042/email.svg"
                  alt="Email Kemendag"
                  width="20"
                  height="20"
                />
                <div className="contact.us@kemendag.go.id">
                  contact.us@kemendag.go.id
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-layout">
        <div className="md:border-2 p-5">
          <div className="text-xl font-bold mb-6 text-center lg:text-start">
            Metode Pembayaran
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 items-center">
            {paymentLinks.map((paymentLink) => (
              <div
                key={paymentLink.name}
                className="cursor-pointer flex-none w-fit items-center">
                <img
                  src={paymentLink.image}
                  alt={paymentLink.name}
                  width="70"
                  height="70"
                  className={paymentLink.className}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-layout pb-6 text-center">
        <div className=" text-txtBody text-paletteText-inactive text-base">
          ©2022-2025 Pasar Digital UMKM Indonesia
        </div>
      </div>
    </footer>
  );
};

export default Footer;
