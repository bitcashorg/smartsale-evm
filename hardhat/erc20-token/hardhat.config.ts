require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.7.6",
  networks: {
    eosevm_testnet: {
      accounts: [process.env.PK],
      url: "https://api.testnet.evm.eosnetwork.com",
      chainId: 15557,
    },
    eosevm_mainnet: {
      accounts: [process.env.PK],
      url: "https://api.evm.eosnetwork.com",
      chainId: 17777,
    },
    sepolia: {
      accounts: [process.env.PK],
      url: "https://rpc.sepolia.org",
      chainId: 11155111,
    },
    arbitrumOne: {
      accounts: [process.env.PK],
      url: 'https://arb1.arbitrum.io/rpc',
      chainId: 42161
    },
    arbitrumSepolia: {
      accounts: [process.env.PK],
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      chainId: 421614
    },
  },
};
