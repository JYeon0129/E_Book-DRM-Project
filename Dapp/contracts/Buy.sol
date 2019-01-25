pragma solidity ^0.4.17;

contract Buy {
  function getBuyerAddress() public constant returns (address){
        return msg.sender;
    }
/*
  // 구매자
  struct Buyer{
    uint[10] myBookIds;   // 내가 산 책의 아이디들 - 비밀키 획득 X
    uint index=0;
  }
  mapping(address => Buyer) public buyers;

  // Buy a book
  function buy(uint bookId) public returns (uint){

    require(bookId >= 0 && bookId <=10);
    Buyer buyer = buyers[msg.sender];
    buyer.myBookIds[buyer.index++] = bookId;

    return bookId;
  }

  // Retrieving the buyers
  function getBuyers() public view returns (address[16]){
    return buyers;
  }
  */

}
