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
    BitBlockToken private token;

    function createEvent(string memory name, uint256 price, uint256 quantity) external payable {
        // seller has to call function with at least the following amount
        require(msg.value >= (price * quantity * 1000000000000000000 / 100));

        // declare variables
        eventId = uint(keccak256(abi.encodePacked(name))) % (10 ** 8);
        eventName = name;
        eventPrice = price;
        eventQuantity = quantity;
        eventQuantityInitial = quantity;
        
        // creator of event is assigned seller
        seller = payable(msg.sender);
        
        // mint tokens for event
        token = BitBlockToken(0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512);
        token.createToken(quantity);
    }

    function buyTicket(uint256 amount) public payable {
        // buyer has to call function with at least the price for the tickets
        require(msg.value >= (eventPrice * amount * 1000000000000000000));

        // at least amount of tickets have to be available
        require(eventQuantity >= amount);

        // send tickets to buyer
        token.transfer(msg.sender, amount);

        // decrease available ticket counter
        eventQuantity = eventQuantity - amount;
    }

    function returnTicket(uint256 amount) public payable {
        // allowance must be at least amount
        //require(token.allowance(msg.sender, address(this)) >= amount);

        // send token from sender to company wallet
        address receiver = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
        token.approveTransaction(msg.sender, amount);
        token.transferFrom(msg.sender, receiver, amount);
        
        // return money to seller
        payable(msg.sender).transfer(eventPrice * amount * 1000000000000000000);
        
        // increment available ticket counter
        eventQuantity = eventQuantity + amount;
    }

    function getEntry() public returns(bool) {
        // allowance must be at least amount
        //require(token.allowance(msg.sender, address(this)) >= 1);

        // if token is sent to company wallet, entry is granted
        address receiver = 0x90F79bf6EB2c4f870365E785982E1f101E93b906;
        token.approveTransaction(msg.sender, 1);
        return token.transferFrom(msg.sender, receiver, 1);
    }

    function withdraw() public {
        // caller must be creator of event
        require(seller == msg.sender);

        // can only be withdrawn once
        require(withdrawn == false);

        // send money to event creator
        withdrawn = true;
        seller.transfer((eventQuantityInitial - eventQuantity) * eventPrice * 1000000000000000000);
    }

    receive() external virtual payable {}

    fallback() external virtual payable {}
}

contract BitBlockToken is ERC20 {
    constructor() ERC20("BitBlockToken", "BBT") {}

    function createToken(uint256 quantity) public {
        address receiver = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
        _mint(receiver, quantity);
    }

    // possible security issue
    function approveTransaction(address owner, uint256 amount) public {
        // darf nur vom EventContract aufgerufen werden
        address spender = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
        require(msg.sender == spender);

        // increase Allowance
        _approve(owner, spender, allowance(owner, spender) + amount);
    }
}