import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { FaChevronRight } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { categoryAlpahet, categoryData } from '../data/category';

const Category = () => {
  const [activeTab, setActiveTab] = useState('A');

  const handleTab = (tab) => {
    setActiveTab(tab);
    const section = document.getElementById(`section-${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const groupedCategoty = categoryData.reduce((group, category) => {
    const firstLetter = category.name[0].toUpperCase();
    if (!group[firstLetter]) {
      group[firstLetter] = [];
    }
    group[firstLetter].push(category);
    return group;
  }, {});

  const sortedLetter = Object.keys(groupedCategoty).sort();

  // Function to handle active tab based on scroll
  const handleScroll = () => {
    sortedLetter.forEach((letter) => {
      const section = document.getElementById(`section-${letter}`);
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        setActiveTab(letter);
      }
    });
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Layout>
        <div className="container-layout mt-0">
          <div className="w-full">
            <div className="flex items-center justify-start space-x-2">
              <span className="text-gray-400 font-[400] font-ubuntu  ">
                <Link to="/">Beranda</Link>
              </span>
              <span className="px-1">
                <FaChevronRight className="text-gray-400" />
              </span>
              <span className="text-gray-700 font-[400] font-ubuntu  ">
                <Link to="/">Semua Kategori</Link>
              </span>
            </div>
          </div>

          {/* Category List */}
          <>
            <div className="flex flex-col h-full pt-4 pb-14 w-full">
              <div className="w-full">
                <>
                  <div
                    className="border-b border-border Card-divider flex flex-wrap bg-white z-40"
                    style={{
                      position: 'sticky',
                      top: '118px',
                    }}>
                    <ul className="flex flex-nowrap -mb-px overflow-x-auto no-scrollbar">
                      {categoryAlpahet.map((tab, index) => (
                        <li key={index} className="mr-2">
                          <div
                            onClick={() => handleTab(tab)}
                            className={`py-6 px-4 text-sm text-center cursor-pointer whitespace-nowrap ${
                              activeTab === tab
                                ? 'text-brPrimary rounded-t-lg border-b-2 border-brPrimary active font-bold'
                                : 'text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-600'
                            }`}
                            aria-current="page">
                            {tab}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>

                <div className="py-5">
                  <div className="w-full p-2">
                    <div className="space-y-4 snap-y">
                      <div className="space-y-4 snap-start">
                        {sortedLetter.map((letter) => (
                          <div
                            key={letter}
                            id={`section-${letter}`}
                            className="space-y-6 pb-2 border-b section-with-offset">
                            <div className="bg-brPrimary opacity-40 text-white font-bold text-[34px] w-16 h-16 flex items-center justify-center rounded-[4px]">
                              {letter}
                            </div>
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                              {groupedCategoty[letter].map(
                                (category, index) => (
                                  <div key={index} className="space-y-4">
                                    <Link to="/category">
                                      <span className="font-[700] text-txtBody cursor-pointer hover:text-brPrimary">
                                        {category.name}
                                      </span>
                                    </Link>
                                    <div className="space-y-1">
                                      {category.data.map((item, index) => (
                                        <div key={index}>
                                          <Link to="/category">
                                            <span className="font-[400] text-txtBody cursor-pointer hover:text-brPrimary">
                                              {item}
                                            </span>
                                          </Link>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </Layout>
    </>
  );
};

export default Category;
