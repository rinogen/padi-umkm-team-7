const Promo = () => {
  return (
    <div className="container-layout flex flex-row justify-center space-x-3 md:space-x-4">
      <div className="flex flex-row space-x-0 md:space-x-4 w-[55%] md:w-[70%]">
        <div className="cursor-pointer rounded-lg relative w-full md:w-1/2 hidden md:block">
          <img
            src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fstatic-banner%2Fe708d09763fa6c3629cbd4d091df79.jpg&w=3840&q=80"
            className="rounded-lg object-center"
            alt="Left Side Banner 1"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
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
        <div className="cursor-pointer rounded-lg relative w-full md:w-1/2 ">
          <img
            src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fstatic-banner%2Faa84ee26c66040825a3f7460582084.jpg&w=750&q=80"
            className="rounded-lg object-center"
            alt="Left Side Banner 2"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
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

      <div className="flex flex-col space-y-3 md:space-y-4 w-[45%] md:w-[30%]">
        <div className="relative w-full pb-[40%] rounded-lg cursor-pointer">
          <img
            src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fstatic-banner%2F45583ddcd29980934b2332ef5e0246.png&w=3840&q=60"
            className="rounded-lg object-center"
            alt="Static Banner 1"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
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
        <div className="relative w-full pb-[40%] rounded-lg cursor-pointer">
          <img
            src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fstatic-banner%2Fab371851ee8047bf50792fdda79b39.png&w=750&q=60"
            className="rounded-lg object-center"
            alt="Static Banner 2"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
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
  );
};

export default Promo;
