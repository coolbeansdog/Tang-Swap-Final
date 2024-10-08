'use client';

import { useAccount } from 'wagmi';
import SwapComponents from 'src/components/SwapComponents';
import tangcat from 'src/images/cartoon_tang.png';
import LoginButton from 'src/components/LoginButton';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
      </section>
      <div className="flex items-right gap-3 justify-end">
            <LoginButton />
      </div>
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-custom px-2 py-4 md:grow">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={tangcat.src} // Replace with your image URL
          alt="Description of the image" 
          style={{ width: '200px', height: 'auto', marginRight: '20px', marginBottom: '70px' }} // Adjust width and margin as needed
        />
        <h1 className="text-5xl font-bold">
          TANG CAT 
          <br />
          <hr style={{ margin: '10px 0', borderColor: '#000000' }} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;汤&nbsp;猫
        </h1>
      </div>
        <SwapComponents /> 
      </section>
      <div>
      Made with Onchain Kit
      </div>
    </div>
  );
}
