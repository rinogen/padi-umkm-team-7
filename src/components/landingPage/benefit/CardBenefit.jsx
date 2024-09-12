import { benefitLinks } from '../../../data/benefits';

const CardBenefit = () => {
  return (
    <div className="container-layout">
      <h1 className="text-2xl font-bold mb-6 mt-16">
        Keuntungan Bergabung di PaDi UMKM B2B
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefitLinks.map((benefit, index) => (
          <div
            key={index}
            className="w-full rounded-lg shadow-sm text-palette Text-primary py-4 space-y-5"
            style={{ backgroundColor: 'rgba(248, 248, 248, 1)' }}>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <img
                  alt={benefit.name}
                  loading="lazy"
                  decoding="async"
                  sizes="100vw"
                  src={benefit.image}
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
            <div className="space-y-2 px-4">
              <div className="text-base font-bold text-center">
                {benefit.name}
              </div>
              <div className="text-sm text-center">{benefit.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBenefit;
