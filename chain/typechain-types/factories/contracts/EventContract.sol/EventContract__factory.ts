/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EventContract,
  EventContractInterface,
} from "../../../contracts/EventContract.sol/EventContract";

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "buyTicket",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "createEvent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntry",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "returnTicket",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612af6806100206000396000f3fe6080604052600436106200007f5760003560e01c80634a52bba511620000555780634a52bba514620001035780639e9580f6146200010f578063dcd55f90146200012f578063edca914c146200015f5762000087565b806312065fe0146200008957806338cc483114620000b95780633ccfd60b14620000e95762000087565b366200008757005b005b3480156200009657600080fd5b50620000a16200016b565b604051620000b091906200077c565b60405180910390f35b348015620000c657600080fd5b50620000d162000173565b604051620000e09190620007de565b60405180910390f35b348015620000f657600080fd5b50620001016200017b565b005b6200010d6200029e565b005b6200012d6004803603810190620001279190620009a2565b620003cf565b005b3480156200013c57600080fd5b50620001476200057c565b60405162000156919062000a3a565b60405180910390f35b620001696200064d565b005b600047905090565b600030905090565b3373ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614620001d657600080fd5b60001515600660149054906101000a900460ff16151514620001f757600080fd5b6001600660146101000a81548160ff021916908315150217905550600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc60025460035460045462000263919062000a86565b6200026f919062000ac1565b9081150290604051600060405180830381858888f193505050501580156200029b573d6000803e3d6000fd5b50565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016040518463ffffffff1660e01b8152600401620003229392919062000bba565b6020604051808303816000875af115801562000342573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000368919062000c28565b50600360008154809291906200037e9062000c5a565b91905055503373ffffffffffffffffffffffffffffffffffffffff166108fc6002549081150290604051600060405180830381858888f19350505050158015620003cc573d6000803e3d6000fd5b50565b6305f5e10083604051602001620003e7919062000d20565b6040516020818303038152906040528051906020012060001c6200040c919062000d68565b600081905550826001908162000423919062000fcc565b5081600281905550806003819055508060048190555033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604051620004889062000753565b604051809103906000f080158015620004a5573d6000803e3d6000fd5b50600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632d571cc4826040518263ffffffff1660e01b81526004016200054391906200077c565b600060405180830381600087803b1580156200055e57600080fd5b505af115801562000573573d6000803e3d6000fd5b50505050505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016040518463ffffffff1660e01b8152600401620006029392919062000bba565b6020604051808303816000875af115801562000622573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000648919062000c28565b905090565b60025434116200065c57600080fd5b6000600354116200066c57600080fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163360016040518463ffffffff1660e01b8152600401620006f093929190620010b3565b6020604051808303816000875af115801562000710573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000736919062000c28565b50600360008154809291906200074c90620010f0565b9190505550565b6119a2806200111f83390190565b6000819050919050565b620007768162000761565b82525050565b60006020820190506200079360008301846200076b565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620007c68262000799565b9050919050565b620007d881620007b9565b82525050565b6000602082019050620007f56000830184620007cd565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620008648262000819565b810181811067ffffffffffffffff821117156200088657620008856200082a565b5b80604052505050565b60006200089b620007fb565b9050620008a9828262000859565b919050565b600067ffffffffffffffff821115620008cc57620008cb6200082a565b5b620008d78262000819565b9050602081019050919050565b82818337600083830152505050565b60006200090a6200090484620008ae565b6200088f565b90508281526020810184848401111562000929576200092862000814565b5b62000936848285620008e4565b509392505050565b600082601f8301126200095657620009556200080f565b5b813562000968848260208601620008f3565b91505092915050565b6200097c8162000761565b81146200098857600080fd5b50565b6000813590506200099c8162000971565b92915050565b600080600060608486031215620009be57620009bd62000805565b5b600084013567ffffffffffffffff811115620009df57620009de6200080a565b5b620009ed868287016200093e565b935050602062000a00868287016200098b565b925050604062000a13868287016200098b565b9150509250925092565b60008115159050919050565b62000a348162000a1d565b82525050565b600060208201905062000a51600083018462000a29565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000a938262000761565b915062000aa08362000761565b925082820390508181111562000abb5762000aba62000a57565b5b92915050565b600062000ace8262000761565b915062000adb8362000761565b925082820262000aeb8162000761565b9150828204841483151762000b055762000b0462000a57565b5b5092915050565b6000819050919050565b600062000b3762000b3162000b2b8462000799565b62000b0c565b62000799565b9050919050565b600062000b4b8262000b16565b9050919050565b600062000b5f8262000b3e565b9050919050565b62000b718162000b52565b82525050565b6000819050919050565b600062000ba262000b9c62000b968462000b77565b62000b0c565b62000761565b9050919050565b62000bb48162000b81565b82525050565b600060608201905062000bd16000830186620007cd565b62000be0602083018562000b66565b62000bef604083018462000ba9565b949350505050565b62000c028162000a1d565b811462000c0e57600080fd5b50565b60008151905062000c228162000bf7565b92915050565b60006020828403121562000c415762000c4062000805565b5b600062000c518482850162000c11565b91505092915050565b600062000c678262000761565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362000c9c5762000c9b62000a57565b5b600182019050919050565b600081519050919050565b600081905092915050565b60005b8381101562000cdd57808201518184015260208101905062000cc0565b60008484015250505050565b600062000cf68262000ca7565b62000d02818562000cb2565b935062000d1481856020860162000cbd565b80840191505092915050565b600062000d2e828462000ce9565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600062000d758262000761565b915062000d828362000761565b92508262000d955762000d9462000d39565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000de857607f821691505b60208210810362000dfe5762000dfd62000da0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830262000e687fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000e29565b62000e74868362000e29565b95508019841693508086168417925050509392505050565b600062000ead62000ea762000ea18462000761565b62000b0c565b62000761565b9050919050565b6000819050919050565b62000ec98362000e8c565b62000ee162000ed88262000eb4565b84845462000e36565b825550505050565b600090565b62000ef862000ee9565b62000f0581848462000ebe565b505050565b5b8181101562000f2d5762000f2160008262000eee565b60018101905062000f0b565b5050565b601f82111562000f7c5762000f468162000e04565b62000f518462000e19565b8101602085101562000f61578190505b62000f7962000f708562000e19565b83018262000f0a565b50505b505050565b600082821c905092915050565b600062000fa16000198460080262000f81565b1980831691505092915050565b600062000fbc838362000f8e565b9150826002028217905092915050565b62000fd78262000ca7565b67ffffffffffffffff81111562000ff35762000ff26200082a565b5b62000fff825462000dcf565b6200100c82828562000f31565b600060209050601f8311600181146200104457600084156200102f578287015190505b6200103b858262000fae565b865550620010ab565b601f198416620010548662000e04565b60005b828110156200107e5784890151825560018201915060208501945060208101905062001057565b868310156200109e57848901516200109a601f89168262000f8e565b8355505b6001600288020188555050505b505050505050565b6000606082019050620010ca600083018662000b66565b620010d96020830185620007cd565b620010e8604083018462000ba9565b949350505050565b6000620010fd8262000761565b91506000820362001113576200111262000a57565b5b60018203905091905056fe60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f426974426c6f636b546f6b656e000000000000000000000000000000000000008152506040518060400160405280600381526020017f424254000000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000324565b508060049081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b611587806200041b6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063395093511161009757806395d89b411161006657806395d89b41146102ae578063a457c2d7146102cc578063a9059cbb146102fc578063dd62ed3e1461032c576100f5565b806339509351146102005780633eaaf86b146102305780635c6581651461024e57806370a082311461027e576100f5565b806323b872dd116100d357806323b872dd1461016657806327e235e3146101965780632d571cc4146101c6578063313ce567146101e2576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b61010261035c565b60405161010f9190610dcb565b60405180910390f35b610132600480360381019061012d9190610e86565b6103ee565b60405161013f9190610ee1565b60405180910390f35b610150610411565b60405161015d9190610f0b565b60405180910390f35b610180600480360381019061017b9190610f26565b61041b565b60405161018d9190610ee1565b60405180910390f35b6101b060048036038101906101ab9190610f79565b61044a565b6040516101bd9190610f0b565b60405180910390f35b6101e060048036038101906101db9190610fa6565b610462565b005b6101ea6104a2565b6040516101f79190610fef565b60405180910390f35b61021a60048036038101906102159190610e86565b6104ab565b6040516102279190610ee1565b60405180910390f35b6102386104e2565b6040516102459190610f0b565b60405180910390f35b6102686004803603810190610263919061100a565b6104e8565b6040516102759190610f0b565b60405180910390f35b61029860048036038101906102939190610f79565b61050d565b6040516102a59190610f0b565b60405180910390f35b6102b6610555565b6040516102c39190610dcb565b60405180910390f35b6102e660048036038101906102e19190610e86565b6105e7565b6040516102f39190610ee1565b60405180910390f35b61031660048036038101906103119190610e86565b61065e565b6040516103239190610ee1565b60405180910390f35b6103466004803603810190610341919061100a565b610681565b6040516103539190610f0b565b60405180910390f35b60606003805461036b90611079565b80601f016020809104026020016040519081016040528092919081815260200182805461039790611079565b80156103e45780601f106103b9576101008083540402835291602001916103e4565b820191906000526020600020905b8154815290600101906020018083116103c757829003601f168201915b5050505050905090565b6000806103f9610708565b9050610406818585610710565b600191505092915050565b6000600254905090565b600080610426610708565b90506104338582856108d9565b61043e858585610965565b60019150509392505050565b60066020528060005260406000206000915090505481565b806005600082825461047491906110d9565b925050819055506000733c44cdddb6a900fa2b585dd299e03d12fa4293bc905061049e8183610bdb565b5050565b60006012905090565b6000806104b6610708565b90506104d78185856104c88589610681565b6104d291906110d9565b610710565b600191505092915050565b60055481565b6007602052816000526040600020602052806000526040600020600091509150505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461056490611079565b80601f016020809104026020016040519081016040528092919081815260200182805461059090611079565b80156105dd5780601f106105b2576101008083540402835291602001916105dd565b820191906000526020600020905b8154815290600101906020018083116105c057829003601f168201915b5050505050905090565b6000806105f2610708565b905060006106008286610681565b905083811015610645576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063c9061117f565b60405180910390fd5b6106528286868403610710565b60019250505092915050565b600080610669610708565b9050610676818585610965565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361077f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077690611211565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e5906112a3565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108cc9190610f0b565b60405180910390a3505050565b60006108e58484610681565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461095f5781811015610951576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109489061130f565b60405180910390fd5b61095e8484848403610710565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109cb906113a1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3a90611433565b60405180910390fd5b610a4e838383610d31565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ad4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acb906114c5565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bc29190610f0b565b60405180910390a3610bd5848484610d36565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4190611531565b60405180910390fd5b610c5660008383610d31565b8060026000828254610c6891906110d9565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d199190610f0b565b60405180910390a3610d2d60008383610d36565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d75578082015181840152602081019050610d5a565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d9d82610d3b565b610da78185610d46565b9350610db7818560208601610d57565b610dc081610d81565b840191505092915050565b60006020820190508181036000830152610de58184610d92565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e1d82610df2565b9050919050565b610e2d81610e12565b8114610e3857600080fd5b50565b600081359050610e4a81610e24565b92915050565b6000819050919050565b610e6381610e50565b8114610e6e57600080fd5b50565b600081359050610e8081610e5a565b92915050565b60008060408385031215610e9d57610e9c610ded565b5b6000610eab85828601610e3b565b9250506020610ebc85828601610e71565b9150509250929050565b60008115159050919050565b610edb81610ec6565b82525050565b6000602082019050610ef66000830184610ed2565b92915050565b610f0581610e50565b82525050565b6000602082019050610f206000830184610efc565b92915050565b600080600060608486031215610f3f57610f3e610ded565b5b6000610f4d86828701610e3b565b9350506020610f5e86828701610e3b565b9250506040610f6f86828701610e71565b9150509250925092565b600060208284031215610f8f57610f8e610ded565b5b6000610f9d84828501610e3b565b91505092915050565b600060208284031215610fbc57610fbb610ded565b5b6000610fca84828501610e71565b91505092915050565b600060ff82169050919050565b610fe981610fd3565b82525050565b60006020820190506110046000830184610fe0565b92915050565b6000806040838503121561102157611020610ded565b5b600061102f85828601610e3b565b925050602061104085828601610e3b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061109157607f821691505b6020821081036110a4576110a361104a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110e482610e50565b91506110ef83610e50565b9250828201905080821115611107576111066110aa565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611169602583610d46565b91506111748261110d565b604082019050919050565b600060208201905081810360008301526111988161115c565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006111fb602483610d46565b91506112068261119f565b604082019050919050565b6000602082019050818103600083015261122a816111ee565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061128d602283610d46565b915061129882611231565b604082019050919050565b600060208201905081810360008301526112bc81611280565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006112f9601d83610d46565b9150611304826112c3565b602082019050919050565b60006020820190508181036000830152611328816112ec565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061138b602583610d46565b91506113968261132f565b604082019050919050565b600060208201905081810360008301526113ba8161137e565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061141d602383610d46565b9150611428826113c1565b604082019050919050565b6000602082019050818103600083015261144c81611410565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006114af602683610d46565b91506114ba82611453565b604082019050919050565b600060208201905081810360008301526114de816114a2565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600061151b601f83610d46565b9150611526826114e5565b602082019050919050565b6000602082019050818103600083015261154a8161150e565b905091905056fea2646970667358221220f140032b9bc9483c552bd1c3e9e8156033665a196c584ffaac01035c6720663f64736f6c63430008110033a264697066735822122018dd2f74fefbb266a7cf215dacee73b1f6be40ad315937dfb7000e9be9ad145964736f6c63430008110033";

type EventContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EventContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EventContract__factory extends ContractFactory {
  constructor(...args: EventContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EventContract> {
    return super.deploy(overrides || {}) as Promise<EventContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EventContract {
    return super.attach(address) as EventContract;
  }
  override connect(signer: Signer): EventContract__factory {
    return super.connect(signer) as EventContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventContractInterface {
    return new utils.Interface(_abi) as EventContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EventContract {
    return new Contract(address, _abi, signerOrProvider) as EventContract;
  }
}
