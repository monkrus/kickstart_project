const path = require("path");
const solc = require("solc");
//file system on local compuiter
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
// file removal in fs-extra version
fs.removeSync(buildPath);
//path to the file
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
//get a content of file
const source = fs.readFileSync(campaignPath, "utf8");
// output from the compiler
const output = solc.compile(source, 1).contracts;

console.log(output);
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
