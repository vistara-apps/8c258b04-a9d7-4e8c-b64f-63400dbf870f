'use client';

import { Wallet } from 'lucide-react';

export function ConnectWalletButton() {
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold button-shadow hover:bg-primary/90 transition-colors duration-200"
      onClick={() => {
        // OnchainKit ConnectWallet integration will go here
        console.log('Connect wallet clicked');
      }}
    >
      <Wallet className="w-5 h-5" />
      <span className="hidden sm:inline">Connect</span>
    </button>
  );
}
