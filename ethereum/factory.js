import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"; //importing ABI

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xC3F2e5D622f173043bE2e3A5E8535C8DA140316d"
);

export default instance;
//preconfigured instance of our CampaignFactory
