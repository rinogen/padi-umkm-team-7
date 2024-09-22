/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PiStarFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useState } from 'react';
import useAPI from '../../../hooks/useAPI';
import promoImg from '../../../assets/images/product/super-deal.png';

const Product = () => {
  const { data: response, loading, error } = useAPI('products');
  const products = response?.data || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = products.length;

  const CustomPrevArrow = ({ onClick, currentSlide }) => {
    return (
      currentSlide > 0 && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10"
          onClick={onClick}>
          <FaChevronLeft className="text-gray-600" />
        </button>
      )
    );
  };

  const CustomNextArrow = ({
    onClick,
    currentSlide,
    totalSlides,
    slidesToShow,
  }) => {
    const lastVisibleSlide = totalSlides - slidesToShow;

    return (
      currentSlide < lastVisibleSlide && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10"
          onClick={onClick}>
          <FaChevronRight className="text-gray-600" />
        </button>
      )
    );
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: Math.min(5, totalSlides - currentSlide),
    initialSlide: 0,
    beforeChange: (newIndex) => setCurrentSlide(newIndex),
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        slidesToShow={5}
      />
    ),
    prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-500"></div>
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="container-layout lg:border lg:border-t lg:border-b-0 lg:border-x-0 ">
        <div className="flex justify-between pb-3 lg:py-4">
          <div className="flex items-center w-full justify-between">
            <div className="text-lg lg:text-[22px] font-bold">
              Koleksi Produk Super Deal Padi UMKM
            </div>
            <Link to="https://padiumkm.id/collection/koleksi-produk-semarak-alat-tulis-kantor">
              <div className="flex items-center space-x-1 lg:space-x-3 lg:ml-8 cursor-pointer">
                <span className="text-sm lg:text-[16px] font-bold text-brPrimary">
                  Lihat Semua
                </span>
                <div className="text-md font-bold">
                  <FaChevronRight className="text-brPrimary" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* layar besar */}
        <div className="relative hidden md:flex flex-row w-full h-full">
          <Link
            className="py-[2px] pb-[3px] flex-none w-[179px] h-[366px] relative mr-2 border border-[#DEE3ED] shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden cursor-pointer "
            style={{ backgroundColor: 'rgb(11, 43, 70)', height: '366px' }}
            to="/https://padiumkm.id/collection/koleksi-produk-semarak-alat-tulis-kantor">
            <img
              alt="Image section banner"
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
              src={promoImg}
            />
          </Link>
          <div className="relative flex-1 w-full md:w-[994px] h-full">
            <div className="slider-container h-full">
              <Slider {...settings}>
                {products.map((product) => {
                  // const imageUrl = `http://localhost:8080/${product.image.replace(
                  //   /\\/g,
                  //   '/'
                  // )}`;

                  const discountPrice =
                    product.price - product.price * (product.discount / 100);

                  const formatNumber = (num) => {
                    if (num >= 1000) {
                      return (
                        (num / 1000)
                          .toFixed(1)
                          .replace(/\.0$/, '')
                          .replace('.', ',') + ' rb'
                      ); // Format ribuan
                    }
                    return num;
                  };

                  return (
                    product.promo && (
                      <div key={product.id}>
                        <div
                          className="px-2 pt-[1px] pb-[4px] h-full"
                          tabIndex={-1}
                          style={{ width: '100%', display: 'inline-block' }}>
                          <div
                            className="flex flex-col justify-start h-full w-[173px] rounded-lg overflow-hidden bg-white font-ubuntu border border-[#DEE3ED] shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]"
                            style={{ height: '360px' }}
                            title={product.product_name}>
                            <Link className="block w-full h-full">
                              <div className="cursor-pointer flex flex-col items-center justify-between w-full h-full">
                                <div className="flex-none w-[173px] h-[150px] mb-2 relative aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 text-sm select-none">
                                  <div
                                    className="h-[150px] flex items-center justify-center relative"
                                    style={{ width: '173px' }}>
                                    <img
                                      src={
                                        product.image ||
                                        'https://placehold.co/600x400'
                                      }
                                      alt={product.product_name}
                                      className="w-full h-full object-cover"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                      style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        inset: '0px',
                                        objectFit: 'cover',
                                        objectPosition: 'center center',
                                        color: 'transparent',
                                      }}
                                    />
                                  </div>
                                  <div className="absolute bottom-0 left-0">
                                    <span className="text-center p-1 font-ubuntu text-[10px] font-[500px] bg-brPrimary text-white">
                                      UMKM
                                    </span>
                                  </div>
                                </div>
                                <div className="px-2 mb-2 w-full select-none">
                                  <div className="border-[#DEE3ED] border flex gap-x-1 items-center px-1.5 py-1 rounded-xl w-fit">
                                    <img
                                      src="https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&w=16&q=75"
                                      alt="store"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="1"
                                      width="16"
                                      height="16"
                                      style={{
                                        color: 'transparent',
                                      }}
                                    />
                                    <span className="truncate w-[120px] text-[#444B55] font-medium font-ubuntu  text-[10px]">
                                      {product.store_name}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-col items-center justify-between w-full h-full select-none">
                                  <div className="w-full px-2 pb-2 space-y-1 text-paletteText-primary">
                                    <div className="flex flex-col gap-y-1">
                                      <span
                                        className="truncate font-normal leading-[21px] line-clamp-1 text-[14px] text-wrap"
                                        title="Stapler Besar BANTEX Warna White">
                                        {product.product_name}
                                      </span>
                                      <span className="text-sm font-bold text-wrap">
                                        {discountPrice.toLocaleString('id-ID', {
                                          style: 'currency',
                                          currency: 'IDR',
                                        })}
                                      </span>
                                    </div>

                                    {product.discount > 0 && (
                                      <div className="flex items-center">
                                        <div className="bg-[#FDE5E4] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] ">
                                          <div
                                            className="flex items-center justify-center space-x-1"
                                            style={{
                                              color: 'rgb(241, 89, 79)',
                                            }}>
                                            <span className="font-medium font-ubuntu ">
                                              {product.discount}%
                                            </span>
                                          </div>
                                        </div>
                                        <div className="overflow-hidden text-[#8F95B2] text-xs line-through flex-nowrap text-ellipsis ml-2">
                                          {product.price.toLocaleString(
                                            'id-ID',
                                            {
                                              style: 'currency',
                                              currency: 'IDR',
                                            }
                                          )}
                                        </div>
                                      </div>
                                    )}

                                    <div className="text-xs flex items-center justify-start gap-x-0.5 h-[22px]">
                                      <div className="flex-none w-[15px]">
                                        <img
                                          src="https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap-pin.4e753bcc.svg&w=16&q=75"
                                          className="!w-3 !h-3"
                                          alt="Icon Location"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="1"
                                          width="12"
                                          height="12"
                                          style={{
                                            color: 'transparent',
                                          }}
                                        />
                                      </div>
                                      <div
                                        className="flex-1 truncate mb-[2px]"
                                        title="Kab. Klaten">
                                        {product.location}
                                      </div>
                                    </div>

                                    <div className="flex items-center justify-start space-x-2">
                                      {product.rating > 0 && (
                                        <>
                                          <div className="flex gap-1">
                                            <PiStarFill color="orange" />
                                            <span className="text-xs flex-nowrap">
                                              {product.rating}
                                            </span>
                                          </div>
                                          <div className="flex items-center text-border Card-text FieldBorder !h-[14px] text-gray-400 text-lg">
                                            •
                                          </div>
                                        </>
                                      )}
                                      <div className="text-xs flex-nowrap text-brPrimary">
                                        <span>Terjual&nbsp;</span>
                                        <span>
                                          {formatNumber(product.sold)}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="w-full px-2 pb-2 space-x-2">
                                    <div className="flex gap-1 flex-wrap select-none">
                                      {product.pdn && (
                                        <div className="bg-[#E5F0E9] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] ">
                                          <div
                                            className="flex items-center justify-center space-x-1"
                                            style={{
                                              color: 'rgb(21, 118, 49)',
                                            }}>
                                            <span className="font-medium font-ubuntu ">
                                              PDN
                                            </span>
                                          </div>
                                        </div>
                                      )}

                                      {product.tkdn > 0 && (
                                        <div className="bg-[#E5F0E9] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] ">
                                          <div
                                            className="flex items-center justify-center space-x-1"
                                            style={{
                                              color: 'rgb(21, 118, 49)',
                                            }}>
                                            <span className="font-medium font-ubuntu ">
                                              TKDN {product.tkdn}%
                                            </span>
                                          </div>
                                        </div>
                                      )}

                                      <div className="bg-[#E6F4F7] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] ">
                                        <div
                                          className="flex items-center justify-center space-x-1"
                                          style={{
                                            color: product.pkp
                                              ? 'rgb(0, 146, 172)'
                                              : 'rgb(68, 75, 85)',
                                          }}>
                                          <span className="font-medium font-ubuntu ">
                                            {product.pkp ? 'PKP' : 'non PKP'}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>

        {/* layar kecil */}
        <div className="relative flex md:hidden flex-row w-full h-full">
          <div className="relative flex-1 w-full md:w-[994px] h-full">
            <div className="slider-container h-full">
              <Slider {...settings}>
                <Link to="https://padiumkm.id/collection/koleksi-produk-semarak-alat-tulis-kantor">
                  <div
                    className="px-2 pt-[1px] pb-[4px] h-full"
                    style={{ width: '100%', display: 'inline-block' }}>
                    <div
                      className="flex flex-col justify-start h-full w-[173px] rounded-lg overflow-hidden bg-white font-ubuntu border border-[#DEE3ED] shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]"
                      style={{
                        backgroundColor: 'rgb(11, 43, 70)',
                        height: '360px',
                      }}>
                      <div className="block w-full h-full relative">
                        <img
                          alt="Image section banner"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="100vw"
                          className="w-full h-full object-contain"
                          src={promoImg} // Pastikan promoImg adalah URL yang valid
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                {products.map((product) => {
                  // const imageUrl = `http://localhost:8080/${product.image.replace(
                  //   /\\/g,
                  //   '/'
                  // )}`;

                  const discountPrice =
                    product.price - product.price * (product.discount / 100);

                  const formatNumber = (num) => {
                    if (num >= 1000) {
                      return (
                        (num / 1000)
                          .toFixed(1)
                          .replace(/\.0$/, '')
                          .replace('.', ',') + ' rb'
                      ); // Format ribuan
                    }
                    return num;
                  };

                  return (
                    product.promo && (
                      <div key={product.id} className="slider-item">
                        <div
                          className="px-2 pt-[1px] pb-[4px] h-full"
                          tabIndex={-1}
                          style={{ width: '100%', display: 'inline-block' }}>
                          <div
                            className="flex flex-col justify-start h-full w-[173px] rounded-lg overflow-hidden bg-white font-ubuntu border border-[#DEE3ED] shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]"
                            style={{ height: '360px' }}
                            title={product.product_name}>
                            <Link className="block w-full h-full">
                              <div className="cursor-pointer flex flex-col items-center justify-between w-full h-full">
                                <div className="flex-none w-[173px] h-[150px] mb-2 relative aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 text-sm select-none">
                                  <div
                                    className="h-[150px] flex items-center justify-center relative"
                                    style={{ width: '173px' }}>
                                    <img
                                      src={
                                        product.image ||
                                        'https://placehold.co/600x400'
                                      }
                                      alt={product.product_name}
                                      className="w-full h-full object-cover"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                      style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        inset: '0px',
                                        objectFit: 'cover',
                                        objectPosition: 'center center',
                                        color: 'transparent',
                                      }}
                                    />
                                  </div>
                                  <div className="absolute bottom-0 left-0">
                                    <span className="text-center p-1 font-ubuntu text-[10px] font-[500px] bg-brPrimary text-white">
                                      UMKM
                                    </span>
                                  </div>
                                </div>
                                <div className="px-2 mb-2 w-full select-none">
                                  <div className="border-[#DEE3ED] border flex gap-x-1 items-center px-1.5 py-1 rounded-xl w-fit">
                                    <img
                                      src="https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&w=16&q=75"
                                      alt="store"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="1"
                                      width="16"
                                      height="16"
                                      style={{
                                        color: 'transparent',
                                      }}
                                    />
                                    <span className="truncate w-[120px] text-[#444B55] font-medium font-ubuntu  text-[10px]">
                                      {product.store_name}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex flex-col items-center justify-between w-full h-full select-none">
                                  <div className="w-full px-2 pb-2 space-y-1 text-paletteText-primary">
                                    <div className="flex flex-col gap-y-1">
                                      <span
                                        className="truncate font-normal leading-[21px] line-clamp-1 text-[14px] text-wrap"
                                        title="Stapler Besar BANTEX Warna White">
                                        {product.product_name}
                                      </span>
                                      <span className="text-sm font-bold text-wrap">
                                        {discountPrice.toLocaleString('id-ID', {
                                          style: 'currency',
                                          currency: 'IDR',
                                        })}
                                      </span>
                                    </div>

                                    {product.discount > 0 && (
                                      <div className="flex items-center">
                                        <div className="bg-[#FDE5E4] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] ">
                                          <div
                                            className="flex items-center justify-center space-x-1"
                                            style={{
                                              color: 'rgb(241, 89, 79)',
                                            }}>
                                            <span className="font-medium font-ubuntu ">
                                              {product.discount}%
                                            </span>
                                          </div>
                                        </div>
                                        <div className="overflow-hidden text-[#8F95B2] text-xs line-through flex-nowrap text-ellipsis ml-2">
                                          {product.price.toLocaleString(
                                            'id-ID',
                                            {
                                              style: 'currency',
                                              currency: 'IDR',
                                            }
                                          )}
                                        </div>
                                      </div>
                                    )}

                                    <div className="text-xs flex items-center justify-start gap-x-0.5 h-[22px]">
                                      <div className="flex-none w-[15px]">
                                        <img
                                          src="https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap-pin.4e753bcc.svg&w=16&q=75"
                                          className="!w-3 !h-3"
                                          alt="Icon Location"
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="1"
                                          width="12"
                                          height="12"
                                          style={{
                                            color: 'transparent',
                                          }}
                                        />
                                      </div>
                                      <div
                                        className="flex-1 truncate mb-[2px]"
                                        title="Kab. Klaten">
                                        {product.location}
                                      </div>
                                    </div>

                                    <div className="flex items-center justify-start space-x-2">
                                      {product.rating > 0 && (
                                        <>
                                          <div className="flex gap-1">
                                            <PiStarFill color="orange" />
                                            <span className="text-xs flex-nowrap">
                                              {product.rating}
                                            </span>
                                          </div>
                                          <div className="flex items-center text-border Card-text FieldBorder !h-[14px] text-gray-400 text-lg">
                                            •
                                          </div>
                                        </>
                                      )}
                                      <div className="text-xs flex-nowrap text-brPrimary">
                                        <span>Terjual&nbsp;</span>
                                        <span>
                                          {formatNumber(product.sold)}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="w-full px-2 pb-2 space-x-2">
                                    <div className="flex gap-1 flex-wrap select-none">
                                      {product.pdn && (
                                        <div className="bg-[#E5F0E9] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] ">
                                          <div
                                            className="flex items-center justify-center space-x-1"
                                            style={{
                                              color: 'rgb(21, 118, 49)',
                                            }}>
                                            <span className="font-medium font-ubuntu ">
                                              PDN
                                            </span>
                                          </div>
                                        </div>
                                      )}

                                      {product.tkdn > 0 && (
                                        <div className="bg-[#E5F0E9] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] ">
                                          <div
                                            className="flex items-center justify-center space-x-1"
                                            style={{
                                              color: 'rgb(21, 118, 49)',
                                            }}>
                                            <span className="font-medium font-ubuntu ">
                                              TKDN {product.tkdn}%
                                            </span>
                                          </div>
                                        </div>
                                      )}

                                      <div className="bg-[#E6F4F7] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] ">
                                        <div
                                          className="flex items-center justify-center space-x-1"
                                          style={{
                                            color: product.pkp
                                              ? 'rgb(0, 146, 172)'
                                              : 'rgb(68, 75, 85)',
                                          }}>
                                          <span className="font-medium font-ubuntu ">
                                            {product.pkp ? 'PKP' : 'non PKP'}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
