"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const web3 = new Web3(window.web3.currentProvider);
var web3 = void 0; //let reassignes the variable
//configuring web3 with a provider from metamask
//Web3 is a library, web3 is an instance

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //the script is running on the browser (instead of server)
  //AND user is runing metamask
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //We are on the server OR the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/XJKCZLlRCaDishmA9wdX");
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLEFBQU87Ozs7OztBQUVQO0FBQ0EsSUFBSSxZQUFKLEEsR0FBVTtBQU5WO0FBQ0E7O0FBTUEsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFDdkU7QUFDQTtBQUNBO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUM3QjtBQUpELE9BSU8sQUFDTDtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2YsQUFFRjtTQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2pCO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9raWNrc3RhcnQifQ==