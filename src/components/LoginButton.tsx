'use client';
import WalletWrapper from './WalletWrapper';

export default function LoginButton() {
  return (
    <WalletWrapper
    className="min-w-[90px] border-2 rounded-full font-raleway"
    text="Buy Now"
    withWalletAggregator={true}
  />
  );
}