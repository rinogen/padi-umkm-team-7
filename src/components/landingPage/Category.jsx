import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import react-slick
import { categoryLinks } from '../../data/category';
import { useState, useEffect } from 'react';

const Category = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Anggap mobile jika layar di bawah 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col container-layout">
      <div className="flex justify-between">
        <div className="flex items-center w-full justify-between lg:w-fit lg:justify-start pb-3 lg:py-4">
          <div className="text-[22px] font-bold">Kategori</div>
        </div>
      </div>

      {isMobile ? (
        <Slider {...sliderSettings}>
          {categoryLinks.map((category, index) => (
            <Link key={index} to="/category">
              <div className="w-full max-w-[103px] p-3 bg-white rounded shadow border border-[#dee3ed] flex-col justify-start items-center inline-flex min-h-[150px]">
                <div className="self-stretch flex-col justify-center items-center inline-flex">
                  <div className="h-auto pt-3.5 pb-2 flex flex-col justify-end items-center gap-2">
                    <img
                      alt={category.name}
                      className="w-[60px] h-[60px]"
                      src={category.image}
                    />
                    <div className="w-full text-center text-txtBody text-xs font-medium">
                      {category.name}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-1 sm:gap-2 md:gap-3">
          {categoryLinks.map((category, index) => (
            <Link key={index} to="/category">
              <div className="w-full max-w-[103px] p-[0.5px] bg-white rounded shadow border border-[#dee3ed] flex-col justify-start items-center inline-flex">
                <div className="self-stretch flex-col justify-center items-center inline-flex">
                  <div className="h-auto pt-3.5 pb-2 flex flex-col justify-end items-center gap-2">
                    <img
                      alt={category.name}
                      className="w-[60px] h-[60px]"
                      src={category.image}
                    />
                    <div className="w-full text-center text-txtBody text-xs font-medium">
                      {category.name}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
