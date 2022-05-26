/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FeeHandlerWithOracle } from "../FeeHandlerWithOracle";

export class FeeHandlerWithOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    bridgeAddress: string,
    overrides?: Overrides
  ): Promise<FeeHandlerWithOracle> {
    return super.deploy(
      bridgeAddress,
      overrides || {}
    ) as Promise<FeeHandlerWithOracle>;
  }
  getDeployTransaction(
    bridgeAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(bridgeAddress, overrides || {});
  }
  attach(address: string): FeeHandlerWithOracle {
    return super.attach(address) as FeeHandlerWithOracle;
  }
  connect(signer: Signer): FeeHandlerWithOracle__factory {
    return super.connect(signer) as FeeHandlerWithOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeHandlerWithOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FeeHandlerWithOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bridgeAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "fromDomainID",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "destinationDomainID",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "FeeCollected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FeeDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ETHReserve",
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
    name: "_bridgeAddress",
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
    name: "_feePercent",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_gasUsed",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_oracleAddress",
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
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "fromDomainID",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "destinationDomainID",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "depositData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "feeData",
        type: "bytes",
      },
    ],
    name: "calculateFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "fromDomainID",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "destinationDomainID",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "depositData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "feeData",
        type: "bytes",
      },
    ],
    name: "collectFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getRoleMemberIndex",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracleAddress",
        type: "address",
      },
    ],
    name: "setFeeOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "gasUsed",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "feePercent",
        type: "uint16",
      },
    ],
    name: "setFeeProperties",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "addrs",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "transferFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001dd738038062001dd783398101604081905262000034916200013e565b6001600160a01b0381166080526200004e60003362000055565b5062000170565b62000061828262000065565b5050565b6000828152602081815260409091206200008a91839062000a43620000cc821b17901c565b15620000615760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6000620000e3836001600160a01b038416620000ec565b90505b92915050565b60008181526001830160205260408120546200013557508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620000e6565b506000620000e6565b6000602082840312156200015157600080fd5b81516001600160a01b03811681146200016957600080fd5b9392505050565b608051611c36620001a1600039600081816101a30152818161073101528181610a630152610d180152611c366000f3fe6080604052600436106101145760003560e01c806391d14854116100a0578063ca15c87311610064578063ca15c87314610337578063d547741f14610357578063ddafda4614610377578063ef4f081f1461038d578063fc818cfb146103ca57600080fd5b806391d1485414610292578063a217fddf146102c2578063a8a98962146102d7578063bff42755146102f7578063c297983f1461031757600080fd5b806336568abe116100e757806336568abe146101dd5780634e0df3f6146101fd578063692229481461021d5780636fb7cb57146102525780639010d07c1461027257600080fd5b8063248a9ca314610119578063253070651461015c5780632f2ff15d14610171578063318c136e14610191575b600080fd5b34801561012557600080fd5b506101496101343660046116f6565b60009081526020819052604090206002015490565b6040519081526020015b60405180910390f35b61016f61016a366004611775565b610403565b005b34801561017d57600080fd5b5061016f61018c366004611826565b6104ef565b34801561019d57600080fd5b506101c57f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610153565b3480156101e957600080fd5b5061016f6101f8366004611826565b61057d565b34801561020957600080fd5b50610149610218366004611826565b6105f7565b34801561022957600080fd5b5060025461023f90600160c01b900461ffff1681565b60405161ffff9091168152602001610153565b34801561025e57600080fd5b506002546101c5906001600160a01b031681565b34801561027e57600080fd5b506101c561028d366004611856565b610622565b34801561029e57600080fd5b506102b26102ad366004611826565b610641565b6040519015158152602001610153565b3480156102ce57600080fd5b50610149600081565b3480156102e357600080fd5b5061016f6102f2366004611878565b610659565b34801561030357600080fd5b5061016f6103123660046118da565b6106a2565b34801561032357600080fd5b5061016f610332366004611954565b61091d565b34801561034357600080fd5b506101496103523660046116f6565b610987565b34801561036357600080fd5b5061016f610372366004611826565b61099e565b34801561038357600080fd5b5061014960015481565b34801561039957600080fd5b506103ad6103a8366004611775565b610a1f565b604080519283526001600160a01b03909116602083015201610153565b3480156103d657600080fd5b506002546103ee90600160a01b900463ffffffff1681565b60405163ffffffff9091168152602001610153565b61040b610a58565b341561045e5760405162461bcd60e51b815260206004820152601a60248201527f636f6c6c6563744665653a206d73672e76616c756520213d203000000000000060448201526064015b60405180910390fd5b6000806104718a8a8a8a8a8a8a8a610ad2565b91509150610481818b3085610e98565b604080516001600160a01b038c8116825260ff8c811660208401528b1682840152606082018a905260808201859052831660a082015290517fbd231b7fa4103e15e7a238c72f07e8aff310701af121895aa6c793b80245e4339181900360c00190a150505050505050505050565b60008281526020819052604090206002015461050b9033610641565b61056f5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526e0818591b5a5b881d1bc819dc985b9d608a1b6064820152608401610455565b6105798282610eac565b5050565b6001600160a01b03811633146105ed5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610455565b6105798282610f05565b6000828152602081815260408083206001600160a01b03851684526001019091529020545b92915050565b600082815260208190526040812061063a9083610f5e565b9392505050565b600082815260208190526040812061063a9083610f6a565b610664600033610641565b6106805760405162461bcd60e51b815260040161045590611992565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6106ad600033610641565b6106c95760405162461bcd60e51b815260040161045590611992565b8281146107185760405162461bcd60e51b815260206004820152601f60248201527f61646472735b5d2c20616d6f756e74735b5d3a2064696666206c656e677468006044820152606401610455565b6040516384db809f60e01b8152600481018690526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906384db809f90602401602060405180830381865afa158015610780573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a491906119c9565b60405163014daabb60e31b8152600481018890529091506000906001600160a01b03831690630a6d55d890602401602060405180830381865afa1580156107ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081391906119c9565b905060005b858110156109135761086982888884818110610836576108366119e6565b905060200201602081019061084b9190611878565b87878581811061085d5761085d6119e6565b90506020020135610f8c565b7faaa40a232aaf133fdd28f3485f6fdd163514cfadbffa981f3610f42398efe34b8288888481811061089d5761089d6119e6565b90506020020160208101906108b29190611878565b8787858181106108c4576108c46119e6565b905060200201356040516108f9939291906001600160a01b039384168152919092166020820152604081019190915260600190565b60405180910390a18061090b81611a12565b915050610818565b5050505050505050565b610928600033610641565b6109445760405162461bcd60e51b815260040161045590611992565b6002805461ffff909216600160c01b0261ffff60c01b1963ffffffff909416600160a01b029390931665ffffffffffff60a01b1990921691909117919091179055565b600081815260208190526040812061061c90610f9e565b6000828152602081905260409020600201546109ba9033610641565b6105ed5760405162461bcd60e51b815260206004820152603060248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526f2061646d696e20746f207265766f6b6560801b6064820152608401610455565b600080610a328a8a8a8a8a8a8a8a610ad2565b915091509850989650505050505050565b600061063a836001600160a01b038416610fa8565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ad05760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e747261637400006044820152606401610455565b565b6000806101418314610b265760405162461bcd60e51b815260206004820152601860248201527f496e636f72726563742066656544617461206c656e67746800000000000000006044820152606401610455565b610b4a60405180606001604052806060815260200160608152602001600081525090565b610b5860e060008688611a2d565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250610b9e61012160e08688611a2d565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506020820152610be5846101218188611a2d565b810190610bf291906116f6565b604082015280518051600091610c1091810160209081019101611a67565b90508060600151421115610c5d5760405162461bcd60e51b81526020600482015260146024820152734f62736f6c657465206f7261636c65206461746160601b6044820152606401610455565b8a60ff16816080015160ff16148015610c7f57508960ff168160a0015160ff16145b8015610c8e5750888160c00151145b610cda5760405162461bcd60e51b815260206004820152601860248201527f496e636f7272656374206465706f73697420706172616d7300000000000000006044820152606401610455565b8151805160209182012090830151600254610cff9183916001600160a01b0316610ff7565b6040516384db809f60e01b8152600481018b90526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906384db809f90602401602060405180830381865afa158015610d67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8b91906119c9565b60405163014daabb60e31b8152600481018d90529091506000906001600160a01b03831690630a6d55d890602401602060405180830381865afa158015610dd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfa91906119c9565b90506000670de0b6b3a76400008560200151600260149054906101000a900463ffffffff1663ffffffff168760400151610e349190611b07565b610e3e9190611b07565b610e489190611b26565b600254604088015191925061271091610e6c91600160c01b900461ffff1690611b07565b610e769190611b26565b975080881015610e84578097505b509450505050509850989650505050505050565b83610ea58185858561105a565b5050505050565b6000828152602081905260409020610ec49082610a43565b156105795760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6000828152602081905260409020610f1d90826110c5565b156105795760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b600061063a83836110da565b6001600160a01b0381166000908152600183016020526040812054151561063a565b82610f98818484611104565b50505050565b600061061c825490565b6000818152600183016020526040812054610fef5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561061c565b50600061061c565b60006110038484611139565b9050816001600160a01b0316816001600160a01b031614610f985760405162461bcd60e51b8152602060048201526011602482015270496e76616c6964207369676e617475726560781b6044820152606401610455565b6040516001600160a01b0380851660248301528316604482015260648101829052610f989085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261115d565b600061063a836001600160a01b0384166112af565b60008260000182815481106110f1576110f16119e6565b9060005260206000200154905092915050565b6040516001600160a01b03831660248201526044810182905261113490849063a9059cbb60e01b9060640161108e565b505050565b600080600061114885856113a2565b9150915061115581611412565b509392505050565b813b806111a45760405162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881b9bdd08184818dbdb9d1c9858dd605a1b6044820152606401610455565b600080846001600160a01b0316846040516111bf9190611b48565b6000604051808303816000865af19150503d80600081146111fc576040519150601f19603f3d011682016040523d82523d6000602084013e611201565b606091505b5091509150816112485760405162461bcd60e51b8152602060048201526012602482015271115490cc8c0e8818d85b1b0819985a5b195960721b6044820152606401610455565b805115610ea557808060200190518101906112639190611b83565b610ea55760405162461bcd60e51b815260206004820181905260248201527f45524332303a206f7065726174696f6e20646964206e6f7420737563636565646044820152606401610455565b600081815260018301602052604081205480156113985760006112d3600183611ba5565b85549091506000906112e790600190611ba5565b905081811461134c576000866000018281548110611307576113076119e6565b906000526020600020015490508087600001848154811061132a5761132a6119e6565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061135d5761135d611bbc565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061061c565b600091505061061c565b6000808251604114156113d95760208301516040840151606085015160001a6113cd878285856115d0565b9450945050505061140b565b82516040141561140357602083015160408401516113f88683836116bd565b93509350505061140b565b506000905060025b9250929050565b600081600481111561142657611426611bd2565b141561142f5750565b600181600481111561144357611443611bd2565b14156114915760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610455565b60028160048111156114a5576114a5611bd2565b14156114f35760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610455565b600381600481111561150757611507611bd2565b14156115605760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610455565b600481600481111561157457611574611bd2565b14156115cd5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610455565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561160757506000905060036116b4565b8460ff16601b1415801561161f57508460ff16601c14155b1561163057506000905060046116b4565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611684573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166116ad576000600192509250506116b4565b9150600090505b94509492505050565b6000806001600160ff1b038316816116da60ff86901c601b611be8565b90506116e8878288856115d0565b935093505050935093915050565b60006020828403121561170857600080fd5b5035919050565b6001600160a01b03811681146115cd57600080fd5b60ff811681146115cd57600080fd5b60008083601f84011261174557600080fd5b50813567ffffffffffffffff81111561175d57600080fd5b60208301915083602082850101111561140b57600080fd5b60008060008060008060008060c0898b03121561179157600080fd5b883561179c8161170f565b975060208901356117ac81611724565b965060408901356117bc81611724565b955060608901359450608089013567ffffffffffffffff808211156117e057600080fd5b6117ec8c838d01611733565b909650945060a08b013591508082111561180557600080fd5b506118128b828c01611733565b999c989b5096995094979396929594505050565b6000806040838503121561183957600080fd5b82359150602083013561184b8161170f565b809150509250929050565b6000806040838503121561186957600080fd5b50508035926020909101359150565b60006020828403121561188a57600080fd5b813561063a8161170f565b60008083601f8401126118a757600080fd5b50813567ffffffffffffffff8111156118bf57600080fd5b6020830191508360208260051b850101111561140b57600080fd5b6000806000806000606086880312156118f257600080fd5b85359450602086013567ffffffffffffffff8082111561191157600080fd5b61191d89838a01611895565b9096509450604088013591508082111561193657600080fd5b5061194388828901611895565b969995985093965092949392505050565b6000806040838503121561196757600080fd5b823563ffffffff8116811461197b57600080fd5b9150602083013561ffff8116811461184b57600080fd5b6020808252601e908201527f73656e64657220646f65736e277420686176652061646d696e20726f6c650000604082015260600190565b6000602082840312156119db57600080fd5b815161063a8161170f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611a2657611a266119fc565b5060010190565b60008085851115611a3d57600080fd5b83861115611a4a57600080fd5b5050820193919092039150565b8051611a6281611724565b919050565b600060e08284031215611a7957600080fd5b60405160e0810181811067ffffffffffffffff82111715611aaa57634e487b7160e01b600052604160045260246000fd5b806040525082518152602083015160208201526040830151604082015260608301516060820152611add60808401611a57565b6080820152611aee60a08401611a57565b60a082015260c083015160c08201528091505092915050565b6000816000190483118215151615611b2157611b216119fc565b500290565b600082611b4357634e487b7160e01b600052601260045260246000fd5b500490565b6000825160005b81811015611b695760208186018101518583015201611b4f565b81811115611b78576000828501525b509190910192915050565b600060208284031215611b9557600080fd5b8151801515811461063a57600080fd5b600082821015611bb757611bb76119fc565b500390565b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b60008219821115611bfb57611bfb6119fc565b50019056fea26469706673582212208321698972b099a987a620daaf8ecb4c3d327fff4365940ebd8077cf00f88c3564736f6c634300080b0033";