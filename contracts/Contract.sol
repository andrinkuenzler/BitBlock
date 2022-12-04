pragma solidity ^0.8.13;

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

    // seller calls this function with ETH value defined in transaction, amount has to be calculated on website
    function createEvent(string memory name, uint256 price, uint256 quantity) external payable {
        // seller has to call function with at least the following amount
        require(msg.value >= (price * quantity / 10));

        // declare variables
        eventId = uint(keccak256(abi.encodePacked(name))) % (10 ** 8);
        eventName = name;
        eventPrice = price;
        eventQuantity = quantity;
        eventQuantityInitial = quantity;
        
        // creator of event is assigned seller
        seller = payable(msg.sender);

        // mint tokens
        BitBlockToken.createToken(quantity);
    }

    function buyTicket() public payable {
        // buyer has to call function with at least the price for one ticket
        require(msg.value > eventPrice);
        require(eventQuantity > 0);

        // send Ticket to buyer
        BitBlockToken.transferFrom(buyer, msg.sender, 1);

        // decrease available ticket counter
        eventQuantity--;
    }

    function returnTicket() public payable {
        // send token from sender to company wallet
        BitBlockToken.transferFrom(msg.sender, buyer, 1);
        
        // increment available ticket counter
        eventQuantity++;
        
        // return money to seller
        payable(msg.sender).transfer(eventPrice);
    }

    function getEntry() public returns(bool) {
        // if token is sent to copany wallet, entry is granted
        return BitBlockToken.transferFrom(msg.sender, buyer, 1);
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

    receive() external payable {}

    fallback() external payable {}

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function getAddress() public view returns(address) {
        return address(this);
    }
}


// https://www.quicknode.com/guides/smart-contract-development/how-to-create-and-deploy-an-erc20-token

contract ERC20Interface {
    function totalSupply() public returns (uint);
    function balanceOf(address tokenOwner) public returns (uint balance);
    function allowance(address tokenOwner, address spender) public returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);
 
    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}
 
contract BitBlockToken is ERC20Interface {
    string public symbol = "BBT";
    string public name = "BitBlock Ticket";
    uint8 public decimals = 2;
    uint public _totalSupply;
 
    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;
 
    function createToken(uint256 quantity) public {
        require(msg.sender == EventContract.getAddress());
        _totalSupply += quantity;
        balances[msg.sender] = _totalSupply;
        emit Transfer(address(0), msg.sender, quantity);
    }
 
    // will govern the total supply of the token
    function totalSupply() public returns (uint) {
        return _totalSupply - balances[address(0)];
    }
 
    // will check the balance of a wallet address
    function balanceOf(address tokenOwner) public returns (uint balance) {
        return balances[tokenOwner];
    }
 
    // will execute the transfer of tokens from the total supply to users
    function transfer(address to, uint tokens) public returns (bool success) {
        balances[msg.sender] = safeSub(balances[msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
 
    // will check if the total supply has the amount of token which needs to be allocated to a user
    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }
 
    // will facilitate the transfer of token between users
    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        balances[from] = safeSub(balances[from], tokens);
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(from, to, tokens);
        return true;
    }
 
    // will check if a user has enough balance to perform the transfer to another user
    function allowance(address tokenOwner, address spender) public returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }
 
    // executes the transactions of buying and spending of tokens
    function approveAndCall(address spender, uint tokens, bytes data) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        ApproveAndCallFallBack(spender).receiveApproval(msg.sender, tokens, this, data);
        return true;
    }
 
    // prevent accounts from directly sending ETH to the contract, this prevents the users from spending gas on transactions in which they forget to mention the function name
    fallback() external payable {
        revert();
    }
}