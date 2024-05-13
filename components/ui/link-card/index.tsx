'use client';
import React from 'react';
// import Link from 'next/link';
import NextImage from 'next/image';

interface LinkCardProps {
  title: string;
  image: string;
  description: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ image, title, description }) => {
  return (
    <div className='w-full max-w-72 flex flex-col gap-6 items-center'>
      <NextImage
        src={image}
        alt='social media icon'
        width={500}
        height={500}
        className='w-12 h-12 '
        aria-label={`Justice-Hub ${title} icon`}
      />

      <div className='w-full flex flex-col items-center gap-3 '>
        <h1 className='font-bold text-2xl text-fg-text-contrast'>{title}</h1>
        <p className='font-normal text-lg text-fg-text text-center'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default LinkCard;
