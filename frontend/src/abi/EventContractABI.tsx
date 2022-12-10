export const EventContractABI = [
    "function createEvent(string memory name, uint256 price, uint256 quantity) external payable",
    "function buyTicket() public payable",
    "function returnTicket() public payable",
    "function getEntry() public returns(bool)",

    "function getBalance() public view returns(uint)",
    "function getAddress() public view returns(address)"
];

export const ERC20ABI = [
    "function allowance(address tokenOwner, address spender) public virtual returns (uint remaining)",
    "function balanceOf(address tokenOwner) public virtual returns (uint balance))",
    "function totalSupply() public virtual returns (uint)",
    "function transfer(address to, uint tokens) public virtual returns (bool success)",
    "function transferFrom(address from, address to, uint tokens) public virtual returns (bool success)",
    "event Transfer(address indexed from, address indexed to, uint tokens)",
    "event Approval(address indexed tokenOwner, address indexed spender, uint tokens)",
    "function approve(address spender, uint tokens) public virtual returns (bool success)",
    "function createToken(uint256 quantity) public"
];