'use client';
import React from 'react';
// import Button from '@/components/ui/button';
import HilightCard from '@/components/ui/hilight-card';
import NextImage from 'next/image';
import Divider from '@/public/assets/icons/divider.svg';
import data from '@/dictionaries/en.json';

const Hilights = () => {
  return (
    <section
      className='w-full flex flex-col items-center py-9 sm:py-14 lg:py-24 px-3 md:px-8 2xl:px-0 bg-primary-bg-subtle'
      aria-label='Hilights-Section'
      id='highlights'
    >
      <div className='max-w-screen-xl flex flex-col items-center gap-y-9 lg:gap-y-16 '>
        <div className='w-full flex flex-col items-center gap-3 lg:gap-6 max-w-2xl'>
          <h1 className='font-bold text-3xl lg:text-6xl text-fg-text-contrast text-center'>
            {data.hilights.mainHeading}
          </h1>
          <NextImage alt='divider' src={Divider} />
          <p className='font-medium text-xl text-primary-text text-center'>
            {data.hilights.mainText}
          </p>
        </div>
        <div className='w-full flex flex-wrap justify-center gap-6 md:gap-12 items-start'>
          {data.hilights.cardInfo.map((option, index) => (
            <HilightCard
              key={index}
              title={option.title}
              description={option.description}
              image={option.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hilights;
