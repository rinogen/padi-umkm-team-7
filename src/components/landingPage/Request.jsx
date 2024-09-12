import iconKilat from '../../assets/icons/request/icon-kilat.png';
import iconKGlid from '../../assets/icons/request/icon-glid.png';

const customStyle = {
  boxShadow:
    'rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0px 7px 0px',
  background: `
    url("https://padiumkm.id/_next/static/media/rfq-bg-ellipse-left.2bc35459.png") left bottom / 11% no-repeat,
    url("https://padiumkm.id/_next/static/media/rfq-bg-ellipse-right.9ad1512d.png") right bottom / 12% no-repeat,
    url("https://padiumkm.id/_next/static/media/rfq-bg-ellipse-mini-right.8efca73c.png") right 30% / 1.5% no-repeat,
    url("https://padiumkm.id/_next/static/media/rfq-bg-ellipse-bottom.510ba9fc.png") 94% bottom / 10% no-repeat
    `,
};

const Request = () => {
  return (
    <div className="hidden md:block">
      <div className="container-layout">
        <div className="flex felx-row">
          <div className="flex gap-0.5 flex-1">
            <div className="flex flex-row items-center gap-x-2 bg-white cursor-default p-4 rounded-t-2xl w-fit border-[#e6e6e6] border-[1px] border-b-0 hover:bg-white">
              <div className="relative w-[15px] h-[15px]">
                <img
                  alt="Tender Kilat"
                  loading="lazy"
                  decoding="async"
                  sizes="100vw"
                  src={iconKilat}
                  style={{ objectFit: 'fill', color: 'transparent' }}
                />
              </div>
              <p className="text-[16px] text-[#686E76] font-ubuntu font-bold">
                Tender Kilat
              </p>
            </div>
            <div
              className="flex flex-row items-center gap-x-2 bg-[#F1F3F7] cursor-pointer p-4 rounded-t-2xl w-fit border-[#e6e6e6] border-[1px] border-b-0 hover:bg-white"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.2) -2px -2px 7px -4px' }}>
              <div className="relative w-[15px] h-[15px]">
                <img
                  alt="GLID Logistic"
                  loading="lazy"
                  decoding="async"
                  sizes="100vw"
                  src={iconKGlid}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    objectFit: 'fill',
                    color: 'transparent',
                  }}
                />
              </div>
              <p className="text-[16px] text-[#686E76] font-ubuntu font-bold">
                GLID Logistic
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-white px-4 pt-4 pb-0 rounded-b-2xl rounded-tr-none border-[1px] border-t-0"
          style={customStyle}>
          <section>
            <div>
              <span className="text-[#444B55] font-bold text-[18px]">
                Isi form Tender Kilat
              </span>
              <span className="text-[12px] text-[#686E76] font-normal pl-3">
                Apa itu Tender Kilat?
              </span>
              <a
                target="_self"
                href="https://padiumkm.id/tender-kilat?utm_source=onsite&utm_medium=widgethomepage&utm_campaign=tenderkilat">
                <span className="text-[12px] text-[#0092AC] cursor-pointer pl-1">
                  Pelajari di sini
                </span>
              </a>
            </div>
            <div className="w-full h-[104px] flex flex-row items-start justify-start space-x-3 mt-6">
              <div className="w-1/2 h-full">
                <label className="block text-sm font-[500] text-[#8C9197] mb-2">
                  Judul Permintaan
                </label>
                <input
                  className="appearance-none border border-gray-300 hover:border-gray-400 rounded-lg w-full py-2 px-3 text-[#444B55] focus:outline-none h-[48px]"
                  id="judul-permintaan"
                  type="text"
                  placeholder="Pengadaan Laptop Kantor"></input>
              </div>
              <div className="w-1/2 h-full">
                <div className="w-full h-full flex flex-row items-start justify-start space-x-3">
                  <div className="w-1/3">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-sm font-[500] text-[#8C9197] mb-2">
                        Jenis Produk
                      </p>
                      <div className="relative w-full font-ubuntu">
                        <div className=" css-w971h0-container">
                          <div className=" css-6dqgtk-control">
                            <div className=" css-hlgwow">
                              <input
                                className="appearance-none border border-gray-300 hover:border-gray-400 rounded-lg w-full py-2 px-3 text-[#444B55] focus:outline-none h-[48px]"
                                id="judul-permintaan"
                                type="text"
                                placeholder="Pilih"></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="react-datepicker-wrapper h-fit w-full">
                      <div className="react-datepicker__input-container">
                        <div className="w-full font-ubuntu select-none">
                          <div className="flex items-center space-x-1 mb-2 w-full">
                            <label className="block text-[#8C9197] text-sm font-[500]">
                              Batas Waktu Tender
                            </label>
                          </div>
                          <div className="flex border border-gray-300 rounded-[8px] w-full py-2 px-3 bg-white hover:border-gray-400 h-[48px] ">
                            <div className="flex items-center justify-center pr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none">
                                <path
                                  d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                                  stroke="#0092AC"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                                <path
                                  d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
                                  stroke="#0092AC"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                              </svg>
                            </div>
                            <input
                              className="undefined focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm w-full text-paletteText-primary"
                              placeholder="Pilih Tanggal"></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="w-full h-full flex flex-col items-start justify-start pr-4">
                      <div className="block text-sm font-[500] text-[#8C9197] mb-2">
                        <br />
                      </div>
                      <button className="flex items-center justify-center px-2 w-full h-[48px] rounded-lg font-[500] leading-5 text-[#9BA3BA] bg-[#DDE1EC] cursor-not-allowed ">
                        <span>Buat Permintaan</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Request;
