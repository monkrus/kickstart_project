// const HDWalletProvider = require("truffle-hdwallet-provider");
// const Web3 = require("web3");
// const compiledFactory = require("./build/CampaignFactory.json");
//
// const provider = new HDWalletProvider(
//   "party carpet bike crew allow genre patch blast arrest smooth pony verb",
//   "https://rinkeby.infura.io/XJKCZLlRCaDishmA9wdX"
// );
// const web3 = new Web3(provider);
//
// const deploy = async () => {
//   const accounts = await web3.eth.getAccounts();
//
//   console.log("Attempting to deploy from account", accounts[0]);
//
//   const result = await new web3.eth.Contract(
//     JSON.parse(compiledFactory.interface)
//   )
//     .deploy({ data: compiledFactory.bytecode })
//     .send({ gas: "1000000", from: accounts[0] });
//
//   console.log("Contract deployed to", result.options.address);
// };
// deploy();

const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "party carpet bike crew allow genre patch blast arrest smooth pony verb",
  "https://rinkeby.infura.io/XJKCZLlRCaDishmA9wdX"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempt to deploy", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "2000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
