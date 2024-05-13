import React from 'react';
import WelcomeBanner from '@/components/sections/welcome-banner';
import Links from '@/components/sections/links';
import Hilights from '@/components/sections/highlights';
import FeatureOne from '@/components/sections/features';
import Pricing from '@/components/sections/pricing';


const Homepage = () => {
  return (
    <main className='flex flex-col w-screen items-center'>
      <WelcomeBanner />
      <Links />
      <Hilights />  
      <FeatureOne/>
      <Pricing/>

    </main>
  );
};
export default Homepage;
