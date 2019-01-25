(function() {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var contract = web3.eth.contract([{
            "constant": true,
            "inputs": [{
                "name": "name",
                "type": "string"
            }],
            "name": "get",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "name": "name",
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
        }
    ]).at("0x34b6c114a8cfed2dd7db5025cc1e6069d28f9aab");

    var name = "이순신";
    var salary = contract.get(name);

    console.log(name,salary.toString(10));
})();
