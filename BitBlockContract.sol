pragma solidity ^0.8.17;

/**
 * @title Decentralized Ticket Platform
 * @author BitBlock
 * @notice Please use at your own risk.
 * @dev The contract is a stub and not yet implemented.
 */

contract smartContractName {
    address public contractAddress = 0x00000000000000abcdef;
    string public name;
    uint256 public price;
    uint256 public quantity;
    string[] public tickets;
    string[] public ticketHashes;

    function createEvent(string eventName, uint256 ticketPrice, uint256 ticketQuantity) public payable {
        require(msg.value > (ticketPrice * ticketQuantity * 0.1));
        name = eventName;
        price = ticketPrice;
        quantity = ticketQuantity;
        generateTokens();
    }

    function generateTokens() internal {
        for(uint i = 0; i < quantity; i++){
            string token = "Token-Number-" + i;
            tickets.push(token);
            //Hash des Tokens erstellen und in Array speichern
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
}