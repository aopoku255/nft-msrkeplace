require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
// require("dotenv").config();
const fs = require("fs");
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
const privateKey = fs.readFileSync(".secret").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      accounts: [privateKey],
    },
    matic: {
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      accounts: [privateKey],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/9dbca744123c47318eb3569869fbd48e",
      accounts: [privateKey],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
