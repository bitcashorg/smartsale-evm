import { TestnetUSDCred } from 'smartsale-contracts'
import { eosEvmTestnet } from 'smartsale-env'
import { createWalletClient } from 'viem'
import { appenv } from '~/config'
import { Address, http } from 'viem'

export async function issueTokens(to: Address, amount: bigint) {
  console.log('issueTokens', {
    args: [to, amount],
  })

  try {
    const walletClient = createWalletClient({
      chain: eosEvmTestnet,
      transport: http(),
      key: appenv.evm.issuerKey,
      account: appenv.evm.issuerAccount,
    })
    return walletClient.writeContract({
      address: TestnetUSDCred.address,
      abi: TestnetUSDCred.abi,
      functionName: 'issue',
      args: [to, amount],
    })
  } catch (error) {
    console.log((error as Error).message)
    return null
  }
}
