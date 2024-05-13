'use client';
import React from 'react';
// import NextImage from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface PricingCardProps {
  title: string;
  price: string;
  pointOne: string;
  pointTwo: string;
  pointThree: string;
  pointFour: string;
  cta: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  pointOne,
  pointTwo,
  pointThree,
  pointFour,
  cta
}) => {
  return (
    <div className='w-full max-w-sm flex flex-col gap-16 items-center border border-fg-border rounded-xl'>
      <div className='w-full py-8 bg-primary-text flex justify-center rounded-tr-xl rounded-tl-xl'>
        <h1 className='text-3xl md:text-2xl lg:text-3xl font-bold text-bg-base'>
          {title}
        </h1>
      </div>
      <p className='text-5xl font-bold text-fg-text-contrast'>{price}</p>

      <div className='w-full flex flex-col items-center gap-3 '>
        <p className='font-normal text-base md:text-sm lg:text-base text-fg-text text-center'>
          {pointOne}
        </p>
        <p className='font-normal text-base md:text-sm lg:text-base text-fg-text text-center'>
          {pointTwo}
        </p>
        <p className='font-normal text-base md:text-sm lg:text-base text-fg-text text-center'>
          {pointThree}
        </p>
        <p className='font-normal text-base md:text-sm lg:text-base text-fg-text text-center'>
          {pointFour}
        </p>
      </div>
      <div className='flex gap-2 w-fit items-center pb-20'>
        <p className='text-xs font-semibold text-fg-default cursor-pointer'>
          {cta}
        </p>
        <FaArrowRight className='cursor-pointer text-fg-text-contrast h-3 w-5'/>
      </div>
    </div>
  );
};

export default PricingCard;
