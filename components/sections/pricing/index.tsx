'use client';
import React from 'react';
import data from '@/dictionaries/en.json';
import NextImage from 'next/image';
import Divider from '@/public/assets/icons/divider.svg';
import PricingCard from '@/components/ui/pricing-card';

const Pricing = () => {
  return (
    <section
      className='w-screen flex flex-col items-center justify-center px-4 md:px-8 2xl:px-0 py-18 py-9 sm:py-14 lg:py-24 gap-9 lg:gap-16 bg-primary-bg-subtle'
      aria-label='Pricings-Section'
      id='pricing'
    >
      <div className='w-full flex flex-col items-center gap-3 lg:gap-6 max-w-2xl'>
        <h1 className='font-bold text-3xl lg:text-6xl text-fg-text-contrast text-center'>
          {data.pricing.mainHeading}
        </h1>
        <NextImage alt='divider' src={Divider} />
        <p className='font-medium text-lg text-primary-text text-center'>
          {data.pricing.mainText}
        </p>
      </div>
      <div className='w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center '>
        {data.pricing.cardInfo.map((option, index) => (
          <PricingCard
            key={index}
            title={option.title}
            price={option.price}
            pointOne={option.pointOne}
            pointTwo={option.pointTwo}
            pointThree={option.pointThree}
            pointFour={option.pointFour}
            cta={option.cta}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
