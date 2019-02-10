(function() {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var contract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "key",
				"type": "address"
			}
		],
		"name": "getBookName",
		"outputs": [
			{
				"name": "bookName",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "transacs",
		"outputs": [
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "buyer",
				"type": "string"
			},
			{
				"name": "author",
				"type": "string"
			},
			{
				"name": "bookName",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "key",
				"type": "address"
			},
			{
				"name": "bookName",
				"type": "string"
			},
			{
				"name": "buyer",
				"type": "string"
			},
			{
				"name": "author",
				"type": "string"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "key",
				"type": "address"
			}
		],
		"name": "getBuyer",
		"outputs": [
			{
				"name": "buyer",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]).at("0xba3ebc6bc43be5b158e9190ef4625f6422a09a87");
    var key = "0xF9c22321C90d0eE01Eba8fB4dBB1f7F40c061F5D";
    var bookName = contract.getBookName(key);
    var buyer = contract.getBuyer(key);
    console.log(key,bookName.toString(10),buyer.toString(10));
})();
