'use client'

import { AuctionData, useAuctionData } from '@/hooks/use-auction-data'
import { isAddress } from 'viem'

export function AuctionDebug({ auctionId }: { auctionId: number }) {
  const { data: auction } = useAuctionData(auctionId)

  if (!auction) return <div>Loading Auction Debug...</div>
  const auctionText = convertToYamlText(auction)

  return <AuctionText>{auctionText}</AuctionText>
}

function AuctionText({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 my-10 font-mono text-green-500 bg-black">
      {children}
    </div>
  )
}

// Function to format token amounts
const formatTokenAmount = (amount = '', decimals = 6) => {
  return (Number(amount) / Math.pow(10, decimals)).toFixed(2) // Adjust precision as needed
}

const convertToYamlText = (data: AuctionData): JSX.Element[] => {
  return Object.entries(data).map(([key, value]) => {
    if (value instanceof Date) {
      value = value.toLocaleString()
    } else if (
      typeof value === 'string' &&
      !isNaN(Number(value)) &&
      !isAddress(value)
    ) {
      value = formatTokenAmount(value)
    }

    return isAddress(value) ? (
      <div key={key}>
        {key}:{' '}
        <a
          href={`https://explorer.testnet.evm.eosnetwork.com/address/${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      </div>
    ) : (
      <div key={key}>
        {key}: {value}
      </div>
    )
  })
}