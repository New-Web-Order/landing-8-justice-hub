'use client';
import React from 'react';
// import Button from '@/components/ui/button';
import NextImage from 'next/image';
import DoubleQuotes from '@/public/assets/icons/double-quotes.svg';

interface TestimonialCardProps {
  name: string;
  status: string;
  description: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  status,
  description,
  image
}) => {
  return (
    <div className='min-w-80 flex flex-col gap-4 items-start p-5 rounded-2xl bg-default box-shadow h-56'>
      <NextImage
        src={DoubleQuotes}
        alt='double-quotes'
        aria-label='double-quotes'
      />
      <p className='font-normal text-sm text-fg-text'>{description}</p>
      <div className='flex w-fit h-fit gap-3 items-center'>
        <NextImage
          src={image}
          alt='double-quotes'
          width={500}
          height={500}
          className='w-10 h-10'
        />
        <div className='flex flex-col w-fit'>
          <h1 className='text-lg text-fg-text-contrast font-bold'>{name}</h1>
          <p className='text-xs font-normal text-fg-text'>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
