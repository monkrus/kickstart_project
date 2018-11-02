//configuring web3 with a provider from metamask
//Web3 is a library, web3 is an instance

import Web3 from "web3";

//const web3 = new Web3(window.web3.currentProvider);
let web3; //let reassignes the variable
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //the script is running on the browser (instead of server)
  //AND user is runing metamask
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/XJKCZLlRCaDishmA9wdX"
  );
  web3 = new Web3(provider);
}

export default web3;
