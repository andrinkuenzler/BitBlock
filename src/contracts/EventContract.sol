pragma solidity ^0.5.16;

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
    Ticket[] private eventTickets;

    constructor(string memory name, uint256 price, uint256 quantity) public {
        eventId = uint(keccak256(abi.encodePacked(name))) % (10 ** 8);
        eventName = name;
        eventPrice = price;
        eventQuantity = quantity;
        generateTickets();
    }

    function generateTickets() internal {
        for(uint i = 0; i < eventQuantity; i++){
            eventTickets.push(new Ticket(this));
        }
    }

    function buyTicket() public payable {
        require(msg.value > eventPrice);

        Ticket ticket = getAvailableTicket();
        ticket.setState(Ticket.State.Locked);
        //send Ticket to buyer
        //send money to event creator
        eventQuantity--;
    }

    // function getEntry(Ticket ticket) public returns(bool) {
    //     string memory hash; //hash des tokens rechnen;
    //     bool entry = false; //prüfen ob dieser token verkauft wurde, abgleich mit array;
    //     return entry;
    // }

    function returnTicket(Ticket ticket) public {
        eventTickets.push(ticket);
        //send money to seller
    }

    function getQuantity() public view returns(uint) {

    }

    // Note that this function has a maximum complexity of O(n)
    function getAvailableTicket() public returns(Ticket) {
        for (uint256 i = 0; i < eventTickets.length; i++) {
        if (eventTickets[i].checkState(Ticket.State.Created))
            return eventTickets[i];
        }
        revert('No Tickets available');
    }

    function getEventName() public returns(string memory) {
        return eventName;
    }
}

contract Ticket {

        uint256 public ticketId;
        EventContract private ticketEvent;
        address payable public seller;
        address payable public buyer;

        enum State { Created, Locked, Released, Inactive }
        State public state;

        modifier onlyBuyer() {
          require(msg.sender == buyer);
          _;
        }

        modifier onlySeller() {
          require(msg.sender == seller);
          _;
        }

        modifier inState(State _state) {
          require(state == _state);
          _;
        }

        function checkState(State _state) public returns(bool) {
            if (state == _state)
                return true;
            return false;
        }

        event Aborted();
        event Confirmed();
        event Received();
        event Refunded();

        constructor(EventContract eventContract) public payable {
          ticketId = uint(keccak256(abi.encodePacked(eventContract.getEventName()))) % (10 ** 8);
          ticketEvent = eventContract;
        }

        function abort()
          external
          onlySeller
          inState(State.Created)
        {
          emit Aborted();
          state = State.Inactive;

          seller.transfer(address(this).balance);
        }

        function confirmPurchase()
          external
          inState(State.Created)
          payable
        {
          emit Confirmed();
          buyer = msg.sender;
          state = State.Locked;
        }

        function confirmReceived()
          external
          onlyBuyer
          inState(State.Locked)
        {
          emit Received();
          state = State.Released;

          buyer.transfer(ticketId);
        }

        function refundSeller()
          external
          onlySeller
          inState(State.Released)
        {
          emit Refunded();
          state = State.Inactive;

          seller.transfer(ticketId);
        }

        function returnTicket() public returns(Ticket) {
            return this;
            //send money to seller
        }

        function setState(State _state) public {
            state = _state;
        }

        function getTicketEventName() public returns(string memory) {
            return ticketEvent.getEventName();
        }
}
