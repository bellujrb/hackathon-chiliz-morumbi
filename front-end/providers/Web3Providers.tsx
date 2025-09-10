"use client";

import '@rainbow-me/rainbowkit/styles.css';
import {
  connectorsForWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  walletConnectWallet,
  metaMaskWallet,
  injectedWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { WagmiProvider, createConfig } from 'wagmi';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { http } from 'viem';
import { defineChain } from 'viem';
import React from "react";
import { NETWORK_CONFIG } from '@/lib/contracts';

// Define Chiliz Testnet chain
const chilizTestnet = defineChain({
  id: NETWORK_CONFIG.chainId,
  name: NETWORK_CONFIG.name,
  nativeCurrency: {
    decimals: 18,
    name: 'CHZ',
    symbol: 'CHZ',
  },
  rpcUrls: {
    default: {
      http: [NETWORK_CONFIG.rpcUrl],
    },
  },
  blockExplorers: {
    default: {
      name: 'Chiliz Explorer',
      url: NETWORK_CONFIG.explorerUrl,
    },
  },
  testnet: true,
});

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recomendado',
      wallets: [
        metaMaskWallet,
        injectedWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    appName: 'FanifyChiliz',
    projectId: '3ac832407e6d725a1f6d2bdae6c1d049',
  }
);

const config = createConfig({
  connectors,
  chains: [chilizTestnet],
  transports: {
    [chilizTestnet.id]: http(NETWORK_CONFIG.rpcUrl),
  },
});

const queryClient = new QueryClient();

export default function Web3Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 