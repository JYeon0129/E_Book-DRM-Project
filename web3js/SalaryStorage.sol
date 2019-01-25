pragma solidity ^0.4.0;

contract SalaryStorage {
  mapping(string => uint) salary;

  function set(string name, uint amount) public{
    salary[name] = amount;
  }

  function get(string name) public constant returns (uint){
    return salary[name];
  }
}
