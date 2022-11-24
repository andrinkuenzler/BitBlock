pragma solidity ^0.8.17;

/**
 * @title Decentralized Ticket Platform
 * @author BitBlock
 * @notice Please use at your own risk.
 * @dev The contract is a stub and not yet implemented.
 */

contract event {

  string public eventName;
  uint256 public eventPrice;
  uint256 private eventQuantity;
  Ticket[] public eventTickets;

  constructor(string name, uint256 price, uint256 quantity) {
    eventName = name;
    eventPrice = price;
    eventQuantity = quantity;
    eventTickets = generateTokens()
  }

  function createEvent(string eventName, uint256 ticketPrice, uint256 ticketQuantity) public payable {
      require(msg.value > (ticketPrice * ticketQuantity * 0.1));
      name = eventName;
      price = ticketPrice;
      quantity = ticketQuantity;
      generateTokens();
  }

  function generateTokens() internal {
      for(uint i = 0; i < quantity; i++){
          // TODO Ticket[] befüllen
      }
  }

  function buyTicket() public payable {
      require(msg.value > price);
      quantity--;
      tickets.pull();
      //send Ticket to buyer
      //send money to event creator
  }

  function getEntry(string Token) public {
      string hash = //hash des tokens rechnen;
      bool entry = //prüfen ob dieser token verkauft wurde, abgleich mit array;
      return entry;
  }

  function returnTicket(string token) public {
      quantity++;
      tickets.push(token);
      //send money to seller
  }

  function getQuantity() public view returns(uint) {

  }

  function validateTicket(Ticket ticket) {
    require(ticket.eventName == eventName);
    _;
  }
}
