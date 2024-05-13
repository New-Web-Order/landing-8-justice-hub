'use client';
import React from 'react';
// import Button from '@/components/ui/button';
import data from '@/dictionaries/en.json';
import LinkCard from '@/components/ui/link-card';

const Links = () => {
  return (
    <section
      className='w-screen flex items-center justify-center px-3 md:px-8 2xl:px-0 py-9 sm:py-14 lg:py-28'
      aria-label='Social-Media-Links-Section'
      id='features'
    >
      <div className='w-full max-w-screen-xl grid md:grid-cols-2 xl:grid-cols-4 md:gap-12 gap-6 justify-items-center '>
        {data.links.cardInfo.map((option, index) => (
          <LinkCard
            key={index}
            title={option.title}
            image={option.image}
            description={option.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Links;
