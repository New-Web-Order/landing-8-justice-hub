'use client';
import React from 'react';
import Button from '@/components/ui/button';
import data from '@/dictionaries/en.json';

const WelcomeBanner = () => {
  return (
    <section
      className='w-screen h-[95dvh] flex items-center justify-center px-4 md:px-8 2xl:px-0'
      style={{
        backgroundImage: `url('/assets/images/welcome-banner-image-three.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: '100vw',
        top: 'calc(-80px)'
      }}
      aria-label='Welcome-Banner'
      id='banner'
    >
      <div className='w-full max-w-screen-xl flex flex-col gap-9 z-10'>
        <div className='flex flex-col gap-6 max-w-[30.75rem] lg:max-w-[38.75rem]'>
          <h1 className='font-bold text-4xl md:text-5xl lg:text-7xl text-banner-text '>
            {data.heroSection.heading}
          </h1>
          <p className='font-medium text-sm lg:text-xl text-banner-text '>
            {data.heroSection.subheading}
          </p>
          <a
            href='/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1.5 w-fit'
          >
            <Button shape='filled'>{data.heroSection.buttonText}</Button>
            <Button shape='surface'>{data.heroSection.buttonTextTwo}</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
