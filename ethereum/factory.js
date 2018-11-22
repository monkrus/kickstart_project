import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"; //importing ABI

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x263227d30654d32175fa05C0a6457B4b829F617e"
);

export default instance;
//preconfigured instance of our CampaignFactory
