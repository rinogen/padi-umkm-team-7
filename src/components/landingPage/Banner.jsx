import banner1 from '../../assets/images/banner/banner-1.png';
import banner2 from '../../assets/images/banner/banner-2.png';
import banner3 from '../../assets/images/banner/banner-3.png';

const Banner = () => {
  return (
    <div className="container-layout">
      <div className="flex w-full md:gap-x-2 lg:gap-x-3 xl:gap-x-3">
        <div className="relative w-full lg:w-3/5">
          <div className="h-[calc(100vw/2)] lg:max-h-[calc(100vh/5)] w-full">
            <img
              alt="Main Banner"
              loading="lazy"
              decoding="async"
              className="rounded-lg"
              sizes="100vw"
              src={banner1}
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
        </div>
        <div className="hidden w-2/5 lg:flex lg:flex-col lg:gap-4 xl:gap-4">
          <div className="overflow-hidden relative w-full lg:h-36 xl:h-40">
            <img
              alt="Mini Banner img"
              loading="lazy"
              decoding="async"
              className="rounded-lg"
              sizes="100vw"
              src={banner2}
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
          <div className="overflow-hidden relative w-full lg:h-36 xl:h-40">
            <img
              alt="Mini Banner img"
              loading="lazy"
              decoding="async"
              className="rounded-lg"
              sizes="100vw"
              src={banner3}
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
        </div>
      </div>
      <div className="text-right mt-2">
        <a href="https://padiumkm.id/promo">
          <span className="text-sm lg:text-md font-bold text-brPrimary text-right cursor-pointer">
            Lihat Semua Promo
          </span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
