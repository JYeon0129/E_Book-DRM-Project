pragma solidity ^0.4.0;

contract BookStorage {

  struct bookTransac{
      uint amount;
      string buyer;
      string author;
      string bookName;
  }
  mapping(address => bookTransac) public transacs;

  function set(address key, string bookName, string buyer, string author, uint amount) public{
    bookTransac bt;
    bt.amount = amount;
    bt.bookName = bookName;
    bt.buyer = buyer;
    bt.author = author;
    transacs[key] = bt;
  }

  function getBuyer(address key) public constant returns (string buyer){
    return transacs[key].buyer;
  }
  function getBookName(address key) public constant returns (string bookName){
    return transacs[key].bookName;
  }
}
