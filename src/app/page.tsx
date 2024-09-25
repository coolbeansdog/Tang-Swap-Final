'use client';

import { useAccount } from 'wagmi';
import SwapComponents from 'src/components/SwapComponents';
import Image from 'next/image';
import tangcat from 'src/images/tangcat_clean.png';
import LoginButton from 'src/components/LoginButton';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        
      </section>
      <div className="flex items-center gap-3 justify-end">
            <LoginButton />
      </div>
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 px-2 py-4 md:grow">
        <div>
        <h1 className="text-4xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          $TANG Swapper
        </h1>
        </div>
        <div className="flex w-full items-center justify-center mt-[-50px] mb-[-20px]">
        
          <Image 
            src={tangcat} 
            alt="tangcat" 
            width={500} 
            height={200} 
            style={{objectFit: "contain"}} 
            
          />
         
        </div>

  
        <SwapComponents />  
      
      </section>
      <div>
      Made with Onchain Kit
      </div>
    </div>
  );
}
