'use client'

import { APIClient, Name } from '@wharfkit/antelope'
import {
  AbiProvider,
  SigningRequest,
  SigningRequestCreateArguments,
  SigningRequestEncodingOptions
} from 'eosio-signing-request'
import pako from 'pako'
import { smartsaleEnv } from 'smartsale-env'

const eos = new APIClient({
  url: 'https://eos.greymass.com'
})

export const esrOptions: SigningRequestEncodingOptions = {
  abiProvider: {
    getAbi: async account => {
      const response = await eos.v1.chain.get_abi(account.toString())
      return response.abi
    }
  } as AbiProvider,
  zlib: pako
}

export async function genLoginSigningRequest(
  uuid: string = crypto.randomUUID()
) {
  const req = createSigntureRequest({
    action: {
      account: 'accounts.bk',
      name: 'login',
      authorization,
      data: {
        account: '............1'
      }
    },
    info: {
      uuid
    }
  })
  return req
}

export async function genBitusdDepositSigningRequest(
  amount: number | bigint | string,
  address: string
) {
  const req = createSigntureRequest({
    action: {
      account: 'bkbbanktest3',
      name: 'stbtransfer',
      authorization,
      data: {
        from: '............1',
        to: 'gaboesquivel',
        memo: `pair_id:1 address:${address}`,
        quantity: { quantity: `${amount} BITUSD`, contract: 'bkbtokentest' }
      }
    }
  })
  return req
}

export async function genUsdtDepositSigningRequest(
  amount: number | bigint | string
) {
  const account = smartsaleEnv.test.usdt.find(
    c => c.chainType === 'antelope'
  )?.address
  if (!account) throw new Error('usdt account not found')

  const req = createSigntureRequest({
    action: {
      account,
      name: 'transfer',
      authorization,
      data: {
        from: '............1',
        to: 'gaboesquivel',
        memo: `address:0x`,
        quantity: `${amount} USDT`
      }
    }
  })
  return req
}

async function createSigntureRequest({
  info = {
    uuid: crypto.randomUUID()
  },
  action
}: Pick<SigningRequestCreateArguments, 'info' | 'action'>) {
  console.log(
    JSON.stringify({
      action,
      info
    })
  )
  return SigningRequest.create(
    {
      action,
      info,
      callback: {
        url: 'https://bitcash-launchpad.vercel.app/api/esr',
        background: true
      }
    },
    esrOptions
  )
}

const authorization = [
  {
    actor: '............1',
    permission: '............2'
  }
]

export async function getEosBalance(account: string) {
  const response = await eos.v1.chain.get_currency_balance(
    'eosio.token',
    account,
    'EOS'
  )
  return response[0].value.toString()
}

export async function getBitUsdBalance(account: string) {
  const response = await eos.v1.chain.get_table_rows({
    code: 'bank.bk',
    table: 'stablev2',
    scope: Name.from(account)
  })
  return response.rows[0]?.balance.quantity.replace('BITUSD', '') || 'O'
}
