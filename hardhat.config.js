require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/071df09081404312b56d559a554d2f4e",
      accounts: [
        `0x58f435089b739041a9ea7ad7789414b2ad0be9eb84a13c256a00e0f8bad1c0da`,
      ],
    },
    // hardhat: {
    //   chainId: 1337, // This can be any unique number for your local network
    // },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
