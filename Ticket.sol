pragma solidity ^0.8.17;

/**
 * @title Decentralized Ticket Platform
 * @author BitBlock
 * @notice Please use at your own risk.
 * @dev The contract is a stub and not yet implemented.
 */

contract ticket {

    address public ticketId = 0x00000000000000abcdef;
    event public ticketEvent;
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

    modifier inState(State state_) {
      require(state == state);
      _;
    }

    event Aborted();
    event PurchaseConfirmed();
    event Received();
    event SellerRefunded();

    constructor() payable {
      // TODO
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
      condition(msg.value)
      payable
    {
      emit PurchaseConfirmed();
      buyer = payable(msg.sender);
      state = State.Locked;
    }

    function confirmReceived()
      external
      onlyBuyer
      inState(State.Locked)
    {
      emit ItemReceived();
      state = State.Released;

      buyer.transfer(value);
    }

    function refundSeller()
      external
      onlySeller
      inState(State.Released)
    {
      emit SellerRefunded();
      state = State.Inactive;

      seller.transfer(value)
    }

    function returnTicket(string token) public {
        ticketEvent.quantity++;
        tickets.push(token);
        //send money to seller
    }
}
