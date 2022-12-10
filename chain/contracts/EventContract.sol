// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
* @title Decentralized Ticket Platform
* @author BitBlock
* @notice Please use at your own risk.
* @dev The contract is a stub and not yet implemented.
*/

contract EventContract {

    uint256 private eventId;
    string private eventName;
    uint256 private eventPrice;
    uint256 private eventQuantity;
    uint256 private eventQuantityInitial;
    address payable internal seller;
    address payable internal buyer;
    bool private withdrawn;
    BitBlockToken public token;

    // seller calls this function with ETH value defined in transaction, amount has to be calculated on website
    function createEvent(string memory name, uint256 price, uint256 quantity) external payable {
        // seller has to call function with at least the following amount
        //require(msg.value >= (price * quantity / 10));

        // declare variables
        eventId = uint(keccak256(abi.encodePacked(name))) % (10 ** 8);
        eventName = name;
        eventPrice = price;
        eventQuantity = quantity;
        eventQuantityInitial = quantity;
        
        // creator of event is assigned seller
        seller = payable(msg.sender);
        
        token = BitBlockToken(0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f);
        token.createToken(quantity);
    }

    function buyTicket() public payable {
        // buyer has to call function with at least the price for one ticket
        require(msg.value > eventPrice);
        require(eventQuantity > 0);

        // send Ticket to buyer
        token.transferFrom(buyer, msg.sender, 1);

        // decrease available ticket counter
        eventQuantity--;
    }

    function returnTicket() public payable {
        // send token from sender to company wallet
        token.transferFrom(msg.sender, buyer, 1);
        
        // increment available ticket counter
        eventQuantity++;
        
        // return money to seller
        payable(msg.sender).transfer(eventPrice);
    }

    function getEntry() public returns(bool) {
        // if token is sent to copany wallet, entry is granted
        return token.transferFrom(msg.sender, buyer, 1);
    }

    function withdraw() public {
        // caller must be creator of event
        require(seller == msg.sender);

        // can only be withdrawn once
        require(withdrawn == false);

        // send money to event creator
        withdrawn = true;
        seller.transfer((eventQuantityInitial - eventQuantity) * eventPrice);
    }

    receive() external virtual payable {}

    fallback() external virtual payable {}
}

contract BitBlockToken is ERC20 {
    uint public _totalSupply;
 
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowed;

    constructor() ERC20("BitBlockToken", "BBT") {}

    function createToken(uint256 quantity) public {
        _totalSupply += quantity;
        address receiver = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
        _mint(receiver, quantity);
    }
}