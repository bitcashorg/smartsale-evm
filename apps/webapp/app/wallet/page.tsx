import { AuctionOrders } from '@/components/pages/auction/auction-orders'
import { DepositCard } from '@/components/pages/wallet/deposit-card'
import { TransactionsTable } from '@/components/pages/wallet/transactions-table'
import { BalancesTable } from '@/components/pages/wallet/balances-table'
import { WithdrawCard } from '@/components/pages/wallet/withdraw-card'
import React from 'react'

export default function WalletPage() {
  return (
    <div className="mb-20 flex size-full min-h-[512px] max-w-[100vw] flex-col gap-16 px-2">
      <div className="space-between flex flex-col gap-5 md:flex-row">
        <div className="md:w-2/3">
          <h1 className="mb-4 text-2xl font-bold">Wallet</h1>
          <BalancesTable />
        </div>
        <div className="flex w-full flex-col gap-5 md:w-1/3">
          <DepositCard />
          <WithdrawCard />
        </div>
      </div>

      <div>
        <React.Suspense fallback={<div>Loading ...</div>}>
          <TransactionsTable />
        </React.Suspense>
      </div>

      <div>
        <React.Suspense fallback={<div>Loading ...</div>}>
          <AuctionOrders />
        </React.Suspense>
      </div>
    </div>
  )
}
