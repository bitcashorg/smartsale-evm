import React from 'react'
import { DepositCard } from '@/components/wallet/deposit-card'
import { AuctionOrders } from '@/components/auction/auction-orders'
import { WalletBalances } from '@/components/wallet/wallet-balances'

export default function WalletPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <div className="flex flex-col gap-5 md:flex-row space-between">
            <div className="md:w-2/3">
              <h1 className="mb-4 text-2xl font-bold">Wallet</h1>
              <WalletBalances />
            </div>
            <div className="w-full md:w-1/3">
              <DepositCard />
            </div>
          </div>
          <React.Suspense fallback={<div>Loading ...</div>}>
            <AuctionOrders />
          </React.Suspense>
        </div>
      </div>
    </>
  )
}