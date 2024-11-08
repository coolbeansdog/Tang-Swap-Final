'use client';

import { useAccount } from 'wagmi';
import SwapComponents from 'src/components/SwapComponents';
import tangcat from 'src/images/tang_base_ball_bat.png';
import LoginButton from 'src/components/LoginButton';
import { FundButton } from '@coinbase/onchainkit/fund';
 


export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-full max-w-full flex-col px-1 md:w-[1008px]">
  <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
  </section>

  <div className="flex items-right gap-3 justify-end md:justify-end">
    <LoginButton />   
  </div>

  <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-custom px-2 py-4 md:grow">
    <div className="flex flex-col md:flex-row items-center justify-center">
      <img 
        src={tangcat.src} 
        alt="Description of the image" 
        className="w-40 md:w-52 h-auto mb-6 md:mb-0 md:mr-6" // Tailwind responsive classes
      />
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        TANG CAT 
        <br />
        <hr className="my-2 border-black w-1/2 mx-auto" /> {/* Adjust width to center on all devices */}
        <span className="block text-3xl md:text-5xl">汤 猫</span> {/* Removed extra spaces and used block */}
      </h1>
    </div>
    <SwapComponents />
    <h1>Short on Funds?</h1>
    <FundButton className='bg-[#AACBF2] text-black' text={'Fund Wallet'} hideIcon={true}  popupSize='sm'/>
  </section>

  <div className="text-center md:text-right">
    Made with Onchain Kit
  </div>
</div>

  );
}
