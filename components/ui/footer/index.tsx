'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
// import NextImage from 'next/image';
import Link from 'next/link';
import Data from '@/dictionaries/en.json';
// import Logo from '@/public/assets/icons/bike-logo.svg';
// import { FaLinkedin, FaYoutube } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
import ThemeToggle from '../next-theme-toggle';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Footer = () => {
  const router = useRouter();

  return (
    <div className='w-full flex justify-center px-3.5 lg:px-6 py-9 lg:py-16   bg-primary-1200 '>
      <div className='w-full max-w-screen-xl flex flex-col md:items-center gap-y-3'>
        <div className='w-full flex flex-col md:items-center gap-3 pb-6'>
          <div
            onClick={() => router.push('/')}
            className='w-fit flex cursor-pointer items-end gap-x-1.5'
          >
            <p className='font-medium text-xl text-primary-text '>
              {Data.navbar.logoText}
            </p>
          </div>

          <div className='w-full flex items-center md:justify-center gap-3 sm:gap-6'>
            <a className='text-sm font-medium text-fg-text-contrast cursor-pointer text-center'>
              {Data.footer[4]}
            </a>
            <a className='text-sm font-medium text-fg-text-contrast cursor-pointer text-center'>
              {Data.footer[5]}
            </a>
            <a className='text-sm font-medium text-fg-text-contrast cursor-pointer text-center'>
              {Data.footer[6]}
            </a>
          </div>
        </div>

        <div className='w-full flex-col md:flex-row flex justify-between md:items-center gap-y-3 border-t border-bg-900 pt-8'>
          <Link
            href={'https://www.newweborder.co/'}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm font-medium text-fg-text-contrast cursor-pointer'
          >
            © 2023 newweborder. All rights reserved.
          </Link>
          <div className='w-fit flex gap-3 md:gap-12 items-center'>
          {Data.footer.links.map((item) => (
                        <a key={item.name} href={item.href}>
                          <p
                            className={classNames(
                              'text-sm font-medium text-fg-text-contrast hover:text-primary-text transition duration-300 ease-in-out '
                            )}
                            aria-current={item.name ? 'page' : undefined}
                          >
                            {item.name}
                          </p>
                        </a>
                      ))}
            <div className='hidden md:flex w-fit h-fit'>
          <ThemeToggle/>
          </div>

          </div>
        </div>

        <p className='flex w-full items-center text-sm text-fg-text-contrast cursor-pointer'>
              Realised by{' '}
              <a
                href='https://www.newweborder.co/'
                target='_blank'
                className='hover:cursor-pointer hover:bg-black/90 py-px rounded-sm hover:text-[#23FA4B] hover:transition-color ease-in-out duration-300 text-fg-text-contrast'
              >
                ◬ ɴᴇᴡ ᴡᴇʙ ᴏʀᴅᴇʀ_
              </a>
          </p>
          <div className='flex w-full justify-start md:hidden  '>
          <ThemeToggle/>
          </div>
      </div>

    </div>
  );
};

export default Footer;
