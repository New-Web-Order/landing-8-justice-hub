'use client';
import React from 'react';
import NextImage from 'next/image';
import FeatureOneImage from '@/public/assets/images/feature-section.webp';
import Signature from '@/public/assets/icons/signature.svg';
import data from '@/dictionaries/en.json';

const FeatureOne = () => {
  return (
    <section
      className='w-full flex items-center justify-center px-3 md:px-8 2xl:px-0 py-9 sm:py-14 lg:py-24'
      aria-label='Feature-Section'
      id='about'
    >
      <div className='w-full max-w-screen-xl flex items-center justify-between flex-col md:flex-row gap-9'>
        <div className='flex flex-1 justify-center flex-col gap-4 lg:gap-9 max-w-xl'>
          <h1 className='text-3xl font-bold text-fg-text-contrast'>
            {data.featureOne.heading}
          </h1>
          <p className='text-lg text-fg-text-contrast font-medium'>
            {data.featureOne.subText}
          </p>
          <NextImage alt='signature' src={Signature} />
        </div>
        <div className='flex flex-1 items-center justify-center md:justify-start w-full max-h-[21.25] max-w-[30.55rem]'>
          <NextImage
            src={FeatureOneImage}
            alt='Feature Image'
            className='w-full h-full rounded-xl'
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
