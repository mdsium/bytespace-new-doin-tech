import React from 'react';
import { brandLogos } from '../../data/brands';

export const TrustedBrands: React.FC = () => {
  return (
    <section className="bg-[#F5F5F6] w-full py-8 sm:py-8 lg:py-0 lg:h-[202px] flex items-center justify-center px-4 sm:px-6 lg:px-12 select-none">
      <div className="w-full max-w-[1240px] mx-auto flex items-center justify-center">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:items-center lg:justify-between items-center justify-items-center gap-6 sm:gap-8 lg:gap-10 w-full">
          {brandLogos.map((brand, index) => (
            <div
              key={brand.id}
              className={`flex items-center justify-center shrink-0 transition-opacity hover:opacity-80 duration-150 ${
                index === brandLogos.length - 1 ? 'col-span-2 sm:col-span-1 flex justify-center' : ''
              }`}
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="w-28 xs:w-32 sm:w-36 lg:w-[167px] h-7 sm:h-8 lg:h-[41px] object-contain select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
