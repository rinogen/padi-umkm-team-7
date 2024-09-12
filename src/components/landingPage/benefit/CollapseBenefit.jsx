import { useState } from 'react';
import { data } from '../../../data/collapse';

const CollapseBenefit = () => {
  const [clickedIds, setClickedIds] = useState({});

  const handleClick = (id) => {
    setClickedIds((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="container-layout py-4">
      <div className="border-[1px] rounded-2xl divide-y-[1px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-6 space-y-6 cursor-pointer "
            onClick={() => handleClick(item.id)}>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold cursor-pointer">{item.title}</h2>
              {clickedIds[item.id] ? (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              )}
            </div>
            {clickedIds[item.id] && (
              <div className="opacity: 1 height: auto transition-all duration-500 ease-in-out overflow-hidden">
                <div className="space-y-6">
                  {item.content.map((element, index) =>
                    element.isFlex ? (
                      // Struktur flex jika isFlex = true
                      <div
                        key={index}
                        className="flex flex-col justify-between flex-1 lg:flex-row">
                        {element.text.map((subtextArray, subIndex) => (
                          <div key={subIndex} className="flex-1">
                            {subtextArray.map((subtext, subSubIndex) => (
                              <div
                                key={subSubIndex}
                                className="text-paletteText-primary text-sm">
                                {subtext}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Struktur biasa jika isFlex = false
                      <div key={index}>
                        {element.text.map((subtext, subIndex) => (
                          <div key={subIndex}>
                            <div className="text-paletteText-primary text-sm">
                              {subtext}
                            </div>
                            {subIndex < element.text.length - 1 && <br />}{' '}
                            {/* Break antar teks */}
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapseBenefit;
