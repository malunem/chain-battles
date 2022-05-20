const { hexStripZeros } = require("ethers/lib/utils")

const main = async () => {
  try {
    const nftContractFactory = await hexStripZeros.ethers.getContractFactory("ChainBattles");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    console.log("Contract deployed to:", nftContract.address);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();