import { ReactNode } from 'react';

import { WagmiProvider } from 'wagmi';
import { eosEvmTestnet } from 'smartsale-chains'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'


const queryClient = new QueryClient()

export const wagmiConfig = getDefaultConfig({
  appName: 'Bitcash Launchpad',
  projectId: 'YOUR_PROJECT_ID',
  chains: [{ ...eosEvmTestnet, fees: undefined }],
  // wallets: [],
  // transports: {
  //   [eosEvmTestnet.id]: http() 
  // }
})

export function Providers({children}:{children: ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}
