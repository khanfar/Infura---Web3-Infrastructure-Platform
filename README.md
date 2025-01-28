# Simple NFT Minter dApp

A decentralized application (dApp) that allows users to mint NFTs on the Ethereum blockchain. This project includes a smart contract for NFT creation and a React-based frontend interface.

## Features

- ERC721 compliant NFT smart contract
- User-friendly minting interface
- MetaMask wallet integration
- Real-time transaction status
- Configurable minting price
- Maximum supply limit
- Owner controls for contract management

## Project Structure

```
nft-minter/
├── contracts/
│   └── SimpleNFTMinter.sol
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── NFTMinter.js
│   │   └── App.js
│   └── package.json
└── README.md
```

## Smart Contract Details

### SimpleNFTMinter.sol
- ERC721 implementation
- Configurable minting price (default: 0.05 ETH)
- Maximum supply cap (1000 NFTs)
- Owner-only functions for:
  - Setting base URI
  - Withdrawing funds
  - Updating mint price

### Key Functions
```solidity
mintNFT() - Mint new NFT
setBaseURI(string) - Set metadata base URI
withdraw() - Withdraw collected ETH
setPrice(uint256) - Update minting price
```

## Frontend Implementation

### Technologies Used
- React.js
- Web3.js
- shadcn/ui components
- MetaMask integration

### Key Components
- Wallet connection handling
- Minting interface
- Transaction status display
- Price display
- Loading states
- Error handling

## Installation

### Prerequisites
- Node.js and npm
- MetaMask browser extension
- Hardhat or Truffle (for contract deployment)

### Smart Contract Deployment
1. Install dependencies:
```bash
npm install @openzeppelin/contracts
```

2. Deploy contract:
```bash
npx hardhat run scripts/deploy.js --network <your-network>
```

### Frontend Setup
1. Install dependencies:
```bash
npm install web3 @radix-ui/react-alert @radix-ui/react-button lucide-react
```

2. Configure environment:
```env
REACT_APP_CONTRACT_ADDRESS=<your-contract-address>
REACT_APP_NETWORK_ID=<your-network-id>
```

3. Start development server:
```bash
npm start
```

## Usage

### Connecting Wallet
1. Ensure MetaMask is installed
2. Click "Connect Wallet" button
3. Approve MetaMask connection

### Minting NFTs
1. Connect wallet
2. Check mint price
3. Click "Mint NFT" button
4. Confirm transaction in MetaMask
5. Wait for transaction confirmation

## Contract Security

### Features
- Ownable contract pattern
- Safe mint implementation
- Supply cap enforcement
- Secure withdrawal pattern

### Best Practices
- Use latest Solidity version
- OpenZeppelin secure contracts
- Function access control
- Event emission for tracking

## Error Handling

### Frontend
- Wallet connection errors
- Transaction failures
- Network issues
- Contract interaction errors

### Smart Contract
- Insufficient payment
- Supply cap reached
- Invalid operations
- Access control violations

## Development

### Local Development
1. Clone repository
2. Install dependencies
3. Start local blockchain (e.g., Hardhat Network)
4. Deploy contract
5. Start frontend

### Testing
```bash
# Smart Contract Tests
npx hardhat test

# Frontend Tests
npm test
```

## Customization

### Smart Contract
- Modify mint price
- Change maximum supply
- Add whitelist functionality
- Implement royalties

### Frontend
- Custom styling
- Additional features
- Different wallet providers
- Enhanced error handling

## Troubleshooting

Common Issues:
1. MetaMask not detected
   - Solution: Install MetaMask extension
2. Network mismatch
   - Solution: Switch to correct network in MetaMask
3. Transaction failure
   - Solution: Check gas price and wallet balance
4. Contract interaction errors
   - Solution: Verify contract address and ABI

## License

MIT License - see LICENSE file for details

## Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create pull request

## Support

- GitHub Issues
- Documentation
- Community Discord

## Roadmap

Future Features:
1. Batch minting
2. Metadata upload
3. Gallery view
4. Transaction history
5. Secondary market integration

